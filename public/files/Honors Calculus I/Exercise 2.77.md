# Exercise 2.77
---
We know that $f(x)$ satifies:
$$\lim_{x \to -\infty} f(x) = \infty \quad \And \quad \lim_{x \to \infty} f(x) = \infty$$
Then chose a random point. Without the lose of generality, we can choose $x=0$.
Then, from the definition of limit, we'll know there must exists a $R_1>0$ and $R_2>0$ such that:
For any $x>R_1$, we have $f(x)>f(0)$
For any $x<-R_2$, we have $f(x)>f(0)$
Take $R = \max\{R_1, R_2\}$, we have:
When $x \in (-\infty, -R)$ ,$f(x) > f(0)$
When $x \in (R, \infty)$ ,$f(x) > f(0)$
We know $f(x)$ is a continuous function, and it's bounded in $[-R, R]$.
Apply the EVT, we know that there must exists a $p \in [-R, R]$:
$$f(p) \le f(x)$$
So $f(p)$ is the smallest point of $f(x)$ in $[-R, R]$, and we know that $f(p)\leq f(0)$ 
For any point outside $[-R, R]$, every $x$ will have $f(x) > f(0)$.
So we know that for every $x\in R$, $f(p) \le f(x)$
So we know that $f(p) = \min_{x \in R} f(x)$
$Q.E.D.$