# Exercise 2.80
---
We know that for constant $a<x_1<x_2<\cdots<x_n<b$, there must be:
$$m=min\{f(x_1),f(x_2),\cdots,f(x_n)\}$$
$$M=max\{f(x_1),f(x_2),\cdots,f(x_n)\}$$
And we can note that for some $x_n$:
$$m=f(A) \And M=f(B)$$
By the property of the average, we know that the average of $f(x_n)$ must have:
$$f_{avg}=\frac{f(x_1)+f(x_2)+\cdots+f(x_n)}{n}$$
$$m\leq f_{avg} \leq M$$
Then consider IVT on the interval $[A,B]$, we'll have:
$$f(A)\leq f_{avg} \\ f_{avg}\leq f(B) $$
Due to $f(x)$ is a continuous function in $[A,B]$, so:
There must exists an $\delta \in [A,B]$, such that:
$$f(\delta)=f_{avg}=\frac{f(x_1)+f(x_2)+\cdots+f(x_n)}{n}$$
And we've proven what we need to prove.
$Q.E.D.$