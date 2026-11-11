# Exercise 3.24
---


## 1. Find the tangent line at $(1,1)$
Write the function using $x^y = e^{y \ln x}$ and  $y^x = e^{x \ln y}$：
$$e^{y \ln x} + e^{x \ln y} = 2$$
Differentiate both sides to $x$:
$$\frac{d}{dx}(e^{y \ln x}) + \frac{d}{dx}(e^{x \ln y}) = \frac{d}{dx}(2)$$
$$e^{y \ln x} ( y' \ln x + \frac{y}{x} ) + e^{x \ln y} ( \ln y + \frac{x}{y} y' ) = 0$$
$$x^y ( y' \ln x + \frac{y}{x} ) + y^x ( \ln y + \frac{x}{y} y' ) = 0$$
Take (x,y)=(1,1):
$$1^1 ( y' \ln 1 + \frac{1}{1} ) + 1^1 ( \ln 1 + \frac{1}{1} y' ) = 0$$
Since $ln1=0$, we'll have:
$$1(0 + 1) + 1(0 + y') = 0$$
$$1 + y' = 0 \implies y' = -1$$
So we'll have the tangent line:
$$y - 1 = -1(x - 1)$$
$$y = -x + 2$$
$Q.E.D.$

---
## 2. Show that the normal line at $(1, 1)$ passes through the origin

We know that the tangent line is $y = -x + 2$, its slope is $-1$.
So the slope of the normal line is $\frac{-1}{-1}=1$.
So we can write the normal function at $(1,1)$:
$$y - 1 = 1(x - 1)$$
$$y=x$$
So we know that it goes through the origin.
$Q.E.D.$