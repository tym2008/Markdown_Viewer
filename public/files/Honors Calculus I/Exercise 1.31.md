
$|sin{\sum_{k=1}^n x_k}| \leq \sum_{k=1}^n |sinx_k|$

We Prove this using Induction.

First, we'll prove the base case.
When n-1, the inequality equals to $ |sinx_1|\leq |sinx_1| $ which is always correct.

Then, we prove the inductive step:
Assume the inequality holds for some $n \geq 1$, when it has $|sin{\sum_{k=1}^n x_k}| \leq \sum_{k=1}^n |sinx_k|$
Then let $S_n=\sum_{k=1}^nx_k$, 
we'll have $|sinS_n| \leq \sum_{k=1}^n|sinx_k|$.
And we must prove that for n+1, it must also be true, which is:
$|sin(S_n+x_{n+1})|\leq \sum_{k=1}^{n+1}|sinx_k|$.
Then apply the sin addition formula($sin(x+y)=sinxcosy+cosxsiny$):
$∣sin(S_n+x_{n+1})∣=∣sinS_ncosx_{n+1}+cosS_n​sinx_{n+1}|$
Then, apply the triangle inequality ($|a+b|\leq |a|+|b|$):
$∣sin(S_n+x_{n+1})∣\leq ∣sinS_n||cosx_{n+1}|+|cosS_n||​sinx_{n+1}|$
Then, apply the bound $|cosx|\leq 1$:
$∣sin(S_n+x_{n+1})∣\leq ∣sinS_n|+|​sinx_{n+1}|$
Finally, apply it to $|sin{S_n}|$:
$∣sinS_n|+|​sinx_{n+1}|\leq \sum_{x=1}^{n} |sinx_n|+|​sinx_{n+1}|$
That shows for any $x\geq 1$, when the source inequality exists, $|sin{\sum_{k=1}^{n+1} x_k}| \leq \sum_{k=1}^{n+1} |sinx_k|$ is true.
So we prove the inductive step.

---

Therefore, we prove the original inequality is true.

$Q.E.D$

