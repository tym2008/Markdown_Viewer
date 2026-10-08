# Exercise 2.19
---

### Part 1 proof: 

Define the function $f(x) = \frac{x^2 + 1}{2}$. Then we know $x_n = f(x_{n-1})$.
We know that $(x-1)^2\geq0$, so do some algebra, and we'll get $x^2-2x+1\geq0$,
which is also equal to $x^2+1\geq2x$.
Divide both sides by 2, and we'll get $\frac{x^2+1}{2}\geq x$.
From the problem, we know that $x_n=f(x_{n-1})$, so we know that $x_n\geq x_{n-1}$.
What's more, we can know that $x^2\leq 1$ because $x\in [0,1]$, so we can know that $1 \geq x_n \geq x_{n-1}$.
So we know that the sequence ${x_n}$ is bounded above and non-decreasing. So the limit $L = \lim_{n \to \infty} x_n$ exists, and $0 \le L \le 1$.
Take the limit on both sides: 
$$L = \frac{L^2 + 1}{2} \implies L^2 - 2L + 1 = 0 \implies (L - 1)^2 = 0 \implies L = 1$$
Therefore,
$$\lim_{n \to \infty} x_n = 1.$$
$Q.E.D$



### Part 2 proof:
First, we prove that $y_n>1$ for all $n>0$ by mathematical induction.
We know that $y_0>1$.
Then, we have to prove that when $y_n>1$, $y_{n+1}>1$.
If $y_{k-1} > 1$, then $0 < \frac{1}{y_{k-1}} < 1$.
Therefore,
$$y_k = 2 - \frac{1}{y_{k-1}} > 2 - 1 = 1$$
So we have proven that $y_n>1$ for all $n>0$.
Then, we prove the monotonicity.
For any $n \ge 1$, consider the difference $y_n - y_{n-1}$:
$$y_n - y_{n-1} = 2 - \frac{1}{y_{n-1}} - y_{n-1} = -\frac{y_{n-1}^2 - 2y_{n-1} + 1}{y_{n-1}} = -\frac{(y_{n-1} - 1)^2}{y_{n-1}}$$
Since $y_{n-1} > 1$, we have $(y_{n-1} - 1)^2 > 0$ and $y_{n-1} > 0$, so:
$$y_n - y_{n-1} < 0 \implies y_n < y_{n-1}$$
Hence, $\{y_n\}$ is strictly decreasing.
Since $\{y_n\}$ is decreasing and bounded below by $1$, so we know that the limit exists, and $L = \lim_{n \to \infty} y_n$ exists and $L \ge 1$.

Taking the limit on both sides of the recurrence:
$$L = 2 - \frac{1}{L} \implies L^2 - 2L + 1 = 0 \implies (L - 1)^2 = 0 \implies L = 1$$

Therefore,
$$\lim_{n \to \infty} y_n = 1.$$
$Q.E.D$