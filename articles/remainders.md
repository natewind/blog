# Chinese Remainder Theorem for Human Beings

Two days ago, I spent several hours trying to understand the Chinese remainder theorem because most explanations I could find are a waste of disk space. It’s either unreadable overcomplicated proofs or purely practical step-wise algorithms with little to no justification.

Nobody should have to suffer through explainations that outsource thinking to the reader, so here’s one that doesn’t.

## Algorithm

### Problem

Given a system of modular equations:

$$
\begin{align*}
	\left\lbrace
	\begin{aligned}
		x &\equiv a_1 \pmod{m_1} \\
		x &\equiv a_2 \pmod{m_2} \\
		  &\vdots                \\
		x &\equiv a_n \pmod{m_n},
	\end{aligned}
	\right.
\end{align*}
$$

solve it for $x \pmod{M}$, where:

* $m = \set{m_1, m_2, \ldots, m_n}$,
* $m$ are pairwise coprime,
* $M = \prod m$.

### Solution

Since we want to get different results depending on the modulus, let’s build $x$ out of parts that get filtered by the modulo operation.

For every $i$, we need a number that turns into zero modulo any $m$ except $m_i$. In other words, it must be divisible by all $m$ except $m_i$. Because $m$ are pairwise coprime, one such number is $M_i = \frac{M}{m_i}$.

So the first step to building $x$ is:

$$
x_M = \sum\limits_{i = 1}^{n} M_i.
$$

Taking $x_M$ modulo $m_i$ filters out everything but $M_i$.

Now, we don’t need the actual values of $M_i$, as we only use them to indicate which summands to preserve, so let’s turn them all into ones: $\frac{M_i}{M_i} = 1$.

However, because we still want our filtering to work, we will divide by multiplying by the inverse $M_i^{-1} \pmod{m_i}$ to ensure it only cancels out modulo $m_i$:

$$
x_I = \sum\limits_{i = 1}^{n} M_i \times M_i^{-1}.
$$

To find each inverse, simply use the [extended Euclidean algorithm](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm).

And, of course, the last step is to multiply every $1$ by the respective $a_i$:

$$
x \equiv \sum\limits_{i = 1}^{n} a_i \times M_i \times M_i^{-1} \pmod{M}.
$$

$M$ is a multiple of each $m_i$, that is, $M \equiv 0 \pmod{m_i}$, so adding $M$ to $x$ any number of times doesn’t change anything, and we can normalize the answer by taking it modulo $M$.

## Example

### Problem

$$
\begin{align*}
	\left\lbrace
	\begin{aligned}
		x &\equiv 1 \pmod{2} \\
		x &\equiv 2 \pmod{3} \\
		x &\equiv 4 \pmod{5} \\
		x &\equiv 6 \pmod{7}
	\end{aligned}
	\right.
\end{align*}
$$

### Solution

1. $M = 2 \times 3 \times 5 \times 7 = 210$.
2. Find $M_i$, $M_i^{-1}$ and the summands of $x$:

	| $a_i$ | $m_i$ | $M_i = \frac{M}{m_i}$ | $M_i^{-1} \pmod{m_i}$ | $a_i \times M_i \times M_i^{-1}$ |
	|:-----:|:-----:|:----------------------|:---------------------:|---------------------------------:|
	|  $1$  |  $2$  | $\frac{210}{2} = 105$ |          $1$          |  $1 \times 105 \times 1 = 105$   |
	|  $2$  |  $3$  | $\frac{210}{3} = 70$  |          $1$          |  $2 \times  70 \times 1 = 140$   |
	|  $4$  |  $5$  | $\frac{210}{5} = 42$  |          $3$          |  $4 \times  42 \times 3 = 504$   |
	|  $6$  |  $7$  | $\frac{210}{7} = 30$  |          $4$          |  $6 \times  30 \times 4 = 720$   |

5. $x \equiv 105 + 140 + 504 + 720 = 1469 \equiv 209 \pmod{210}$.
