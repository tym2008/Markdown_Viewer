# Exercise 3.42
---
First, we calculate the derivative of $y = a\cos(\ln x) + b\sin(\ln x)$:
$$y' = -\frac{a}{x}\sin(\ln x) + \frac{b}{x}\cos(\ln x)$$
And we may also have:
$$x y' = -a\sin(\ln x) + b\cos(\ln x)$$
Then, differentiate with respect to x:
$$y' + x y'' = -\frac{a}{x}\cos(\ln x) - \frac{b}{x}\sin(\ln x) = -\frac{y}{x}$$
Then, multiply $x$ on both sides, and we can find:
$$x^2 y'' + x y' + y = 0$$
So we know that when $n=0$, the original equation holds.
Then, we prove it using mathmetical induction:
Simply assume $k=n$, and we'll have:
$$x^2 y^{(k+2)} + (2k + 1)x y^{(k+1)} + (k^2 + 1) y^{(k)} = 0$$
Differentiate with respact to x on both sides:
$$\frac{d}{dx}\Big[ x^2 y^{(k+2)} + (2k + 1)x y^{(k+1)} + (k^2 + 1) y^{(k)} \Big] = 0$$
And we'll have:
$$\big(x^2 y^{(k+2)}\big)' = 2x y^{(k+2)} + x^2 y^{(k+3)}$$
$$\big((2k + 1)x y^{(k+1)}\big)' = (2k + 1) y^{(k+1)} + (2k + 1)x y^{(k+2)}$$
$$\big((k^2 + 1) y^{(k)}\big)' = (k^2 + 1) y^{(k+1)}$$
Then:
$$ x^2 y^{(k+3)} + \big[2 + (2k + 1)\big] x y^{(k+2)} + \big[(2k + 1) + (k^2 + 1)\big] y^{(k+1)} = 0 $$
$$ x^2 y^{(k+3)} + (2k + 3) x y^{(k+2)} + (k^2 + 2k + 2) y^{(k+1)} = 0 $$
We also know that:
$$k + 3 = (k + 1) + 2$$
$$2k + 3 = 2(k + 1) + 1$$
$$k^2 + 2k + 2 = (k^2 + 2k + 1) + 1 = (k + 1)^2 + 1$$
So:
$$x^2 y^{((k+1)+2)} + \big[2(k + 1) + 1\big] x y^{((k+1)+1)} + \big[(k + 1)^2 + 1\big] y^{(k+1)} = 0$$
That's exactly what we want to prove when $n = k + 1$.
By mathmetical induction, we know that the original equation holds.

$Q.E.D$