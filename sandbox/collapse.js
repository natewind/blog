"use strict"

const has_sublist = node => node.querySelector("ul") !== null;

const clicked_self = (target, self) => target == self
	|| target.parentNode == self && target.tagName == "SMALL"

function make_collapsible(node)
{
	node.addEventListener("click", event =>
	{
		if (clicked_self(event.target, node))
			node.classList.toggle("collapsed");
	});
}

const make_lists_collapsible = () => Array
	.from(document.querySelectorAll("li"))
	.filter(has_sublist)
	.forEach(make_collapsible);

document.addEventListener("DOMContentLoaded", make_lists_collapsible);
