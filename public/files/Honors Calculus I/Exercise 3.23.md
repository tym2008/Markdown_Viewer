# Exercise 3.23
---



Let the point of tangency be $P(x_0, y_0)$.
Since $P$ lies on the parabola, its coordinates are:
And we know that the slope of the tangent line to the parabola at $P$ is:
$$y' = 2x \implies k_{\text{tan}} = 2x_0$$
The center of the circle is $C(a, \sqrt{5})$. The normal line passing through $C$ and $P$ must be perpendicular to the tangent line at $P$:

$$k_{CP} = -\frac{1}{k_{\text{tan}}} = -\frac{1}{2x_0} \quad (x_0 \neq 0)$$
Then compute the slope directly from points $C(a, \sqrt{5})$ and $P(x_0, x_0^2 + \sqrt{5})$:
$$k_{CP} = \frac{(x_0^2 + \sqrt{5}) - \sqrt{5}}{x_0 - a} = \frac{x_0^2}{x_0 - a}$$
So we have:
$$\frac{x_0^2}{x_0 - a} = -\frac{1}{2x_0} \implies a - x_0 = 2x_0^3 \implies x_0 - a = -2x_0^3$$

ALso, we know that the distance from the center $C$ to $P$ equals the radius $\sqrt{5}$:
$$(x_0 - a)^2 + (y_0 - \sqrt{5})^2 = 5$$
$$(-2x_0^3)^2 + (x_0^2)^2 = 5$$
$$4x_0^6 + x_0^4 - 5 = 0$$
Let $t = x_0^2$ ($t \ge 0$):
$$4t^3 + t - 5 = 0$$
We can notice that $t=1$ is a root, so we can have:
$$(t - 1)(4t^2 + 4t + 5) = 0$$


For $4t^2 + 4t + 5$, $\Delta = 4^2 - 4(4)(5) = -64 < 0$, so we can know that there is no real solutions. So:

$$t = 1 \implies x_0^2 = 1 \implies x_0 = \pm 1$$


From $a = x_0 + 2x_0^3$:
If $x_0 = 1$: $a = 1 + 2(1)^3 = 3$
If $x_0 = -1$: $a = -1 + 2(-1)^3 = -3$
Since $a > 0$ is given, so:
$$a = 3$$
$Q.E.D$