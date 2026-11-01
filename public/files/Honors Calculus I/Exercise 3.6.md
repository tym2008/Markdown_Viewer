# Exercise 3.6
---

First, we know that:
$$f(a) = |a - a| \cdot g(a) = 0$$
So $f(x)$ is differentiable if and only if the limit exists:
$$\lim_{x \to a} \frac{f(x) - f(a)}{x - a} = \lim_{x \to a} \frac{|x - a| \cdot g(x)}{x - a}$$

Then, calculate  $f'_+(a)$:
We know that when $x \to a^+$, $x > a$,$|x - a| = x - a$
Because $g(x)$ is continuous at a, so  $\lim_{x \to a^+} g(x) = g(a)$.
$$f'_+(a) = \lim_{x \to a^+} \frac{(x - a) \cdot g(x)}{x - a} = \lim_{x \to a^+} g(x) = g(a)$$

Then, canculate $f'_-(a)$:
Same as what's shown above (the steps calculating $f'_+(a)$):
$$f'_-(a) = \lim_{x \to a^-} \frac{-(x - a) \cdot g(x)}{x - a} = \lim_{x \to a^-} (-g(x)) = -g(a)$$

We know that $f(x)$ is differentiable is equivalent to $f'_+(a) = f'_-(a)$, so:
$$g(a) = -g(a) \iff 2g(a) = 0 \iff g(a) = 0$$

Sufficiency:
when $g(a) = 0$,  $f'_+(a) = 0$,$f'_-(a) = -0 = 0$, so $f(x)$ is differentiable at $x=a$ and $f'(a) = 0$.

Necessity:
if $f(x)$ is differentiable at $x=a$, we have $f'_+(a) = f'_-(a)$. which is $g(a) = -g(a)$,also shows $g(a)=0$

So we've proven the original proposition.
$Q.E.D.$