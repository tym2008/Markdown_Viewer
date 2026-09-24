# Exercise 2.15

Suppose $\{a_n\}$ is a positive sequence. If $\lim_{n\to\infty}\frac{a_{n+1}}{a_n}$ exists, prove that: $\lim \sqrt[n]{a_n}=\lim_{n\to\infty}\frac{a_{n+1}}{a_n}$.


Let $\lim_{n\to\infty} \frac{a_{n+1}}{a_n} = L$. Since $a_n > 0$ for all $n$, we have $L \ge 0$.
### Case 1: $L > 0$

Let $\epsilon > 0$ be given (with $\epsilon < L$). 

Set $\epsilon_0 = \frac{\epsilon}{2}$. By the definition of a limit, there exists an integer $N_1$ such that for all $k \ge N_1$:
$$L - \epsilon_0 < \frac{a_{k+1}}{a_k} < L + \epsilon_0$$

For any $n > N_1$, multiply these inequalities from $k = N_1$ to $k = n-1$:
$$\prod_{k=N_1}^{n-1} (L - \epsilon_0) < \prod_{k=N_1}^{n-1} \frac{a_{k+1}}{a_k} < \prod_{k=N_1}^{n-1} (L + \epsilon_0)$$

The middle term is a telescoping product:
$$\prod_{k=N_1}^{n-1} \frac{a_{k+1}}{a_k} = \frac{a_{N_1+1}}{a_{N_1}} \cdot \frac{a_{N_1+2}}{a_{N_1+1}} \cdots \frac{a_n}{a_{n-1}} = \frac{a_n}{a_{N_1}}$$

So:
$$(L - \epsilon_0)^{n - N_1} < \frac{a_n}{a_{N_1}} < (L + \epsilon_0)^{n - N_1}$$

Multiply through by $a_{N_1} > 0$ and take the $n$-th root:
$$a_{N_1}^{\frac{1}{n}} (L - \epsilon_0)^{1 - \frac{N_1}{n}} < \sqrt[n]{a_n} < a_{N_1}^{\frac{1}{n}} (L + \epsilon_0)^{1 - \frac{N_1}{n}}$$

Let's define the lower and upper bounding sequences:
$$u_n = a_{N_1}^{\frac{1}{n}} (L - \epsilon_0)^{1 - \frac{N_1}{n}} \quad \text{and} \quad v_n = a_{N_1}^{\frac{1}{n}} (L + \epsilon_0)^{1 - \frac{N_1}{n}}$$

Since $N_1$ and $a_{N_1}$ are fixed constants, taking standard limits gives:
$$\lim_{n\to\infty} a_{N_1}^{\frac{1}{n}} = 1 \quad \text{and} \quad \lim_{n\to\infty} \left(1 - \frac{N_1}{n}\right) = 1$$

Therefore:
$$\lim_{n\to\infty} u_n = L - \epsilon_0 \quad \text{and} \quad \lim_{n\to\infty} v_n = L + \epsilon_0$$

By the definition of a limit:
- There exists $N_2$ such that for all $n > N_2$: 
  $$u_n > (L - \epsilon_0) - \epsilon_0 = L - 2\epsilon_0 = L - \epsilon$$
- There exists $N_3$ such that for all $n > N_3$: 
  $$v_n < (L + \epsilon_0) + \epsilon_0 = L + 2\epsilon_0 = L + \epsilon$$

Now, choose $N = \max\{N_1, N_2, N_3\}$. For all $n > N$, we have:
$$L - \epsilon < u_n < \sqrt[n]{a_n} < v_n < L + \epsilon$$

This means:
$$|\sqrt[n]{a_n} - L| < \epsilon \quad \text{for all } n > N$$

By the definition of a limit, $\lim_{n\to\infty} \sqrt[n]{a_n} = L$.

---

### Case 2: $L = 0$

Let $\epsilon > 0$ be given, and set $\epsilon_0 = \frac{\epsilon}{2}$.

There exists an integer $N_1$ such that for all $k \ge N_1$:
$$0 < \frac{a_{k+1}}{a_k} < \epsilon_0$$

Multiplying from $k = N_1$ to $n-1$:
$$0 < \frac{a_n}{a_{N_1}} < \epsilon_0^{n - N_1}$$

$$0 < \sqrt[n]{a_n} < a_{N_1}^{1/n} \epsilon_0^{1 - \frac{N_1}{n}}$$

Let $v_n = a_{N_1}^{\frac{1}{n}} \epsilon_0^{1 - \frac{N_1}{n}}$. Since $\lim_{n\to\infty} v_n = \epsilon_0$, there exists $N_2$ such that for all $n > N_2$:
$$v_n < \epsilon_0 + \epsilon_0 = \epsilon$$

Choosing $N = \max\{N_1, N_2\}$, for all $n > N$:
$$0 < \sqrt[n]{a_n} < \epsilon$$

Hence, $\lim_{n\to\infty} \sqrt[n]{a_n} = 0$.

---

Finally, we knoe in both cases:
$$\lim_{n\to\infty} \sqrt[n]{a_n} = \lim_{n\to\infty}\frac{a_{n+1}}{a_n}$$
$Q.E.D.$