# Exercise 2.47
---
First, prove that  $\vert{}f(x)\vert{} > \frac{1}{2}\vert{}L\vert{} > 0$:
From the definition of the limit of functions, $\lim_{x \to a} f(x) = L$ means: For every $\epsilon > 0$, there is $\delta > 0$, such that $0 < \vert{}x - a\vert{} < \delta$ , there is:
$$\vert{}f(x) - L\vert{} < \epsilon$$
Since $L \neq 0$, $\vert{}L\vert{}$ is strictly positive. Choose a $\epsilon$ that:
$$\epsilon = \frac{1}{2}\vert{}L\vert{} > 0$$
By the limit definition, there exists a $\delta > 0$ such that whenever $0 < \vert{}x - a\vert{} < \delta$:
$$\vert{}f(x) - L\vert{} < \frac{1}{2}\vert{}L\vert{}$$
By the triangle inequality:
$$\vert{}L\vert{} - \vert{}f(x)\vert{} \le \vert{}L - f(x)\vert{} = \vert{}f(x) - L\vert{}$$Rearrange them:
$$\vert{}f(x)\vert{} \ge \vert{}L\vert{} - \vert{}f(x) - L\vert{}$$
Apply the bound $\vert{}f(x) - L\vert{} < \frac{1}{2}\vert{}L\vert{}$ gives:
$$\vert{}f(x)\vert{} > \vert{}L\vert{} - \frac{1}{2}\vert{}L\vert{} = \frac{1}{2}\vert{}L\vert{}$$
Because $\vert{}L\vert{} > 0$, it follows that $\frac{1}{2}\vert{}L\vert{} > 0$. Therefore, for all $x$ satisfying $0 < \vert{}x - a\vert{} < \delta$:$$\vert{}f(x)\vert{} > \frac{1}{2}\vert{}L\vert{} > 0$$

Then, prove that  $0 < \frac{1}{\vert{}f(x)\vert{}} < \frac{2}{\vert{}L\vert{}}$

In the deleted neighborhood $0 < \vert{}x - a\vert{} < \delta$, the function satisfies $\vert{}f(x)\vert{} > \frac{1}{2}\vert{}L\vert{} > 0$ because $\vert{}f(x)\vert{} > 0$, $\frac{1}{\vert{}f(x)\vert{}}$ is positive:
$$\frac{1}{\vert{}f(x)\vert{}} > 0$$
Since both $\vert{}f(x)\vert{}$ and $\frac{1}{2}\vert{}L\vert{}$ are positive, taking reciprocals to $\vert{}f(x)\vert{} > \frac{1}{2}\vert{}L\vert{}$ reverses the inequality sign:
$$\frac{1}{\vert{}f(x)\vert{}} < \frac{1}{\frac{1}{2}\vert{}L\vert{}} = \frac{2}{\vert{}L\vert{}}$$
Combining these two relations and we finally proved that for all $0 < \vert{}x - a\vert{} < \delta$:
$$0 < \frac{1}{\vert{}f(x)\vert{}} < \frac{2}{\vert{}L\vert{}}$$

$Q.E.D$