# Exercise 2.37


By repeatedly applying the given inequality $|x_{k+1} - x_k| \le r \cdot |x_k - x_{k-1}|$:
For $k = 2$: 
$$|x_3 - x_2| \le r |x_2 - x_1|$$
For $k = 3$: 
$$|x_4 - x_3| \le r |x_3 - x_2| \le r^2 |x_2 - x_1|$$
In general, by induction, for any $k \ge 1$:
$$|x_{k+1} - x_k| \le r^{k-1} |x_2 - x_1|$$


Express $x_m - x_n$ as a this:
$$x_m - x_n = (x_m - x_{m-1}) + (x_{m-1} - x_{m-2}) + \dots + (x_{n+1} - x_n) = \sum_{k=n}^{m-1} (x_{k+1} - x_k)$$

$$|x_m - x_n| \le \sum_{k=n}^{m-1} |x_{k+1} - x_k|$$

Substitute the bound from Step 1:
$$|x_m - x_n| \le \sum_{k=n}^{m-1} r^{k-1} |x_2 - x_1| = |x_2 - x_1| \sum_{k=n}^{m-1} r^{k-1}$$

Notice that the sum is a finite geometric progression:
$$\sum_{k=n}^{m-1} r^{k-1} = r^{n-1} + r^n + \dots + r^{m-2} = r^{n-1} (1 + r + r^2 + \dots + r^{m-n-1})$$

$$r^{n-1} \left(\frac{1 - r^{m-n}}{1 - r}\right) < \frac{r^{n-1}}{1 - r} \quad (\text{since } 0 < r < 1 \text{ and } 1 - r^{m-n} < 1)$$

Therefore:
$$|x_m - x_n| \le \frac{r^{n-1}}{1 - r} |x_2 - x_1|$$

---

If $|x_2 - x_1| = 0$, then all terms are equal from $n=1$, so the sequence is trivially constant and therefore Cauchy.
If $|x_2 - x_1| > 0$, since $0 < r < 1$, we know that:
  $$\lim_{n \to \infty} r^{n-1} = 0 \implies \lim_{n \to \infty} \left(\frac{r^{n-1}}{1 - r} |x_2 - x_1|\right) = 0$$

Thus, for any given $\varepsilon > 0$, we can choose $N$ large enough such that:
$$\frac{r^{N-1}}{1 - r} |x_2 - x_1| < \varepsilon$$

Then, for all $m > n \ge N$:
$$|x_m - x_n| \le \frac{r^{n-1}}{1 - r} |x_2 - x_1| \le \frac{r^{N-1}}{1 - r} |x_2 - x_1| < \varepsilon.$$

This confirms that $\{x_n\}$ is a Cauchy sequence. 
$Q.E.D$