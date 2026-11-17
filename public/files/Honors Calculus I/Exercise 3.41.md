# Exercise 3.41

---

First, find the first few derivatives at $x = 0$ by differentiating the given equation $y' = x^2 y + x + 1$ with $y(0) = 1$ step by step:


$$y_0 = y(0) = 1$$

$$y_1 = y'(0) = 0^2 * 1 + 0 + 1 = 1$$

Differentiating once more gives $y'' = (x^2 y + x + 1)' = 2xy + x^2 y' + 1$, so:


$$y_2 = y''(0) = 0 + 0 + 1 = 1$$

Differentiating again gives $y''' = (2xy + x^2 y' + 1)' = 2y + 4xy' + x^2 y''$, so:


$$y_3 = y'''(0) = 2y(0) = 2$$

Second, we establish the recurrence relation for $y_n$ ($n \ge 3$). Differentiate both sides of $y' = x^2 y + x + 1$ for $(n - 1)$ times. Since $n \ge 3$, we have $(x + 1)^{(n-1)} = 0$, which gives:


$$y^{(n)} = (x^2 y)^{(n-1)}$$

We know that $(uv)^{(m)} = \sum_{k=0}^{m} \frac{m!}{k!(m-k)!} u^{(k)} v^{(m-k)}$ with $u = x^2$, $v = y$, and $m = n - 1$. Since $(x^2)^{(k)} = 0$ for all $k \ge 3$, we obtain:


$$y^{(n)} = x^2 y^{(n-1)} + (n - 1)(2x) y^{(n-2)} + \frac{(n - 1)(n - 2)}{2} * 2 y^{(n-3)} + 0$$

Setting $x = 0$, the terms containing $x^2$ and $2x$, so:


$$y_n = 2 * \frac{(n - 1)(n - 2)}{2} y_{n-3} = (n - 1)(n - 2) y_{n-3} \quad (n \ge 3)$$

Third, we simplify the finite sum using telescoping. From $y_k = (k - 1)(k - 2) y_{k-3}$ for all $k \ge 3$ (and noting that $y_k > 0$ for all $k \ge 0$), we rewrite the ratio using partial fractions:


$$\frac{y_{k-3}}{y_k} = \frac{1}{(k - 1)(k - 2)} = \frac{1}{k - 2} - \frac{1}{k - 1}$$

Summing the $n - 2$ terms from $k = 3$ to $n$ gives:


$$S_n = \sum_{k=3}^{n} \frac{y_{k-3}}{y_k} = \frac{y_0}{y_3} + \frac{y_1}{y_4} + \cdots + \frac{y_{n-4}}{y_{n-1}} + \frac{y_{n-3}}{y_n}$$

$$S_n = (\frac{1}{1} - \frac{1}{2}) + (\frac{1}{2} - \frac{1}{3}) + \cdots + (\frac{1}{n - 3} - \frac{1}{n - 2}) + (\frac{1}{n - 2} - \frac{1}{n - 1})$$

$$S_n = 1 - \frac{1}{n - 1}$$

$$\lim_{n \to \infty} S_n = \lim_{n \to \infty} (1 - \frac{1}{n - 1}) = 1$$

So we've proved the original equation.
$Q.E.D.$