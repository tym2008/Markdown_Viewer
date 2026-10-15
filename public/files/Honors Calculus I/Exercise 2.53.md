# Exercise 2.53
---
## 1.$\lim_{x \to 0} \frac{x+ \sin x}{x+\cos x}$
Evaluate the limits of the numerator and denominator separately.
Both $x$, $\sin x$, and $\cos x$ are continuous everywhere on $\mathbb{R}$:
So for the numerator:
$$\lim_{x \to 0} (x + \sin x) = \lim_{x \to 0} x + \lim_{x \to 0} \sin x = 0 + \sin(0) = 0$$
For the denominator:
$$\lim_{x \to 0} (x + \cos x) = \lim_{x \to 0} x + \lim_{x \to 0} \cos x = 0 + \cos(0) = 0 + 1 = 1$$
Apply the quotient law for limits since the limit of the denominator is non-zero ($\lim_{x \to 0} (x + \cos x) = 1 \neq 0$):
$$\lim_{x \to 0} \frac{x + \sin x}{x + \cos x} = \frac{\lim_{x \to 0}(x + \sin x)}{\lim_{x \to 0}(x + \cos x)} = \frac{0}{1} = 0$$
So the Final Answer is:
$$\lim_{x \to 0} \frac{x + \sin x}{x + \cos x} = 0$$
$Q.E.D$

## 6.$\lim_{x\to 0} \frac{\sqrt[n]{(1+a_1x)(1+a_2x)+\cdots+(1+a_nx)} -1}{x}$


First, we've known this before:
$$A^n - B^n = (A - B)(A^{n-1} + A^{n-2}B + \cdots + AB^{n-2} + B^{n-1})$$
Do some algebra, and we'll get:
$$A - B = \frac{A^n - B^n}{A^{n-1} + A^{n-2}B + \cdots + B^{n-1}}$$
Without loss of generality, we can assume:
$A = \sqrt[n]{(1+a_1x)(1+a_2x)\cdots(1+a_nx)}$
$B = 1$
And it becomes:
$$\sqrt[n]{(1+a_1x)\cdots(1+a_nx)} - 1 = \frac{(1+a_1x)(1+a_2x)\cdots(1+a_nx) - 1}{A^{n-1} + A^{n-2} + \cdots + A + 1}$$
For the numerator on the right side:
$$(1+a_1x)(1+a_2x)\cdots(1+a_nx) = 1 + (a_1 + a_2 + \cdots + a_n)x + x^2 \cdot Q(x)$$
Here, $Q(x)$ is a polynomial formed by the higher-order terms of the expansion.
Minus 1, and we'll get:
$$(1+a_1x)\cdots(1+a_nx) - 1 = (a_1 + a_2 + \cdots + a_n)x + x^2 \cdot Q(x)$$
And the original formula can be written as:
$$\frac{\sqrt[n]{(1+a_1x)\cdots(1+a_nx)} - 1}{x} = \frac{(a_1 + a_2 + \cdots + a_n)x + x^2 \cdot Q(x)}{x \left( A^{n-1} + A^{n-2} + \cdots + A + 1 \right)}$$
Cancel $x$ from both the numerator and the denominator (since $x \to 0$ and $x \neq 0$):
$$= \frac{(a_1 + a_2 + \cdots + a_n) + x \cdot Q(x)}{A^{n-1} + A^{n-2} + \cdots + A + 1}$$

Then, take the limit differently:
When $x \to 0$:
For the numerator:
$$\lim_{x\to 0} \Big[ (a_1 + a_2 + \cdots + a_n) + x \cdot Q(x) \Big] = a_1 + a_2 + \cdots + a_n + 0 = a_1 + a_2 + \cdots + a_n$$
For the denominator：
$$\lim_{x\to 0} A = \lim_{x\to 0} \sqrt[n]{(1+0)(1+0)\cdots(1+0)} = 1$$
This factor consists of $n$ items, and the limit of each items is $1$:
$$\lim_{x\to 0} \left( A^{n-1} + A^{n-2} + \cdots + A + 1 \right) = \underbrace{1 + 1 + \cdots + 1}_{n \text{ items}} = n$$
And we'll get the final limit:
$$\lim_{x\to 0} \frac{\sqrt[n]{(1+a_1x)(1+a_2x)\cdots(1+a_nx)} - 1}{x} = \frac{a_1 + a_2 + \cdots + a_n}{n}$$
$Q.E.D$