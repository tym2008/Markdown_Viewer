First, we prove a lemma:Triangle Inequality, which is:
For all $u,v∈C,∣u+v∣≤∣u∣+∣v∣ $
Prove：
First,calculate:
$$|z+w|^2 = (z+w)\overline{(z+w)} = (z+w)(\overline{z}+\overline{w})$$
And we get:
$$|z+w|^2 = z\overline{z} + z\overline{w} + w\overline{z} + w\overline{w}$$
That is:
$$|z+w|^2 = |z|^2 + |w|^2 + z\overline{w} + \overline{z\overline{w}}$$
We can notice that $z\overline{w} + \overline{z\overline{w}} = 2\operatorname{Re}(z\overline{w})$, so:
$$|z+w|^2 = |z|^2 + |w|^2 + 2\operatorname{Re}(z\overline{w})$$
For any complex numbers $u$, we have $\operatorname{Re}(u) \le |u|$, so:
$$\operatorname{Re}(z\overline{w}) \le |z\overline{w}| = |z||w|\|z+w|^2 \le |z|^2 + |w|^2 + 2|z||w| = (|z|+|w|)^2$$

Do some calculate, we get:
$$|z+w| \le |z|+|w|$$
$Q.E.D$

Also, we know that for any complex number z, we'll have $|z|=|-z|$。

---
Then we start to prove the original proposition.

First we need to prove the right side:$ ∣x−y∣\leq∣x∣+∣y∣$.
We can know that $x-y = x+(-y)$
So we can apply the Triangle Inequality with $u=x$ and $v=-y$
Since $|-y|=|y|$, so we can directly get:
$$ ∣x−y∣\leq∣x∣+∣y∣ $$

Then we can prove $∣x∣−∣y∣\leq∣x−y∣$
Write $x$ as the sum of $ (x−y)+y$,and apply the triangle inequality with $u=x−y$ and $v=y$:
$$∣x∣=∣(x−y)+y∣\leq∣x−y∣+∣y∣$$
Remove a $|y|$ from both sides, and we'll finally get:
$$∣x∣−∣y∣\leq∣x−y∣$$

Combine the two parts together, and we'll get:
$$∣x∣−∣y∣\leq∣x−y∣\leq∣x∣+∣y∣ $$
$Q.E.D$