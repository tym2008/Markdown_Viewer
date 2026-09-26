# Exercise 2.17

#### Supppose $x_k\geq 0$ for $1\leq k \leq m $. Show that:
#### $$\lim_{n\to\infty}\sqrt[n]{x_1^n+x_2^n+...+x_m^n}=\max_{1 \leq k \leq m}{x_k}$$
---

Let $M = \max_{1 \leq k \leq m} x_k$. 

Since $x_k \ge 0$ for all $k \in \{1, 2, \dots, m\}$, we have $M \ge 0$. We consider two cases:

---

### Case 1: $M = 0$
If $M = 0$, then since $0 \le x_k \le M$ for all $k$, it follows that $x_1 = x_2 = \dots = x_m = 0$. 

Thus:
$$\lim_{n\to\infty} \sqrt[n]{0^n + 0^n + \dots + 0^n} = \lim_{n\to\infty} 0 = 0 = M$$

---

### Case 2: $M > 0$

First,let's find the lower bound
Since $M = \max_{1 \le k \le m} x_k$, there exists at least one index $j \in \{1, 2, \dots, m\}$ such that $x_j = M$. 

Since all $x_k \ge 0$, every term $x_k^n \ge 0$. Therefore:
$$x_1^n + x_2^n + \dots + x_m^n \ge x_j^n = M^n$$

Taking the $n$-th root of both sides gives:
$$\sqrt[n]{x_1^n + x_2^n + \dots + x_m^n} \ge \sqrt[n]{M^n} = M$$

---
Then,let's find the upper bound
Since $x_k \le M$ for every $k \in \{1, 2, \dots, m\}$, we have $x_k^n \le M^n$ for each term:
$$x_1^n + x_2^n + \dots + x_m^n \le \underbrace{M^n + M^n + \dots + M^n}_{m \text{ terms}} = m \cdot M^n$$

Taking the $n$-th root of both sides gives:
$$\sqrt[n]{x_1^n + x_2^n + \dots + x_m^n} \le \sqrt[n]{m \cdot M^n} = \sqrt[n]{m} \cdot M$$

---

Finally, apply the Squeeze Theorem:
Combining the lower and upper bounds, for all $n \ge 1$:
$$M \le \sqrt[n]{x_1^n + x_2^n + \dots + x_m^n} \le \sqrt[n]{m} \cdot M$$

Since $m$ is a fixed positive integer, we have:
$$\lim_{n\to\infty} \sqrt[n]{m} = 1 \implies \lim_{n\to\infty} \left(\sqrt[n]{m} \cdot M\right) = 1 \cdot M = M$$

Since both the lower and upper bounds converge to $M$, by the **Squeeze Theorem**:
$$\lim_{n\to\infty} \sqrt[n]{x_1^n + x_2^n + \dots + x_m^n} = M = \max_{1 \le k \le m} x_k$$