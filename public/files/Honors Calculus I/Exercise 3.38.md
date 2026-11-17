# Exercise 3.38

---

## 1

First, prove the first equality by mathematical induction:


$$[e^{ax} \sin(bx + c)]^{(n)} = e^{ax} (a^2 + b^2)^{n/2} \sin(bx + c + n\varphi)$$

For the base case $n = 1$, differentiate $e^{ax} \sin(bx + c)$:


$$[e^{ax} \sin(bx + c)]' = a e^{ax} \sin(bx + c) + b e^{ax} \cos(bx + c) = e^{ax} \sqrt{a^2 + b^2} [\frac{a}{\sqrt{a^2 + b^2}} \sin(bx + c) + \frac{b}{\sqrt{a^2 + b^2}} \cos(bx + c)]$$

Substitute $\cos\varphi = \frac{a}{\sqrt{a^2 + b^2}}$ and $\sin\varphi = \frac{b}{\sqrt{a^2 + b^2}}$, and apply  $\sin(\alpha + \beta) = \sin\alpha \cos\beta + \cos\alpha \sin\beta$:


$$[e^{ax} \sin(bx + c)]' = e^{ax} (a^2 + b^2)^{1/2} [\sin(bx + c) \cos\varphi + \cos(bx + c) \sin\varphi] = e^{ax} (a^2 + b^2)^{1/2} \sin(bx + c + \varphi)$$

Thus, the equality holds for $n = 1$.

For the inductive hypothesis, assume the equality holds for $n = k$ ($k \ge 1$):


$$[e^{ax} \sin(bx + c)]^{(k)} = e^{ax} (a^2 + b^2)^{k/2} \sin(bx + c + k\varphi)$$

For the inductive step $n = k + 1$, differentiate once more on the basis of $n = k$:


$$[e^{ax} \sin(bx + c)]^{(k+1)} = [e^{ax} (a^2 + b^2)^{k/2} \sin(bx + c + k\varphi)]' = (a^2 + b^2)^{k/2} [e^{ax} \sin(bx + c + k\varphi)]'$$

Treating $(c + k\varphi)$ as a new constant and applying the $n = 1$ result, we obtain:


$$[e^{ax} \sin(bx + c)]^{(k+1)} = (a^2 + b^2)^{k/2} * e^{ax} (a^2 + b^2)^{1/2} \sin(bx + c + k\varphi + \varphi) = e^{ax} (a^2 + b^2)^{(k+1)/2} \sin(bx + c + (k + 1)\varphi)$$

Thus, the equality also holds for $n = k + 1$. By mathematical induction, the first equality holds for all positive integers $n$.

## 2
Second, prove the second equality by mathematical induction:


$$[e^{ax} \cos(bx + c)]^{(n)} = e^{ax} (a^2 + b^2)^{n/2} \cos(bx + c + n\varphi)$$

For the base case $n = 1$, differentiate $e^{ax} \cos(bx + c)$:


$$[e^{ax} \cos(bx + c)]' = a e^{ax} \cos(bx + c) - b e^{ax} \sin(bx + c) = e^{ax} \sqrt{a^2 + b^2} [\frac{a}{\sqrt{a^2 + b^2}} \cos(bx + c) - \frac{b}{\sqrt{a^2 + b^2}} \sin(bx + c)]$$

Substitute $\cos\varphi$ and $\sin\varphi$, and apply $\cos(\alpha + \beta) = \cos\alpha \cos\beta - \sin\alpha \sin\beta$:


$$[e^{ax} \cos(bx + c)]' = e^{ax} (a^2 + b^2)^{1/2} [\cos(bx + c) \cos\varphi - \sin(bx + c) \sin\varphi] = e^{ax} (a^2 + b^2)^{1/2} \cos(bx + c + \varphi)$$

Thus, the equality holds for $n = 1$.

Assume the equality holds for $n = k$ ($k \ge 1$):


$$[e^{ax} \cos(bx + c)]^{(k)} = e^{ax} (a^2 + b^2)^{k/2} \cos(bx + c + k\varphi)$$

Then for $n = k + 1$, differentiating once more and applying the $n = 1$ result gives:


$$[e^{ax} \cos(bx + c)]^{(k+1)} = (a^2 + b^2)^{k/2} [e^{ax} \cos(bx + c + k\varphi)]' = (a^2 + b^2)^{k/2} * e^{ax} (a^2 + b^2)^{1/2} \cos(bx + c + k\varphi + \varphi) = e^{ax} (a^2 + b^2)^{(k+1)/2} \cos(bx + c + (k + 1)\varphi)$$

By mathematical induction, the second equality also holds for all positive integers $n$.

So we've proved both equalities.
$Q.E.D.$