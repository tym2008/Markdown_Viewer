# Exercise 2.58
---
## 4.$\lim_{x \to \infty} \left(\cos\sqrt{x+a} - \cos\sqrt{x+b}\right)$
From what we've learned in high school:
$$\cos A - \cos B = -2\sin\left(\frac{A+B}{2}\right)\sin\left(\frac{A-B}{2}\right)$$
Place $A = \sqrt{x+a}$，$B = \sqrt{x+b}$  in, and we'll have:
$$\cos\sqrt{x+a} - \cos\sqrt{x+b} = -2\sin\left(\frac{\sqrt{x+a}+\sqrt{x+b}}{2}\right)\sin\left(\frac{\sqrt{x+a}-\sqrt{x+b}}{2}\right)$$
In the later part,
$$\frac{\sqrt{x+a}-\sqrt{x+b}}{2} = \frac{(x+a) - (x+b)}{2(\sqrt{x+a}+\sqrt{x+b})} = \frac{a-b}{2(\sqrt{x+a}+\sqrt{x+b})}$$
When $x \to \infty$,
$$\lim_{x \to \infty} \frac{a-b}{2(\sqrt{x+a}+\sqrt{x+b})} = 0$$
So:
$$\lim_{x \to \infty} \sin\left(\frac{\sqrt{x+a}-\sqrt{x+b}}{2}\right) = 0$$
Since the $sin$ function is bounded,
$$\left|\sin\left(\frac{\sqrt{x+a}+\sqrt{x+b}}{2}\right)\right| \leq 1$$
And the product of a bounded function and an infinite small function approaching 0 approaches 0:
$$\lim_{x \to \infty} \left(\cos\sqrt{x+a} - \cos\sqrt{x+b}\right) = 0$$
$Q.E.D$

## 6. $\lim_{x \to \infty} \frac{\left(x - \sqrt{x^2 - 1}\right)^n + \left(x + \sqrt{x^2 - 1}\right)^n}{x^n}, \quad \text{where } n \in \mathbb{N}_+$
Split them into 2 parts,
$$\frac{\left(x - \sqrt{x^2 - 1}\right)^n + \left(x + \sqrt{x^2 - 1}\right)^n}{x^n} = \left(\frac{x - \sqrt{x^2 - 1}}{x}\right)^n + \left(\frac{x + \sqrt{x^2 - 1}}{x}\right)^n$$

For part 1, we'll have:
$$\frac{x - \sqrt{x^2 - 1}}{x} = 1 - \sqrt{1 - \frac{1}{x^2}}$$
$$\lim_{x \to \infty} \frac{x - \sqrt{x^2 - 1}}{x} = 1 - 1 = 0$$
So,
$$\lim_{x \to \infty} \left(\frac{x - \sqrt{x^2 - 1}}{x}\right)^n = 0^n = 0$$

For part 2, we'll have:
$$\frac{x + \sqrt{x^2 - 1}}{x} = 1 + \sqrt{1 - \frac{1}{x^2}}$$
$$\lim_{x \to \infty} \left(1 + \sqrt{1 - \frac{1}{x^2}}\right) = 1 + 1 = 2$$
So,
$$\lim_{x \to \infty} \left(\frac{x + \sqrt{x^2 - 1}}{x}\right)^n = 2^n$$

Put 2 parts together, we'll have:
$$\lim_{x \to \infty} \frac{\left(x - \sqrt{x^2 - 1}\right)^n + \left(x + \sqrt{x^2 - 1}\right)^n}{x^n} = 0 + 2^n = 2^n$$

$Q.E.D$