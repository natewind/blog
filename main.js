import markdownIt from "https://cdn.jsdelivr.net/npm/markdown-it@14.1.0/+esm";
import markdownItAnchor from "https://cdn.jsdelivr.net/npm/markdown-it-anchor@9.2.0/+esm";
import markdownItTableOfContents
	from "https://cdn.jsdelivr.net/npm/markdown-it-table-of-contents@0.9.0/+esm";

// TODO: MathJax for LaTeX!
// TODO: [CSS] Horizontally scrollable tables (check in Telegram WebView)
// TODO: Try the 404 redirect method for clean links? /blog/article

const md = markdownIt();
const toc_marker = "[[toc]]\n\n";

const whitespace = /\s+/g;
const uri_unsafe = /[^a-z0-9\-_.~]/g;
const diacritics = /[\u0300-\u036f]/g;

md.use(markdownItAnchor,
{
	slugify: (heading) => String(heading)
		.trim()
		.toLowerCase()
		.replace(whitespace, "-")
		.normalize("NFD")
		.replace(diacritics, "")
		.replace(uri_unsafe, "")
});

md.use(markdownItTableOfContents,
{
	includeLevel: [1, 2, 3],
	transformContainerOpen: () => "<nav>",
	transformContainerClose: () => "</nav>"
});

// TODO: Consider:
// git submodule add https://github.com/markdown-it/markdown-it.git vendor/markdown-it
// git submodule update --init --recursive

// TODO: Automatically fix relative links?
// TODO: Set <html lang="ru"> for the libertarian playlist?

document.addEventListener("DOMContentLoaded", function()
{
	function load_article()
	{
		const url_params = new URLSearchParams(window.location.search);
		const article = url_params.get("article");

		if (!article)
			// TODO: Redirect to https://t.me/s/<channel-username>
			// TODO: Same if article doesn’t exist?
			return;

		const path = `articles/${article}.md`;

		fetch(path)
			.then(response => response.text())
			.then(text =>
			{
				const main = document.createElement("main");
				main.innerHTML = md.render(toc_marker + text);

				document.title = main.querySelector("h1").textContent;
				const nav = main.querySelector("nav");

				document.body.appendChild(nav);
				document.body.appendChild(main);
			})
			.catch(error => console.error("Error loading the Markdown article: ", error));
	}

	load_article();
});
