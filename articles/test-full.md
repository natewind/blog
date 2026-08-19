# Markdown Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae erat lorem. Duis imperdiet felis non tellus semper, vitae laoreet nisi aliquam. Aenean placerat ipsum et nibh euismod, et posuere libero gravida. Sed dui purus, blandit ac tortor eu, dignissim commodo libero.

Ut luctus massa leo, quis rhoncus quam efficitur nec. Suspendisse consequat libero ac enim rhoncus molestie[^1]. Proin sagittis odio sit amet posuere tincidunt. Duis congue arcu vitae magna vulputate, nec sodales velit sollicitudin. Cras efficitur justo et euismod sodales.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer ac ex turpis. Vivamus convallis mi eu nibh condimentum, non commodo dolor molestie. Nunc scelerisque eros at nisl malesuada interdum. Aenean tellus mauris, accumsan[^2] nec tincidunt ut, tristique nec nunc. Nunc ornare hendrerit scelerisque. Morbi dictum massa purus, convallis porttitor ipsum ultrices sit amet.

## More Text, Title With Díäcrïtícs

Nulla sed risus elit. Donec lorem purus, ullamcorper ac metus quis, feugiat hendrerit purus.

```tex
$$
\mathbb{P}(H | e) = \frac{\mathbb{P}(H) \times \mathbb{P}(e | H)}{\mathbb{P}(e)}
$$
```

Fusce euismod felis sed dignissim consequat. `$x^2 + y^2 = 16$` Curabitur quis erat tincidunt, dapibus libero maximus, vestibulum felis. `$\tau \approx 6.28$` Morbi non imperdiet eros. In hac habitasse platea dictumst. Separator:

---

