### 3

We know that $E_3=\{x:\frac{1}{x-1}+\frac{2}{2x+1}>1\}$, that is, $E_3$ is the solution set of the inequation $\frac{1}{x-1}+\frac{2}{2x+1}>1$.

Do some algebra to it, we get $\frac{1}{x-1}+\frac{2}{2x+1}-1=\frac{x(5-2x)}{(x-1)(2x+1)}>0$, that is what we need to solve.

Find the zero points of numerator and denominator, we get these points:$-\frac{1}{2},0，1,\frac{5}{2}$.

Then we get these intervals:$(-\infty,-\frac{1}{2}),(-\frac{1}{2},0),(0,1),(1,\frac{5}{2}),(\frac{5}{2},\infty)$.Test each of them,we found that when $x\in (-\frac{1}{2},0) \cup (1,\frac{5}{2})$.

From the definition of infimum and supremum, we get $\inf E_3 = -\frac{1}{2}$ and $\sup E_3=\frac{5}{2}$.(We could easily prove that the infimum is $-\frac{1}{2}$ by showing every $x \in (-\frac{1}{2},0) \cup (1,\frac{5}{2})$ is larger than $-\frac{1}{2}$, and the same as the supremum.)


### 4

From the problem, we know that $E_4$ is the solution set of $(x-1)(x-2)^2(x-3)^3(x-4)^4\leq 0$.From the properties of polynomials, we know there must be only 1 or 3 term(s) being negative within $(x-1),(x-2)^2,(x-3)^3,(x-4)^4$ or when $x=2$ or $x=4$ which is the polinomials' isolated zero.

But we know $(x-2)^2$ and $(x-4)^4$ must be positive or 0. So we know that $(x-1)$ or $(x-3)^3$ must have at least one negative. When $(x-1)<0$, we know $x<1$. What's more, we know when $(x-3)^3<0$,there must be $(x-3)<0$, that is, $x<3$. But $x<1$ and $x<3$ can't be both true, so we can know x can only take place in $(1,3)$

Therefore, we know $E_4 = (1,3) \cup \{4\}$

Then, from the definition of infimum and supremum,, we know the $\sup E_4 = 4$ and the $\inf E_4 = 1$(Proof is the same as Ex.1.11.3)

### 5

$E_5=\{|x+2|-|x|>1\}$
Then we can easily know that $E_5$ is the solution set of $|x+2|-|x|>1$. We can seperate x into 3 parts:$(-\infty,-2),\{-2\},(-2,0),\{0\},(0,\infty)$

When $x=-2$ or $x=0$, we can know that $|x+2|-|x|$ equals -2 when $x=-2$ or 2 when $x=0$.

When $x\in (-\infty,-2)$, both $x+2$ and $x$ are negative, so $|x+2|-|x|$ equals to -2.

When $x\in (-2,0)$, we know that $x+2>0$ and $x<0$. Then we know $|x+2|-|x|=x+2-(-x)=2x+2$, and we can figure out that when $x\in(-\frac{1}{2},0)$, $|x+2|-|x|>1$ is true.

When $x\in (0,\infty)$, both $x+2$ and $x$ are positive, then we can easily figure out that $|x+2|-|x|=x+2-x=2>1$.

Therefore, We know that $E_5=(-\frac{1}{2},\infty)$, that is, $\inf E_5=-\frac{1}{2}$, and $E_5$ has no suprmum (Unbounded Above).
