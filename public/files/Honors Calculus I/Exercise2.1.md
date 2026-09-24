# Exercise 2.1

First, let's define the standard definition $D$: A sequence $(x_n)$ converges to a limit $x$ (denoted $\lim_{n \to \infty} x_n = x$) if:
$$\forall \varepsilon > 0, \; \exists N \in N \text{ such that } \forall n > N \implies |x_n - x| < \varepsilon$$


---

# 2.


For this question, we state $D_1$ as:$$\forall \varepsilon > 0, \; \exists N \in N \text{ such that } \forall n > N \implies |x_n - x| \le \varepsilon$$

#### Proof ($D \iff D_1$):

First, we prove the sufficiency:($D \implies D_1$)
  1. Assume the standard definition $D$ holds.
  2. Let $\varepsilon > 0$ be given.
  3. By $D$, there exists an $N \in N$ such that for all $n > N$,
     $$|x_n - x| < \varepsilon$$
  4. Since a strict inequality implies a non-strict inequality (i.e., $|x_n - x| < \varepsilon \implies |x_n - x| \le \varepsilon$), it follows that for all $n > N$,
     $$|x_n - x| \le \varepsilon$$
  5. Thus, $D_1$ holds.

Then, we prove the necessity: ($D_1 \implies D$)
  1. Assume $D_1$ holds.
  2. Let $\varepsilon > 0$ be given.
  3. Define $\varepsilon' = \frac{\varepsilon}{2}$. Since $\varepsilon > 0$, we have $\varepsilon' > 0$.
  4. By applying $D_1$ to $\varepsilon'$, there exists an $N \in N$ such that for all $n > N$,
     $$|x_n - x| \le \varepsilon' = \frac{\varepsilon}{2}$$
  5. Since $\frac{\varepsilon}{2} < \varepsilon$, we have:
     $$|x_n - x| \le \frac{\varepsilon}{2} < \varepsilon \implies |x_n - x| < \varepsilon$$
  6. Thus, for every $\varepsilon > 0$, there exists an $N$ such that $n > N \implies |x_n - x| < \varepsilon$.
  7. Therefore, the standard definition $D$ holds.

$$\therefore D \iff D_1 $$
$Q.E.D$

---

# 4.

For this question, we state $D_2$ as:$\forall k \in N, \; \exists N \in N \text{ such that } \forall n > N \implies |x_n - x| < \frac{1}{k}$

#### Proof ($D \iff D_2$):

First, we prove the sufficiency: ($D \implies D_2$)
  1. Assume the standard definition $D$ holds.
  2. Let $k \in N$ be given.
  3. Since $k \ge 1$, we have $\varepsilon = \frac{1}{k} > 0$.
  4. By $D$, for this $\varepsilon = \frac{1}{k}$, there exists an $N \in N$ such that for all $n > N$,
     $$|x_n - x| < \frac{1}{k}$$
  5. Thus, $D_2$ holds.

Then, we prove the necessity: ($D_2 \implies D$)
  1. Assume $D_2$ holds.
  2. Let $\varepsilon > 0$ be given.
  3. By the property of real numbers, we know there exists a natural number $k \in N$ such that:
     $$k > \frac{1}{\varepsilon} \iff \frac{1}{k} < \varepsilon$$
  4. By $D_2$, for this specific $k$, there exists an $N \in N$ such that for all $n > N$,
     $$|x_n - x| < \frac{1}{k}$$
  5. Combining the inequalities, for all $n > N$:
     $$|x_n - x| < \frac{1}{k} < \varepsilon \implies |x_n - x| < \varepsilon$$
  6. Therefore, the standard definition $D$ holds.

$$\therefore D \iff D_2$$
$Q.E.D$