Pellentesque et rhoncus purus, at imperdiet velit. Suspendisse magna justo, aliquet nec ornare eu, elementum hendrerit sapien. Donec ex justo, eleifend et elit quis, dictum elementum sem. Mauris egestas tristique arcu quis bibendum. Suspendisse potenti. Cras dictum purus interdum, eleifend velit ut, vulputate mauris. Let’s put a [link in text](https://example.com) and [another](https://example.com). Nullam eget pulvinar odio. Nunc convallis faucibus pharetra. Vestibulum id tempor ex, sit amet consequat urna. Cras varius lorem quis justo rhoncus, id pulvinar diam iaculis. In eu odio ac nisi eleifend accumsan.

## Highlighing (**bold**, *italic*, ***both***...)

**This text is in bold**, however, *the next part is in italic*. ***This is both bold and italic.*** ~~Some strikethrough text.~~ Here are some `code` terms, not to mention `file/paths.md`.

Another example is text^superscript^ or text~subscript~, maybe even: H~2~O.

## `Code` Blocks

### Rust

```rust
fn readline() -> String
{
	let mut line = String::new();
	std::io::stdin().read_line(&mut line).unwrap();
	line
}

fn main()
{
	let sum = readline()
		.split(" ")
		.map(|s| s.trim().parse::<i32>().expect("Not an integer!"))
		.fold(0, |a, b| a + b);

	println!("{}", sum);
}
```

### Haskell

```hs
import Data.List        (isInfixOf)
import System.Directory (getDirectoryContents, removeFile)

input :: String -> IO String
input prompt = putStr prompt >> getLine

grep :: Eq a => [a] -> [[a]] -> [[a]]
grep = filter . isInfixOf

logRemoveFile :: FilePath -> IO ()
logRemoveFile path = do
	putStrLn $ "Removing file: " ++ path
	removeFile path

main :: IO ()
main = do
	substr <- input "Substring: "
	if null substr then putStrLn "Cancelled"
	else do
		files <- getDirectoryContents "."
		mapM_ logRemoveFile $ grep substr files
```

### Kotlin

```kt
val words = "The quick brown fox jumps over the lazy dog".split(" ")

// Convert the List to a Sequence
val wordsSequence = words.asSequence()

val lengthsSequence = wordsSequence
	.map { it.length }
	.filter { it > 3 }
	.take(4)

println("Lengths of first 4 words longer than 3 chars")

// terminal operation: obtaining the result as a List
println(lengthsSequence.toList())
```

### C++

```cpp
#include "cleario/include.hpp"

static constexpr auto fibonacci(int n, int a = 0, int b = 1) -> int
{
	return (n == 0) ? a
	     : (n == 1) ? b
	     : (n >= 2) ? fibonacci(n - 1, b, a + b)
	                : fibonacci(n + 1, b - a, a);
}

auto main() -> int
{
	auto const n = clear::read<int>();
	clear::print(fibonacci(n));
}
```

### C

(Testing same anchors 1)

### C

(Testing same anchors 2)

## Table

| Video                                    | Channel                       | Weapons             | Type     |
| :--------------------------------------- | :---------------------------- | ------------------: | -------: |
| [Longsword and Other Historical Weapons] | [Lukas Žehart]                | Mixed               | Staged   |
| [Rapier vs Longsword (Nick vs Mike)]     | [HEMA Instructor Nick Thomas] | Rapier vs Longsword | Sparring |
| [Fencing Team: Duelists]                 | [Adorea Olomouc]              | Rapier & Dagger     | Staged   |
| [La Canne Assault]                       | [MikeGrumbler]                | Cane                | Sparring |
| [Smallsword Assault]                     | [MikeGrumbler]                | Smallsword          | Sparring |
| [Sword Meets Mask]                       | [TheRealGladiatores]          | Longsword           | Demo     |
| [Expert Sabre Sparring]                  | [Skallagrim]                  | Sabre               | Sparring |
| [Hamlet vs Laertes]                      | [Adorea Olomouc]              | Rapier & Dagger     | Staged   |
| [Minsk Longsword Sparring Session]       | [HEMA Fight Club]             | Longsword           | Sparring |
| [Fior di Battaglia]                      | [Akademia Szermierzy]         | Longsword           | Staged   |
| [Sparring With the Bolognese Sidesword]  | [Marozzo.com]                 | Sidesword           | Sparring |
| [Adorea Longsword Duel]                  | [Adorea Olomouc]              | Longsword           | Staged   |
| [The Guards of the Sword]                | [Akademia Szermierzy]         | Longsword           | Demo     |
| [Weapons of HEMA]                        | [Martin Fabian]               | Mixed               | Sparring |
| [The Light of Life]                      | [Akademia Szermierzy]         | Mixed               | Sparring |

[Longsword and Other Historical Weapons]: https://www.youtube.com/watch?v=UPfLZFHcNv4
[Rapier vs Longsword (Nick vs Mike)]: https://www.youtube.com/watch?v=6r7VWIQCHvM
[Fencing Team: Duelists]: https://www.youtube.com/watch?v=Meif_LmczRI
[La Canne Assault]: https://www.youtube.com/watch?v=byQXXgIu8bQ
[Smallsword Assault]: https://www.youtube.com/watch?v=ZMAgDiEPkD4
[Sword Meets Mask]: https://www.youtube.com/watch?v=uBwa6NgrQL4
[Expert Sabre Sparring]: https://www.youtube.com/watch?v=n5w2Mh6CyXo
[Hamlet vs Laertes]: https://www.youtube.com/watch?v=wCwjeiBZlDI
[Minsk Longsword Sparring Session]: https://www.youtube.com/watch?v=UoM9ziAMh3s
[Fior di Battaglia]: https://www.youtube.com/watch?v=4GoQlvc_H3s
[Sparring With the Bolognese Sidesword]: https://www.youtube.com/watch?v=_geTjyP8b4c
[Adorea Longsword Duel]: https://www.youtube.com/watch?v=Cn36Pb8z3yI
[The Guards of the Sword]: https://www.youtube.com/watch?v=Cob3JMmtctY
[Weapons of HEMA]: https://www.youtube.com/watch?v=3mxbD3lRE6o
[The Light of Life]: https://www.youtube.com/watch?v=3vaFgOF7iZU&t=127s

[Lukas Žehart]: https://www.youtube.com/user/hazicha
[HEMA Instructor Nick Thomas]: https://www.youtube.com/user/Nikos3000
[Adorea Olomouc]: https://www.youtube.com/c/AdoreaOlomouc
[MikeGrumbler]: https://www.youtube.com/user/MikeGrumbler
[TheRealGladiatores]: https://www.youtube.com/user/TheRealGladiatores
[Skallagrim]: https://www.youtube.com/c/Skallagrim
[HEMA Fight Club]: https://www.youtube.com/c/HEMAFIGHTCLUB
[Akademia Szermierzy]: https://www.youtube.com/channel/UCRdamEq6Ij0pRzr3xZDobjw
[Marozzo.com]: https://www.youtube.com/c/Marozzocom
[Martin Fabian]: https://www.youtube.com/c/MartinFabian

## Quotes

> Pellentesque et rhoncus purus, at imperdiet velit. Suspendisse magna justo, aliquet nec ornare eu, elementum hendrerit sapien.
> Donec ex justo, eleifend et elit quis, dictum elementum sem.
> Mauris egestas tristique arcu quis bibendum. Suspendisse potenti. Cras dictum purus interdum, eleifend velit ut, vulputate mauris. Nullam eget pulvinar odio.
>
> Nunc convallis faucibus pharetra. Vestibulum id tempor ex, sit amet consequat urna.
>
> Cras varius lorem quis justo rhoncus, id pulvinar diam iaculis. In eu odio ac nisi eleifend accumsan.

> If you take common sense and rigorously apply it, through multiple inferential steps, to areas outside everyday experience, successfully avoiding many possible distractions and tempting mistakes along the way, then it often ends up as a minority position, and people give it a special name.
>
> *Eliezer Yudkowsky*

> Extremism in the defence of liberty is no vice. Moderation in the pursuit of justice is no virtue.
>
> *Barry Morris Goldwater*

## Lists

### Unordered (media)

* The Wizarding World
	* Harry Potter
		* The Philosopher’s Stone
		* The Chamber of Secrets
		* The Prisoner of Azkaban
		* The Goblet of Fire
		* The Order of the Phoenix
		* The Half-blood Prince
		* The Deathly Hallows
	* Hogwarts Library
		* Fantastic Beasts and Where to Find Them
		* Quidditch Through the Ages
		* The Tales of Beedle the Bard
* Middle-Earth
	* The Silmarillion
	* The Hobbit, or There and Back Again
	* The Lord of the Rings

### Unordered (food)

* Sushi Rolls *(with soy sauce and wasabi)*
	* **Kamikaze** *(Tokyo City)*
	* **Sake Kappa Maki**
	* **Unagi Maki**
* Pizza
	* **Pepperoni & Mushrooms**
	* **Chorizo & Red Onions** *(with barbecue sauce)*
* Dumplings *(fried)*
	* **Duck Gyoza** *(VIČI)*
	* **Shrimp Gyoza** *(VIČI)*
	* **Beef & Vegetable Mandu** *(Bibigo)*
* Meat
	* **Teriyaki Shrimp** *(with sesame seeds)*
	* **Teriyaki Chicken** *(with sesame seeds)*
	* **Chicken Steak** *(grilled with spices & Italian seasoning)*
	* **Turkey Stew** *(with carrots & onions)*
	* **Beef Stroganov** *(with mushrooms)*
	* Chicken Schnitzel *(aerogrilled)*
	* Chicken Kiev *(aerogrilled)*
	* Vienna Sausages *(fried)*
	* Bacon *(fried)*

### Ordered (recipe)

1. Take a large enough pot and coat the bottom with oil
2. Remove tendons from the chicken, cut it into pieces and place them in the pot
3. Cook over medium heat, stir periodically
4. Add the sauce and simmer until the desired thickness is achieved
5. Add sesame seeds to taste

### Misc.

1. **Install**
	1. `openvpn3` (ppa)
	2. `libfuse2` (dependency)
	3. `jetbrains-toolbox` (appimage)
2. **VPN Configuration:**
	```sh
	tail -n 4 config.files/resolv.conf | sudo tee -a /etc/resolv.conf

	cp config.files/work.sh ~/.bash
	echo "source ~/.bash/work.sh" >> ~/.bash_aliases

	# Download the VPN profile from https://vpn.example.one
	vpn-example import-profile profile-*.ovpn
	```
3. Blockquote
	> Qjkngkd sgkvn sfdvjkndblksj alkngvslk
	>
	> Gksjgnl edlkgnsrgrlnmg
	>
	> Rgfdnldkfbm wrhbjkln aefgbr
4. **JetBrains Toolbox**
	* [x] Log in
	* [ ] Launch Toolbox App at system startup
	* [ ] Some other example
	* [x] Also checked
5. List with a separator
	* Qweergthfjmgh
	* Rfhgnhghmfgfgn
		---
	* Msegrdfsadbc
	* Dtgjyuiluykty

## Image

### With a link

[![Alt text](../sandbox/test.png)](https://github.com/natewind/cleario)

### With a default link to the image

![Alt text](../sandbox/test.png)

[^1]: And they all saw separate plates, on a table in the waiting room marked “please take only one” so nobody knew what was being tested, and none of them saw the others’ cookie choices.

[^2]: Recall the Bayesian’s earlier thought that, after seeing five subjects select green cookies followed by one subject selecting a red cookie, we’d already picked up strong evidence *against* the proposition: “Subjects in this experimental population lopsidedly prefer red cookies over green cookies.”
