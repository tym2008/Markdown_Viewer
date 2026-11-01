# Exercise 3.3
---
## 1.$f(x) = \begin{cases} x^3, & \text{if } x > 1 \\ ax + b, & \text{if } x \le 1 \end{cases}$
We know that:
$$\lim_{x \to 1^+} f(x) = 1^3 = 1$$
$$\lim_{x \to 1^-} f(x) = f(1) = a(1) + b = a + b$$
To make $f(x)$ continuous at $x=1$:
$$a + b = 1 $$
Then, consider about the differentiability:
$$f'_+(1) = \left. \frac{d}{dx}(x^3) \right\vert{}_{x=1} = \left. 3x^2 \right\vert{}_{x=1} = 3$$
$$f'_-(1) = \left. \frac{d}{dx}(ax + b) \right\vert{}_{x=1} = a$$
To make it differentiable, we must have:
$$a = 3$$
Then we know that:
$$3 + b = 1 \implies b = -2$$
So:
$a = 3,\quad b = -2$
$Q.E.D.$

---
## 2.$f(x) = \begin{cases} x^3, & \text{if } x > 1 \\ ax^2 + b, & \text{if } x \le 1 \end{cases}$
Continuity:
$$\lim_{x \to 1^+} f(x) = 1^3 = 1$$
$$\lim_{x \to 1^-} f(x) = f(1) = a(1)^2 + b = a + b$$
So:
$$a + b = 1 \quad \text{--- (1)}$$

Differentiability:
$$f'_+(1) = \left. \frac{d}{dx}(x^3) \right\vert{}_{x=1} = \left. 3x^2 \right\vert{}_{x=1} = 3$$
$$f'_-(1) = \left. \frac{d}{dx}(ax^2 + b) \right\vert{}_{x=1} = \left. 2ax \right\vert{}_{x=1} = 2a$$
So:
$$2a = 3 \implies a = \frac{3}{2}$$
$$\frac{3}{2} + b = 1 \implies b = -\frac{1}{2}$$
And we can finally get:
$a = \frac{3}{2},\quad b = -\frac{1}{2}$
$Q.E.D.$