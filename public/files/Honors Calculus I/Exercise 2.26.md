# Exercise 2.26
---

### 1. We can find the connection Between the two sequences

Let:
$$u_n = \left(1 + \frac{1}{n}\right)^{n+1} \quad (n \ge 1), \qquad v_n = \left(1 - \frac{1}{n}\right)^{-n} \quad (n \ge 2).$$

Notice that for any $n \ge 2$:
$$v_n = \left(1 - \frac{1}{n}\right)^{-n} = \left(\frac{n-1}{n}\right)^{-n} = \left(\frac{n}{n-1}\right)^n = \left(1 + \frac{1}{n-1}\right)^n = u_{n-1}.$$

Thus, $\{v_n\} (n \geq 2)$ is simply the sequence $\{u_n\} (n \geq 1)$ with its index 1 less then $v_n$ ($v_n = u_{n-1}$). 
Therefore, once we establish that $\{u_n\}$ is strictly decreasing, bounded, and converges to $e$, the exact same properties follow for $\{v_n\}$.

### 2. Proof that $\{u_n\}$ is strictly decreasing

$$\frac{u_{n-1}}{u_n} = \frac{\left(\frac{n}{n-1}\right)^n}{\left(\frac{n+1}{n}\right)^{n+1}} = \frac{n}{n+1} \left(\frac{n^2}{n^2 - 1}\right)^n = \frac{n}{n+1} \left(1 + \frac{1}{n^2 - 1}\right)^n$$

Expand $\left(1 + \frac{1}{n^2 - 1}\right)^n$ using the Binomial Theorem:
$$\left(1 + \frac{1}{n^2 - 1}\right)^n = 1 + \binom{n}{1}\frac{1}{n^2 - 1} + \underbrace{\binom{n}{2}\left(\frac{1}{n^2 - 1}\right)^2 + \dots}_{\text{all remaining terms are positive}}$$

Since all other terms are positive, we can simply drop them:
$$\left(1 + \frac{1}{n^2 - 1}\right)^n > 1 + \frac{n}{n^2 - 1}$$

Notice that $n^2 - 1 < n^2$, so $\frac{n}{n^2 - 1} > \frac{n}{n^2} = \frac{1}{n}$:
$$\left(1 + \frac{1}{n^2 - 1}\right)^n > 1 + \frac{1}{n} = \frac{n+1}{n}$$

Substitute this back into the ratio:
$$\frac{u_{n-1}}{u_n} = \frac{n}{n+1} \left(1 + \frac{1}{n^2 - 1}\right)^n > \frac{n}{n+1} \cdot \frac{n+1}{n} = 1$$

Therefore:
$$u_{n-1} > u_n$$
which proves that $\{u_n\}$ is **strictly decreasing**.


### 3. Boundedness and Convergence

* **Lower bound:** For all $n \ge 1$, since $1 + \frac{1}{n} > 1$, we clearly have:
  $$u_n = \left(1 + \frac{1}{n}\right)^{n+1} > 1.$$
* **Upper bound:** Since $\{u_n\}$ is decreasing, its first term is its maximum:
  $$u_n \le u_1 = \left(1 + 1\right)^2 = 4.$$

Thus, for all $n \ge 1$:
$$1 < u_n \le 4.$$

By the Monotone Convergence Theorem, every sequence that is monotonically decreasing and bounded below converges. Therefore, $\{u_n\}$ converges.

Since $v_n = u_{n-1}$ for $n \ge 2$, $\{v_n\}$ is also bounded below by $1$, bounded above by $v_2 = u_1 = 4$, and convergent.

---

### 4. Proof that Both Sequences Converge to $e$

By definition, the number $e$ is given by the limit:
$$\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e.$$

We can rewrite $u_n$ as:
$$u_n = \left(1 + \frac{1}{n}\right)^{n+1} = \left(1 + \frac{1}{n}\right)^n \cdot \left(1 + \frac{1}{n}\right).$$

Taking limits on both sides using the product rule for limits:
$$\lim_{n \to \infty} u_n = \left[\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n\right] \cdot \left[\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)\right] = e \cdot 1 = e.$$

Since $v_n = u_{n-1}$, its limit is identical:
$$\lim_{n \to \infty} v_n = \lim_{n \to \infty} u_{n-1} = e.$$

Thus, both sequences converge to $e$.