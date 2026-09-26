# Exercise 2.18
---

## 1.
$$\lim_{n\to\infty}\frac{1}{\sqrt[n]{n!}}$$

For any integer $n \ge 2$, we may find: 
$$n!=1\times2\times\cdots\times(n-1)\times n$$
When n is even, we can divide the factors into two parts:
$$1\times2\times\cdots\times\frac{n}{2}$$
$$n\times(n-1)\times\cdots\times(\frac{n}{2}+1)$$
Pair them one-by-one,and we'll get another sequence:
$$1 \times n, 2\times(n-1),\cdots,\frac{n}{2}(\frac{n}{2}+1)$$
and every item in it are greater or equal than $\frac{n}{2}$.
Same when n is odd(take out the item in the middle and pair them up like what we've done when n is even,and we'll get the same result:every item in the new sequence are greater or equal than $\frac{n}{2}$).
So we'll find:
$$n! \ge \left(\frac{n}{2}\right)^{\frac{n}{2}}$$

Taking the $n$-th root on both sides:
$$\sqrt[n]{n!} \ge \sqrt{\frac{n}{2}}$$

Inverting the inequality gives:
$$0 < \frac{1}{\sqrt[n]{n!}} \le \sqrt{\frac{2}{n}}$$

Taking the limit as $n \to \infty$:
$$\lim_{n\to\infty} 0 = 0 \quad \text{and} \quad \lim_{n\to\infty} \sqrt{\frac{2}{n}} = 0$$

By the Squeeze Theorem:
$$\lim_{n\to\infty}\frac{1}{\sqrt[n]{n!}} = 0$$
$Q.E.D$
---
## 4.
$$\lim_{n\to\infty}\sqrt[n]{1+2+2^2+\cdots+2^n}$$

The expression inside the $n$-th root is a geometric series with first term $a = 1$, common ratio $r = 2$, and $(n+1)$ terms:

$$1 + 2 + 2^2 + \dots + 2^n = \frac{1 \cdot (2^{n+1} - 1)}{2 - 1} = 2^{n+1} - 1$$

Thus, the limit becomes:
$$\lim_{n\to\infty} \left(2^{n+1} - 1\right)^{\frac{1}{n}}$$

Factor out the dominant term $2^{n+1}$:

$$\left(2^{n+1} - 1\right)^{1/n} = \left[ 2^{n+1} \left(1 - \frac{1}{2^{n+1}}\right) \right]^{1/n} = 2^{\frac{n+1}{n}} \cdot \left(1 - \frac{1}{2^{n+1}}\right)^{1/n}$$

Now evaluate each part as $n \to \infty$:

$$\lim_{n\to\infty} 2^{\frac{n+1}{n}} = \lim_{n\to\infty} 2^{1 + \frac{1}{n}} = 2^1 = 2$$
$$\lim_{n\to\infty} \left(1 - \frac{1}{2^{n+1}}\right)^{1/n} = 1^0 = 1$$

Therefore:
$$\lim_{n\to\infty}\sqrt[n]{1+2+2^2+\cdots+2^n} = 2 \cdot 1 = 2$$
$Q.E.D$
---
## 6.
$$\lim_{n\to\infty}\frac{1!+2!+3!+\cdots+n!}{n!}$$

First, do some algebra:
$$\frac{1!+2!+3!+\cdots+n!}{n!} = \frac{1!+2!+\cdots+(n-1)!}{n!} + \frac{n!}{n!} = 1 + \frac{\sum_{k=1}^{n-1} k!}{n!}$$


We want to show that $\lim_{n\to\infty} \frac{\sum_{k=1}^{n-1} k!}{n!} = 0$.

Since factorials are positive, clearly:
$$\frac{\sum_{k=1}^{n-1} k!}{n!} > 0$$

Notice that for the terms $1!, 2!, \dots, (n-2)!$, each term is less than or equal to $(n-2)!$. Since there are $(n-2)$ such terms:
$$1! + 2! + \cdots + (n-2)! \le (n-2) \cdot (n-2)! < (n-1) \cdot (n-2)! = (n-1)!$$

Adding the $(n-1)!$ term to both sides:
$$\sum_{k=1}^{n-1} k! = [1! + 2! + \cdots + (n-2)!] + (n-1)! < (n-1)! + (n-1)! = 2(n-1)!$$

Now divide by $n!$:

$$0 < \frac{\sum_{k=1}^{n-1} k!}{n!} < \frac{2(n-1)!}{n!} = \frac{2}{n}$$

Taking the limit as $n \to \infty$:
$$\lim_{n\to\infty} 0 = 0 \quad \text{and} \quad \lim_{n\to\infty} \frac{2}{n} = 0$$

By the Squeeze Theorem:
$$\lim_{n\to\infty} \frac{\sum_{k=1}^{n-1} k!}{n!} = 0$$

And finally:
$$\lim_{n\to\infty}\frac{1!+2!+3!+\cdots+n!}{n!} = 1 + 0 = 1$$
$Q.E.D$