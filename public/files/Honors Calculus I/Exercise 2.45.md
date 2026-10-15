# Exercise 2.45
---
## 1.$\lim_{x \to 1} (\frac{m}{1-x^m}-\frac{n}{1-x^n})$

Assume that $f(x)=\frac{m}{1-x^m}$, and $g(x)=\frac{n}{1-x^n}$.
And we'll find that $\lim_{x \to 1} (\frac{m}{1-x^m}-\frac{n}{1-x^n})=\lim_{x \to 1} f(x)-g(x)$.

Now focus on $f(x)$.
We can notice that
 $$1 - x^m = (1 - x)(1 + x + x^2 + \cdots + x^{m-1})$$
So:
 $$f(x) - \frac{1}{1-x} = \frac{m}{1 - x^m} - \frac{1}{1 - x} = \frac{m - (1 + x + x^2 + \cdots + x^{m-1})}{1 - x^m}     \cdots \space \cdots \textcircled{1}$$ 
And we can also find:
$$m - (1 + x + x^2 + \cdots + x^{m-1}) = (1 - 1) + (1 - x) + (1 - x^2) + \cdots + (1 - x^{m-1}) = \sum_{k=1}^{m-1} (1 - x^k)$$
For a single one:
$$1 - x^k = (1 - x)(1 + x + x^2 + \cdots + x^{k-1})$$
So we can have:
$$m - (1 + x + x^2 + \cdots + x^{m-1}) = (1 - x) \sum_{k=1}^{m-1} (1 + x + x^2 + \cdots + x^{k-1})$$
Put it back to $\textcircled{1}$, and we'll get:
$$f(x) - \frac{1}{1-x} = \frac{(1 - x) \sum_{k=1}^{m-1} (1 + x + \cdots + x^{k-1})}{(1 - x)(1 + x + x^2 + \cdots + x^{m-1})} = \frac{\sum_{k=1}^{m-1} (1 + x + \cdots + x^{k-1})}{1 + x + x^2 + \cdots + x^{m-1}}$$
Make $x \to 1$:
For the denominator:
$$\lim_{x \to 1} (1 + x + x^2 + \cdots + x^{m-1}) = m$$
For the molecular:
$$\lim_{x \to 1} \sum_{k=1}^{m-1} (1 + x + \cdots + x^{k-1}) = \sum_{k=1}^{m-1} k = \frac{(m - 1)m}{2}$$
So:
$$\lim_{x \to 1} \left( f(x) - \frac{1}{1-x} \right) = \frac{\frac{(m - 1)m}{2}}{m} = \frac{m - 1}{2}$$
That means:
$$\lim_{x\to 1}f(x) = \frac{1}{1-x} + \frac{m-1}{2}$$
Do the same thing to $g(x)$:
$$\lim_{x \to 1} \left( g(x) - \frac{1}{1-x} \right) = \frac{n - 1}{2}$$

So we can get:
$$\lim_{x \to 1} \big(f(x) - g(x)\big) = \lim_{x \to 1} \left[ \left(f(x) - \frac{1}{1-x}\right) - \left(g(x) - \frac{1}{1-x}\right) \right] = \frac{m - 1}{2} - \frac{n - 1}{2} = \frac{m - n}{2}$$
That is, $\lim_{x \to 1} (\frac{m}{1-x^m}-\frac{n}{1-x^n}) = \frac{m-n}{2}$.
$Q.E.D$

---

## 2.$\lim_{x\to 1}\frac{x+x^2+x^3+\cdots+x^n+n}{x-1}$

We can easily find that:
$$x + x^2 + \cdots + x^n - n = (x - 1) + (x^2 - 1) + (x^3 - 1) + \cdots + (x^n - 1)$$
So:
$$\frac{x + x^2 + \cdots + x^n - n}{x - 1} = \sum_{k=1}^n \frac{x^k - 1}{x - 1}$$
Because of:
$$x^k - 1 = (x - 1)(x^{k-1} + x^{k-2} + \cdots + x + 1)$$
So:
$$\frac{x^k - 1}{x - 1} = x^{k-1} + x^{k-2} + \cdots + x + 1$$
When $x \to 1$:
$$\lim_{x \to 1} \frac{x^k - 1}{x - 1} = \underbrace{1 + 1 + \cdots + 1}_{k \space items} = k$$
Sum them up:
$$\lim_{x \to 1} \frac{x + x^2 + \cdots + x^n - n}{x - 1} = \sum_{k=1}^n k = 1 + 2 + \cdots + n = \frac{n(n + 1)}{2}$$

So we've got the answer:
$$\lim_{x\to 1}\frac{x+x^2+x^3+\cdots+x^n+n}{x-1}= \frac{n(n + 1)}{2}$$
$Q.E.D$