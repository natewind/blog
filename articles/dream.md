# A Dream of the Perfect Programming Language

This is a quick summary of what I imagine The Perfect Programming Language™ would look like. I plan to write a more comprehensive article that will, hopefully, slowly evolve into an informal specification for my own future language, but I don’t have time for it right now. Plus, I need way more education and research.

Still, I believe I do have some valuable things to say, as I suspect some of these ideas or combinations of them are original or at least not well-known in the mainstream (and some are obvious but still need repeating). Also, some of them are already clear from the first item but are worth reiterating and can be implemented separately (incrementalism FTW).

For now, I’m barely gonna justify any of them and will try not to respond to criticism, unless I can’t stop myself (again, the lack of time). Thus, the target audience for this article are people who already more or less share my approach to programming and don’t need to be convinced.

Who knows, maybe some of them will pick up an idea or two that they don’t already know and put them to the test in their own pet languages or even in some mainstream ones they happen to contribute to.

I do understand that not all of these ideas may rest solely on well-established theory (especially the one in the appendix) and that some of them still have unsolved problems, but my limited knowledge of computer science leads me to beleive that nothing on this list is impossible or impractical in the long run.

**The general idea** is to maximize safety and expressiveness without introducing any runtime overhead, by use of various language and library features that automate coding and make the high-level code **purely semantic,** since the low-level technical details are usually pretty mechanical and do not require a human-level general intelligence in every specific case.

And finally, not that anybody asked, but to explain some of my perspective, the languages I come from are: **C → C++ → Python → Modern C++ → Haskell → Rust.**

Anyway, here goes nothing:

1. The language must be **purely functional.** Functional code is easier to reason and make guarantees about, and it’s easier to integrate with dependent types (see below). Not to mention how elegant it can be (try Haskell if you haven’t). You can easily find heaps of articles explaining this point better, so I’m not gonna linger on it.
2. It should rely on **zero-cost abstractions** to be as fast as C/C++/Rust (more specifics below).
3. **Compile time** is important, but it’s ok to sacrifice it to reduce **design time, debug time** and **runtime.** Machine time is much cheaper than human time, and once you automate a task, a machine runs it more efficiently and reliably. And runtime gets multiplied by the number of devices that run it and the number of times it is run.
4. Probably compile to C; that automatically gives a language total platform coverage, since every toaster has a C compiler.
5. The type system must be **inferred, strong, static.**
6. Use sum types (e. g. `Maybe`/`Option`) for **recoverable** errors like Haskell and Rust do.
7. Instead of using panics or, goodness forbid, ~~glorified `goto`~~ exceptions, prevent **unrecoverable** errors on one hand and double checks on the other with **dependent types** (including some **axioms** for hardware input ranges listed in specs). Ideally, the language should be [**total**](https://en.wikipedia.org/wiki/Total_functional_programming) (see the appendix). If we can’t have that without making it unusable, Rust-style panics are the lesser evil.
8. The standard **integer** type should mimic the C++ [bounded::integer](https://github.com/davidstone/bounded-integer) library (but with multiple ranges): instead of choosing between `(u)int8/16/32/64/BigInt` yourself, you just choose ranges of possible values, and it statically infers ranges that result from operations. In a dependently typed language, it could, for example, be a bounded `Nat` with `int` types as compiler optimizations (currently, even Idris only [replaces](https://github.com/idris-lang/Idris-dev/pull/4685) `Nat` with `BigInt`).
9. It is possible that for competing with C in terms of performance, it would still need some kind of **`unsafe`** blocks where imperative code is allowed — and maybe even pointer manipulation. Even better if there could be a sublanguage for writing custom optimizations, ideally with formal proofs of their correctness. Either way, they should mostly be used in low-level libraries and not in ordinary code.
10. There should be no dynamic **garbage collector.** And while Rust’s borrow checker is pure awesomeness, it has a high entry threshold (unless you’re coming from C++ and are tired of manually keeping track of lifetimes). I think we can do better. The choice between **copying, borrowing** and **moving** could be made automagically based on the last use (after the compiler decides on the order of operations), the size of the object and how it’s used in the callee (I’m not sure, maybe whole program analysis is necessary for that — or some kind of interface for TUs to talk during compilation).
11. **Mutable state** is an awesome compiler optimization and should be used whenever possible. **Linear types** in some capacity should help with it — and with static memory management.
12. Use **strict** evaluation by default but have **lazy** iterators/lists (not linked lists though) that are compiled into imperative loops. As far as I know, lazy evaluation by default is the main reason Haskell can’t have ~~nice things~~ a static garbage collector.
13. **Vectors** should be iterable without any intermediate `iter()` calls. Maybe it’s better if the choice between a vector and a **lazy iterator** is made by the compiler, based on how you construct and use it.
14. For string representation, use [UTF-8 everywhere](http://utf8everywhere.org).
15. **`constexpr`** all the things! If it can be done in compile time, it should be. And whether something is really done at compile time or at runtime is a low-level implementation detail with no semantics.
16. Ideally, the compiler together with constructor functions from the standard library should themselves choose between static and dynamic arrays, strings and string views, associative data structures and their [frozen twins](https://github.com/serge-sans-paille/frozen) etc. based on `constexpr`ness of them and their sizes, `const`ness (based on usage), bounds from dependent types and other static clues.
17. Whether it’s via the `State` monad, linear types or something else, convenient **hash maps** should definitely be a thing. Losing such a fundamental data structure is not an acceptable trade‑off.
18. There should be no traditional, inheritance-based OOP, only algebraic data types, typeclasses/traits and pattern matching. And possibly Rust-style [trait objects](https://doc.rust-lang.org/book/ch17-02-trait-objects.html) for dynamic dispatch: vtables are faster than pattern-matching, and I think sometimes it is the right solution.
19. Haskell/Idris syntax is mostly awesome, use it.
20. **First-class functions** are a must, and so is **currying.** Pointfree programming is beautiful and consice when not overdone, and having lambdas everywhere is ugly because explicit arguments in them mix abstraction levels.
21. Copy Rust’s editions, module system and Cargo.
22. **The standard library** should be well-designed and built up steadily but should eventually include even things like audio and graphics (and way before that — cryptography). If it’s not an unsolved mathematical problem, there’s no reason it can’t have a standard solution. The same common problems getting solved by different people is a waste of man‑hours that can be spent developing something new.

## Appendix: On Turing Completeness

This isn’t something I have fully reflected upon, but I have a strong suspicion that Turing completeness is overrated and no useful program actually needs it. In short: when you write or debug code, you’re already doing halting analysis in your head, however imperfectly. Your human brain is limited in its abilities, and most languages don’t offer enough help in this regard, but you never actually **want** your code to do unpredictable things (even in machine learning and cryptography, it’s domesticated, predictable unpredictability). You want its behaviour to be deterministic, you want it to do what you’ve told it to. Thus, (I speculate) all that unprovable stuff is garbage, and all you need is a reliable total subset.

In [other words](https://news.ycombinator.com/item?id=10449616),

> The halting problem merely prevents a program from evaluating a nontrivial property of another program with perfect accuracy. It does not prevent a program from evaluating a nontrivial property (bound checks, type safety, whatever) with possible outputs “Yes” or “Either no, or you’re trying to trick me, so cut that out and express what you mean more straightforwardly kthx”.
