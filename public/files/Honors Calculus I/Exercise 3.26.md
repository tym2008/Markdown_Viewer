# Exercise 3.26
---

First, convert polar coordinates to cartesian coordinates:
$$x = r\cos\theta = a(1 + \cos\theta)\cos\theta$$
$$y = r\sin\theta = a(1 + \cos\theta)\sin\theta$$
Calculate the derrivative:
$$\frac{dx}{d\theta} = a\left[-\sin\theta\cos\theta + (1 + \cos\theta)(-\sin\theta)\right] = -a\sin\theta(1 + 2\cos\theta)$$
$$\frac{dy}{d\theta} = a\left[-\sin^2\theta + (1 + \cos\theta)\cos\theta\right] = a(\cos^2\theta - \sin^2\theta + \cos\theta) = a(2\cos^2\theta + \cos\theta - 1) = a(2\cos\theta - 1)(\cos\theta + 1)$$

So the slope of the tangent line:
$$m = \frac{dy}{dx} = \frac{dy/d\theta}{dx/d\theta} = -\frac{(2\cos\theta - 1)(\cos\theta + 1)}{\sin\theta(1 + 2\cos\theta)}$$

Then, calculate one by one:

## 1.$\theta = \frac{1}{3} \pi$
we have $\cos\frac{\pi}{3} = \frac{1}{2}$，$\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}$，$r = a\left(1 + \frac{1}{2}\right) = \frac{3}{2}a$
$$x_1 = \frac{3}{2}a \cdot \frac{1}{2} = \frac{3}{4}a$$
$$y_1 = \frac{3}{2}a \cdot \frac{\sqrt{3}}{2} = \frac{3\sqrt{3}}{4}a$$
Since $2\cos\frac{\pi}{3} - 1 = 0$, the numerator is zero:
$$m_1 = 0$$
Tangent Line Equals:
$$y = \frac{3\sqrt{3}}{4}a$$
## 2.$\theta = \frac{1}{4} \pi$
we have $\cos\frac{\pi}{4} = \frac{\sqrt{2}}{2}$，$\sin\frac{\pi}{4} = \frac{\sqrt{2}}{2}$，$r = a\left(1 + \frac{\sqrt{2}}{2}\right) = \frac{2 + \sqrt{2}}{2}a$
$$x_2 = \frac{2 + \sqrt{2}}{2}a \cdot \frac{\sqrt{2}}{2} = \frac{\sqrt{2} + 1}{2}a$$
$$y_2 = \frac{2 + \sqrt{2}}{2}a \cdot \frac{\sqrt{2}}{2} = \frac{\sqrt{2} + 1}{2}a$$
Substituting $\theta = \frac{\pi}{4}$ into the slope formula:
$$m_2 = -\frac{(\sqrt{2} - 1)\left(\frac{\sqrt{2}}{2} + 1\right)}{\frac{\sqrt{2}}{2}(1 + \sqrt{2})} = \sqrt{2} - 2$$
Tangent Line Equals:
$$y = (\sqrt{2} - 2)x + \frac{2\sqrt{2} + 1}{2}a$$
## 3.$\theta = \frac{1}{6} \pi$
we have $\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}$，$\sin\frac{\pi}{6} = \frac{1}{2}$，$r = a\left(1 + \frac{\sqrt{3}}{2}\right) = \frac{2 + \sqrt{3}}{2}a$
$$x_3 = \frac{2 + \sqrt{3}}{2}a \cdot \frac{\sqrt{3}}{2} = \frac{2\sqrt{3} + 3}{4}a$$
$$y_3 = \frac{2 + \sqrt{3}}{2}a \cdot \frac{1}{2} = \frac{2 + \sqrt{3}}{4}a$$
Substituting $\theta = \frac{\pi}{6}$ into the slope formula:
$$m_3 = -\frac{(\sqrt{3} - 1)\left(\frac{\sqrt{3}}{2} + 1\right)}{\frac{1}{2}(1 + \sqrt{3})} = 1 - \sqrt{3}$$
Tangent Line Equals:
$$y = (1 - \sqrt{3})x + \frac{5 + 2\sqrt{3}}{4}a$$
## 4.$\theta = 0$
we have $\cos 0 = 1$，$\sin 0 = 0$，$r = a(1 + 1) = 2a$
$$x_4 = 2a \cdot 1 = 2a$$
$$y_4 = 2a \cdot 0 = 0$$
Since $\frac{dx}{d\theta} = 0$ and $\frac{dy}{d\theta} = 2a \neq 0$, the tangent line is vertical:
$$m_4 \text{ is undefined}$$
Tangent Line Equals:
$$x = 2a$$