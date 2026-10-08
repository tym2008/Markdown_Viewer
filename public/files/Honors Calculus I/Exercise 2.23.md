# Exercise 2.23

---

### 1.Prove that the sequence ${a_n}$ is decreasing and satifies $a_n \ge \sqrt{\alpha} \quad \text{for all } n \ge 1.$.

First, observe that since $\alpha > 0$ and $a_0 = b > 0$, by a simple induction, all terms $a_n$ are positive:
$$a_{n-1} > 0 \implies a_n = \frac{1}{2}a_{n-1} + \frac{\alpha}{2a_{n-1}} > 0.$$

For any $n \ge 1$, we can know:
$$a_n - \sqrt{\alpha} = \frac{1}{2}a_{n-1} + \frac{\alpha}{2a_{n-1}} - \sqrt{\alpha} = \frac{a_{n-1}^2 - 2a_{n-1}\sqrt{\alpha} + \alpha}{2a_{n-1}} = \frac{(a_{n-1} - \sqrt{\alpha})^2}{2a_{n-1}}$$

Since $(a_{n-1} - \sqrt{\alpha})^2 \ge 0$ and $a_{n-1} > 0$, it follows that:
$$a_n - \sqrt{\alpha} \ge 0 \implies a_n \ge \sqrt{\alpha} \quad \text{for all } n \ge 1.$$

Then, we'll prove that the sequence is decreasing.

Consider the difference between successive terms for $n \ge 2$:
$$a_n - a_{n-1} = \left(\frac{1}{2}a_{n-1} + \frac{\alpha}{2a_{n-1}}\right) - a_{n-1} = \frac{\alpha - a_{n-1}^2}{2a_{n-1}}$$

From what we've done above, for every $n \ge 2$, it satisfies $a_{n-1} \ge \sqrt{\alpha} > 0$, which implies:
$$a_{n-1}^2 \ge \alpha \implies \alpha - a_{n-1}^2 \le 0$$

Therefore,
$$a_n - a_{n-1} \le 0 \implies a_n \le a_{n-1} \quad \text{for all } n \ge 2.$$

Hence, the sequence $\{a_n\}_{n \ge 1}$ is monotonically decreasing.

---
### 2. The sequence convergence to $\sqrt{\alpha}$

Since $\{a_n\}$ is monotonically decreasing and bounded below, so we know that the limit exists:
$$L = \lim_{n \to \infty} a_n, \quad \text{with } L \ge \sqrt{\alpha} > 0.$$

Taking the limit as $n \to \infty$ on both sides of the recurrence relation:
$$L = \frac{1}{2}L + \frac{\alpha}{2L}$$

Multiplying both sides by $2L$ (since $L \neq 0$):
$$2L^2 = L^2 + \alpha \implies L^2 = \alpha \implies L = \pm\sqrt{\alpha}$$

Since $L \ge \sqrt{\alpha} > 0$, we conclude:
$$\lim_{n \to \infty} a_n = \sqrt{\alpha}.$$


---

### 3. Implications when $b < 0$

If the initial value is negative, which is, $b < 0$:

Define a new sequence $c_n = -a_n$ for all $n \ge 0$. Then:
* $c_0 = -a_0 = -b > 0$.
* For $n \ge 1$:
  $$c_n = -a_n = -\left(\frac{1}{2}a_{n-1} + \frac{\alpha}{2a_{n-1}}\right) = \frac{1}{2}(-a_{n-1}) + \frac{\alpha}{2(-a_{n-1})} = \frac{1}{2}c_{n-1} + \frac{\alpha}{2c_{n-1}}.$$

The sequence $\{c_n\}$ has exact the same with $a_0$ when $b>0$ $c_0 > 0$. Therefore, applying the previous results to $\{c_n\}$:
1. $c_n \ge \sqrt{\alpha} \implies a_n = -c_n \le -\sqrt{\alpha}$ for all $n \ge 1$.
2. Since $\{c_n\}_{n \ge 1}$ is decreasing, $\{a_n\}_{n \ge 1}$ is increasing ($a_{n} \ge a_{n-1}$ for $n \ge 2$).
3. Limit:
   $$\lim_{n \to \infty} a_n = -\lim_{n \to \infty} c_n = -\sqrt{\alpha}.$$

Finally, we know the sequence remains entirely negative for all $n \ge 0$, satisfies $a_n \le -\sqrt{\alpha}$ for all $n \ge 1$, is monotonically increasing for $n \ge 1$, and converges to $-\sqrt{\alpha}$.