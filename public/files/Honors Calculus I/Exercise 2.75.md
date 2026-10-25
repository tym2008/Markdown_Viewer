# Exercise 2.75
---
We want to prove that
$$x_n = \sqrt{\pi} + \frac{1}{2} \sin x_{n-1}, \quad n = 1, 2, 3, \dots$$
is a Cauchy Sequence and it converges to  $x = \sqrt{\pi} + \frac{1}{2} \sin x$'s only positive real solution.

---
## Part 1. Prove it's a Cauchy Sequence.
We know that:
$$\sin A - \sin B = 2 \sin(\frac{A - B}{2}) \cos(\frac{A + B}{2})$$
$$|\sin A - \sin B| = 2 \left| \sin(\frac{A - B}{2}) \right| \cdot \left| \cos(\frac{A + B}{2}) \right|$$
For ant $\theta$, there must be:$|cos \theta| \le 1$,$|sin \theta| \le |\theta|$,
So, use it to calculate $|x_{n+1}-x_n|$:
$$|x_{n+1}-x_n|=| \frac{1}{2}(\sin x_n - \sin x_{n-1}) | \leq \frac{1}{2} |x_n - x_{n-1}|$$
Apply it recursively,
$$|x_{n+1} - x_n| \le (\frac{1}{2})^n |x_1 - x_0|$$
And we'll get:
$$|x_m - x_n| \le \sum_{k=n}^{m-1} |x_{k+1} - x_k| \le |x_1 - x_0| \sum_{k=n}^\infty (\frac{1}{2})^k = |x_1 - x_0| (\frac{1}{2})^{n-1}$$
When $n\to\infty$, the upper one goes to zero, which satisfies Cauchy Sequence's Definition.
So we know that $x_n$ is a cauchy sequence.

---
## Part 2. The sequence converges to the only solution of $x = \sqrt{\pi} + \frac{1}{2} \sin x$
Assume:
$$\lim_{n \to \infty} x_n = A$$
Take $n\to\infty$ on both sides of: $x_n = \sqrt{\pi} + \frac{1}{2}\sin x_{n-1}$, due to the $sin$ function is continuous:
$$A = \sqrt{\pi} + \frac{1}{2}\sin A$$
So $A$ is a solution of  $x = \sqrt{\pi} + \frac{1}{2} \sin x$.
Then, prove $A$ is the only solution to the equation:
Assume it has two different solutions:
$$a = f(a), b = f(b)$$
From what's shown above, we have:
$$|a - b| = |f(a) - f(b)| \leq \frac{1}{2}|a - b|$$
$$\frac{1}{2}|a - b| \le 0 \implies |a - b| = 0 \implies a = b$$
Opposite to our assumption. So the equation has only one solution.

And we have $x = \sqrt{\pi} + \frac{1}{2}\sin x \ge \sqrt{\pi} - \frac{1}{2}$
We can easily prove that $\sqrt{\pi}>\frac{1}{2}$.
So the Solution of the equation is a positive one.

From what's shown above, we know that $$x_n = \sqrt{\pi} + \frac{1}{2} \sin x_{n-1}, \quad n = 1, 2, 3, \dots$$
is a Cauchy Sequence and it converges to  $x = \sqrt{\pi} + \frac{1}{2} \sin x$'s only positive real solution.

$Q.E.D$