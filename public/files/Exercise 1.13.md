
First, let's prove that C is bounded above.

Let $a = \sup A$ and $b = \sup B$. So let's define $C = \{x + y : x \in A,\; y \in B\}$.

Since $a = \sup A$, we have $x \leq a$ for all $x \in A$.

Since $b = \sup B$, we have $y \leq b$ for all $y \in B$.

For any $z \in C$, there exist $x \in A$ and $y \in B$ such that $z = x + y$. 

Therefore:

$$z = x + y \leq a + b$$

Thus $a + b$ is an upper bound for $C$, so we can know $C$ is bounded above. 

---

Then we need to prove that $\sup C = a+b$

We already showed $a + b$ is an upper bound for $C$. It remains to show it is the least upper bound. That is, for every $\epsilon > 0$, there exists $z \in C$ with $z > a + b - \epsilon.$

Let $\epsilon > 0$ be given.

- Since $a = \sup A$, the number $a - \frac{\epsilon}{2}$ is not an upper bound for $A$. Hence there exists $x_0 \in A$ such that
$$x_0 > a - \frac{\epsilon}{2}.$$

- Since $b = \sup B$, the number $b - \frac{\epsilon}{2}$ is not an upper bound for $B$. Hence there exists $y_0 \in B$ such that
$$y_0 > b - \frac{\epsilon}{2}.$$

Now consider $z_0 = x_0 + y_0 \in C$. We have:

$$z_0 = x_0 + y_0 > \left(a - \frac{\epsilon}{2}\right) + \left(b - \frac{\epsilon}{2}\right) = a + b - \epsilon.$$

Since $\epsilon > 0$ was arbitrary, no number strictly less than $a + b$ can be an upper bound for $C$.

---


Therefore,

$$\sup C = a + b = \sup A + \sup B.$$