# Exercise 2.39
---

### First, Recall the Definition of limit
* Limit equals $0$: A sequence $\{a_n\}$ satisfies $\lim\limits_{n \to \infty} a_n = 0$ if for every $\varepsilon > 0$, there exists an integer $N$ such that:
  $$|a_n| < \varepsilon \quad \text{for all } n \ge N.$$
* Limit equals $\infty$: A sequence $\{a_n\}$ satisfies $\lim\limits_{n \to \infty} a_n = \infty$ if for every $M > 0$, there exists an integer $N$ such that:
  $$a_n > M \quad \text{for all } n \ge N.$$

---

### **Proof of 1:** $\lim\limits_{n \to \infty} |x_n| = \infty \iff \lim\limits_{n \to \infty} \frac{1}{x_n} = 0$

#### Forward direction:
Assume $\lim\limits_{n \to \infty} |x_n| = \infty$.  
Let $\varepsilon > 0$ be given. Choose $M = \frac{1}{\varepsilon} > 0$.

By the definition of the limit tending to $\infty$, there exists an integer $N$ such that for all $n \ge N$:
$$|x_n| > M = \frac{1}{\varepsilon}.$$

since $|x_n| > 0$:
$$\left|\frac{1}{x_n} - 0\right| = \left|\frac{1}{x_n}\right| = \frac{1}{|x_n|} < \varepsilon \quad \text{for all } n \ge N.$$

Therefore, by definition, $\lim\limits_{n \to \infty} \frac{1}{x_n} = 0$.

---

#### Reverse direction:
Assume $\lim\limits_{n \to \infty} \frac{1}{x_n} = 0$.  
Let $M > 0$ be given. Choose $\varepsilon = \frac{1}{M} > 0$.

By the definition of the limit, there exists an integer $N$ such that for all $n \ge N$:
$$\left|\frac{1}{x_n}\right| = \frac{1}{|x_n|} < \varepsilon = \frac{1}{M}.$$

Taking reciprocals:
$$|x_n| > M \quad \text{for all } n \ge N.$$

Therefore, by definition, $\lim\limits_{n \to \infty} |x_n| = \infty$. 
$Q.E.D$

---

### **Proof of 2:** $\lim\limits_{n \to \infty} x_n = 0 \iff \lim\limits_{n \to \infty} \frac{1}{|x_n|} = \infty$

#### Forward direction:
Assume $\lim\limits_{n \to \infty} x_n = 0$.  
Let $M > 0$ be given. Choose $\varepsilon = \frac{1}{M} > 0$.

By the definition of the limit, there exists an integer $N$ such that for all $n \ge N$:
$$|x_n - 0| = |x_n| < \varepsilon = \frac{1}{M}.$$

Since $x_n \ne 0$, taking reciprocals gives:
$$\frac{1}{|x_n|} > M \quad \text{for all } n \ge N.$$

Therefore, by definition, $\lim\limits_{n \to \infty} \frac{1}{|x_n|} = \infty$.

---

#### Reverse direction:
Assume $\lim\limits_{n \to \infty} \frac{1}{|x_n|} = \infty$.  
Let $\varepsilon > 0$ be given. Choose $M = \frac{1}{\varepsilon} > 0$.

By the definition of the limit tending to $\infty$, there exists an integer $N$ such that for all $n \ge N$:
$$\frac{1}{|x_n|} > M = \frac{1}{\varepsilon}.$$

Taking reciprocals:
$$|x_n| < \varepsilon \implies |x_n - 0| < \varepsilon \quad \text{for all } n \ge N.$$

Therefore, by definition, $\lim\limits_{n \to \infty} x_n = 0$.
$Q.E.D$