# Exercise 3.12
---

## (a).Is $f(x) = x*D(x)$ differentiable at nonzero $a$?
1. $a \in Q$
The function value is $f(a) = a*D(a) = a*1 = a \neq 0$.
Since the irrational numbers are dense in $R$, there exists a sequence of irrational numbers $\{x_n\}$ such that $x_n \to a$ as $n \to \infty$.
For each irrational term, $D(x_n) = 0$, which gives $f(x_n) = x_n*0 = 0$.
Take n to the limit:
$$\lim_{n \to \infty} f(x_n) = 0 \neq a = f(a)$$
Therefore, $f(x)$ is discontinuous at $a$.


1. if $a$ is irrational
The function value is $f(a) = a*D(a) = a*0 = 0$.
Since the rational numbers are dense in $R$, there exists a sequence of rational numbers $\{r_n\}$ such that $r_n \to a$ as $n \to \infty$.
For every rational term, $D(r_n) = 1$, which gives $f(r_n) = r_n***1 = r_n$.
Take n to the limit:
$$\lim_{n \to \infty} f(r_n) = \lim_{n \to \infty} r_n = a \neq 0 = f(a)$$
Therefore, $f(x)$ is discontinuous at $a$.
Since $f(x)$ is not continuous at any $a \neq 0$, it cannot be differentiable at any nonzero $a$.

---

### (b) For $p > 0$, analyze the differentiability of $g(x) = |x|^p*D(x)$ at $0$.

Since $0$ is rational, $D(0) = 1$, and:
$$g(0) = |0|^p*D(0) = 0*1 = 0$$
By definition, $g$ is differentiable at $0$ if and only if the limit exists:
$$L = \lim_{x \to 0} \frac{g(x) - g(0)}{x - 0} = \lim_{x \to 0} \frac{|x|^p*D(x)}{x}$$
Then, split p into three parts:

1. $p > 1$
Since $0 \le D(x) \le 1$ for all $x \in R$:
$$\left| \frac{g(x) - g(0)}{x - 0} \right| = \left| \frac{|x|^p*D(x)}{x} \right| = \frac{|x|^p}{|x|}*D(x) = |x|^{p-1}*D(x) \le |x|^{p-1}$$
Because $p > 1$, so $p - 1 > 0$:
$$\lim_{x \to 0} |x|^{p-1} = 0$$
By the Squeeze Theorem:
$$\lim_{x \to 0} \left| \frac{g(x) - g(0)}{x - 0} \right| = 0 \implies \lim_{x \to 0} \frac{g(x) - g(0)}{x - 0} = 0$$
Thus, $g(x)$ is differentiable at $x = 0$ with $g'(0) = 0$.

2.Case 2: $p = 1$
The difference quotient simplifies to:
$$\frac{g(x) - g(0)}{x - 0} = \frac{|x|*D(x)}{x}$$
Along positive rationals ($x \in Q$, $x > 0$): $|x| = x$ and $D(x) = 1$, so:
$$\frac{x*1}{x} = 1 \to 1$$
Along positive irrationals ($x \notin Q$, $x > 0$): $D(x) = 0$, so:
$$\frac{|x|*0}{x} = 0 \to 0$$
Because these two limits differ, the right-hand limit does not exist, so the full limit does not exist. 
Hence, $g(x)$ is not differentiable at $x = 0$.
3.Case 3: $0 < p < 1$
We can rewrite the quotient magnitude as:
$$\left| \frac{g(x) - g(0)}{x - 0} \right| = |x|^{p-1}*D(x) = \frac{D(x)}{|x|^{1-p}}$$

Because $0 < p < 1$, we have $1 - p > 0$.
Choosing a rational sequence $x_n = \frac{1}{n} \to 0$ as $n \to \infty$:
$$D(x_n) = 1 \implies \frac{g(x_n) - g(0)}{x_n - 0} = \frac{1}{\left(\frac{1}{n}\right)^{1-p}} = n^{1-p} \to +\infty$$
Since the quotient grows without bound along this sequence, the limit does not exist. Thus, $g(x)$ is not differentiable at $x = 0$.

From what's shown above, we know that if $p > 1$, $g(x)$ is differentiable at $0$, with $g'(0) = 0$.If $0 < p \le 1$, $g(x)$ is not differentiable at $0$.
$Q.E.D.$
