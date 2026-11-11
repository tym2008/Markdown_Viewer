# Exercise 3.14
---
## 2. $(\sec x)'= \sec x \tan x$
 We know that $\sec x = \frac{1}{\cos x}$, so we can easily know that:
 $$(\sec x)' = (\frac{1}{\cos x})'$$
 By the chain rule, we can have:
$$ (\frac{1}{\cos x})'=-\frac{1}{\cos^2 x}*(-\sin x)=\frac{\sin x}{\cos^2 x}$$
What's more, $\tan x=\frac{sinx}{cosx}$, so:
$$\frac{\sin x}{\cos^2 x}=\tan x * \frac{1}{cosx}=\tan x \sec x$$
So:
$$(\sec x)'= \sec x \tan x$$
$Q.E.D.$

---
## 5. $(arcsec x)=\frac{1}{|x|\sqrt{x^2-1}}$
Assume $y = \operatorname{arcsec} x$, $|x|>1$.
So:
$$y \in \left[0, \frac{\pi}{2}\right) \cup \left(\frac{\pi}{2}, \pi\right]$$
And we have:
$$\sec y = x$$
So:
$$(\sec y)'=x'$$
$$\sec y \tan y (y)'=1$$
$$y'=\frac{1}{\sec y \tan y}$$

* When $x>0$,$y \in (\frac{\pi}{2}, \pi)$,$\tan y < 0$
 $$\tan y = \sqrt{\sec^2 y - 1} = \sqrt{x^2 - 1}$$
 $\sec y = x > 0$, so  $\sec y \tan y = x\sqrt{x^2 - 1} = \vert{}x\vert{}\sqrt{x^2 - 1}$
* $x < -1$ ,$y \in (\frac{\pi}{2}, \pi)$,$\tan y < 0$, so:
  $$\tan y = -\sqrt{\sec^2 y - 1} = -\sqrt{x^2 - 1}$$
  $$\sec y = x = -\vert{}x\vert{} < 0$$
  so: 
  $$\sec y \tan y = (-\vert{}x\vert{})\left(-\sqrt{x^2 - 1}\right) = \vert{}x\vert{}\sqrt{x^2 - 1}$$

So we know that for any  $\vert{}x\vert{} > 1$, we have:
$$\sec y \tan y = \vert{}x\vert{}\sqrt{x^2 - 1}$$
Put it back, and we'kk have:
$$(arcsec x)=\frac{1}{|x|\sqrt{x^2-1}}$$
$Q.E.D.$
