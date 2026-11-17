# Exercise 3.33

---

First, since $f$ is twice differentiable, $f'$ is differentiable and therefore continuous. Because $f'(x_0) \neq 0$, there is an open interval around $x_0$ on which $f'(x) \neq 0$. From Proposition 3.5, for $y$ in the corresponding interval around $y_0 = f(x_0)$, we know that

$$(f^{-1})'(y) = \frac{1}{f'(f^{-1}(y))}$$

Since $f^{-1}$ is differentiable at $y_0 = f(x_0)$, $f'$ is differentiable at $x_0 = f^{-1}(y_0)$ with $f'(x_0) \neq 0$, and $g(u) = \frac{1}{u}$ is differentiable at $u = f'(x_0) \neq 0$, the composite function $(f^{-1})'(y)$ is differentiable at $y = f(x_0)$ by the chain rule. Thus, $f^{-1}$ is twice differentiable at $y = f(x_0)$.

Apply the chain rule to get the second-order derivative:


$$(f^{-1})''(y) = \frac{d}{dy}(\frac{1}{f'(f^{-1}(y))}) = -\frac{1}{[f'(f^{-1}(y))]^2} * f''(f^{-1}(y)) * (f^{-1})'(y)$$

Evaluate at $y = f(x_0)$ using $f^{-1}(f(x_0)) = x_0$ and $(f^{-1})'(y)\vert{}_{y=f(x_0)} = \frac{1}{f'(x_0)}$:


$$(f^{-1})''(y)\vert{}_{y=f(x_0)} = -\frac{1}{[f'(x_0)]^2} * f''(x_0) * \frac{1}{f'(x_0)} = -\frac{f''(x_0)}{[f'(x_0)]^3}$$

So we've proved that $f^{-1}$ is twice differentiable and satisfies the original equation.
$Q.E.D.$