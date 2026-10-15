# Exercise 2.54
---
## 1.$\lim\limits_{x \to a} [1 + w(x)]^{1/w(x)} = e$ && $\lim\limits_{x \to a} \frac{\ln[1 + w(x)]}{w(x)} = 1$

From what we've known:
$$\lim_{t \to 0} (1 + t)^{1/t} = e$$
So we can write it as $\lim\limits_{t \to 0} f(t) = e$, while $f(t) = (1 + t)^{1/t}$.
What's more, $\lim\limits_{x \to a} w(x) = 0$.
And in the deleted neighborhood of a, $w(x) \neq 0$.
So, by the substitution rule, we know:
$$\lim_{x \to a} [1 + w(x)]^{1/w(x)} = \lim_{t \to 0} (1 + t)^{1/t} = e$$

We've also known that $c \ln(y) = \ln(y^c)$.
So:
$$\frac{\ln[1 + w(x)]}{w(x)} = \frac{1}{w(x)} \ln[1 + w(x)] = \ln\left([1 + w(x)]^{1/w(x)}\right)$$
$$\lim_{x \to a} \frac{\ln[1 + w(x)]}{w(x)} = \lim_{x \to a} \ln\left([1 + w(x)]^{1/w(x)}\right) = \ln\left(\lim_{x \to a} [1 + w(x)]^{1/w(x)}\right)$$
From what's shown in the first part($\lim\limits_{x \to a} [1 + w(x)]^{1/w(x)} = e$), we know:
$$\lim_{x \to a} \frac{\ln[1 + w(x)]}{w(x)} = \ln(e) = 1$$
$Q.E.D$

---

## 2. $\lim\limits_{x \to a} [u(x)]^{v(x)} = e^L$ && $\lim\limits_{x \to a} [u(x)]^{v(x)} = b^L$

### Part 1.$\lim\limits_{x \to a} [u(x)]^{v(x)} = e^L$
Rewrite the expression as $[u(x)]^{v(x)} = e^{\ln\left([u(x)]^{v(x)}\right)} = e^{v(x) \ln[u(x)]}$($\lim\limits_{x \to a} u(x) = e > 0$, so in the deleted neighborhood of a, $u(x) > 0$ always exists.

It's obvious that the function $\ln y$ is continuous at y=e, so:
$$\lim_{x \to a} \ln[u(x)] = \ln\left(\lim_{x \to a} u(x)\right) = \ln(e) = 1$$
By the multiplication rule of limits,
$$\lim_{x \to a} \Big(v(x) \ln[u(x)]\Big) = \left(\lim_{x \to a} v(x)\right)  \left(\lim_{x \to a} \ln[u(x)]\right) = L * 1 = L$$

And what's more, $y=e^x$ is continuous at any points real, we'll find:
$$\lim_{x \to a} [u(x)]^{v(x)} = \lim_{x \to a} e^{v(x) \ln[u(x)]} = e^{\lim_{x \to a} (v(x) \ln[u(x)])} = e^L$$

### Part 2. $\lim\limits_{x \to a} [u(x)]^{v(x)} = b^L$
Rewrite the expression as $[u(x)]^{v(x)} = e^{\ln\left([u(x)]^{v(x)}\right)} = e^{v(x) \ln[u(x)]}$($\lim\limits_{x \to a} u(x) = b > 0$, so in the deleted neighborhood of a, $u(x) > 0$ always exists.

It's obvious that the function $\ln y$ is continuous at y=b, so:
$$\lim_{x \to a} \ln[u(x)] = \ln\left(\lim_{x \to a} u(x)\right) = \ln(b)$$
By the multiplication rule of limits,
$$\lim_{x \to a} \Big(v(x) \ln[u(x)]\Big) = \left(\lim_{x \to a} v(x)\right)  \left(\lim_{x \to a} \ln[u(x)]\right) = L * \ln(b)=\ln{b^L}$$

And what's more, $y=e^x$ is continuous at any points real, we'll find:
$$\lim_{x \to a} [u(x)]^{v(x)} = \lim_{x \to a} e^{v(x) \ln[u(x)]} = e^{\lim_{x \to a} (v(x) \ln[u(x)])} = e^{\ln{b^L}} =b^L $$
$Q.E.D$