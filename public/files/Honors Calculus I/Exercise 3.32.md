# Exercise 3.32
---

First, from the chain rule, we know that
$$\frac{dy}{dx} = \frac{dy}{dt} * \frac{dt}{dx} = \frac{y'(t)}{x'(t)}$$
Apply the chain rule twice, and we'll get the second order derivative:
$$\frac{d^2 y}{dx^2} = \frac{d}{dx}(\frac{dy}{dx}) = \frac{d}{dt}(\frac{y'(t)}{x'(t)}) * \frac{dt}{dx}$$
Apply the quotinent rule:
$$\begin{aligned} \left.\frac{d^2 y}{dx^2}\right\vert{}_{x=x(t_0)} &= \left.\left[ \frac{y''(t) * x'(t) - y'(t) * x''(t)}{[x'(t)]^2} * \frac{1}{x'(t)} \right]\right\vert{}_{t=t_0} \\ &= \left.\frac{y''(t) * x'(t) - x''(t) * y'(t)}{[x'(t)]^3}\right\vert{}_{t=t_0} \end{aligned}$$
So we've proved the original equation.
$Q.E.D.$