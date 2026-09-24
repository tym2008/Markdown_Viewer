# Exercise 2.9

## 2.
We have to find the limit as $n\to \infty$ for:$$\frac{a\sqrt[3]{n}+b}{c\sqrt{n}+d}$$

First, write the roots as fractional powers:
$\sqrt[3]{n} = n^{1/3}$ (which is $n^{0.33}$)
$\sqrt{n} = n^{1/2}$ (which is $n^{0.50}$)

Notice that the power in the bottom ($1/2$) is larger than the power in the top ($1/3$). This means the bottom will grow much faster than the top.


Then, divide top and bottom by the highest power in the denominator ($\sqrt{n}$)

$$\frac{\frac{a\sqrt[3]{n} + b}{\sqrt{n}}}{\frac{c\sqrt{n} + d}{\sqrt{n}}} = \frac{a\left(\frac{n^{1/3}}{n^{1/2}}\right) + \frac{b}{\sqrt{n}}}{c + \frac{d}{\sqrt{n}}}$$

Using exponent subtraction for the first term: 
$$\frac{n^{1/3}}{n^{1/2}} = n^{1/3 - 1/2} = n^{-1/6} = \frac{1}{\sqrt[6]{n}}$$

So the fraction becomes:
$$\frac{\frac{a}{\sqrt[6]{n}} + \frac{b}{\sqrt{n}}}{c + \frac{d}{\sqrt{n}}}$$


Finally, take the limit as $n \to \infty$

As $n$ gets infinitely large, any number divided by a power of $n$ goes to $0$:
* $\frac{a}{\sqrt[6]{n}} \to 0$
* $\frac{b}{\sqrt{n}} \to 0$
* $\frac{d}{\sqrt{n}} \to 0$

Then, we'll get:
$$\lim_{n\to \infty} \frac{0 + 0}{c + 0} = \frac{0}{c} = 0 \quad (\text{assuming } c \neq 0)$$

And we've got the limit:$\lim_{n\to \infty} \frac{a\sqrt[3]{n}+b}{c\sqrt{n}+d} = \mathbf{0}$
$Q.E.D$

---
## 3.
We have to find the limit as $n\to \infty$ for:$$\frac{n^2+a}{n+b}-\frac{n^2+c}{n+d}$$.

To solve it, we combine the two fractions into a single fraction.
The common denominator is $(n+b)(n+d)$:
$$\frac{(n^2+a)(n+d) - (n^2+c)(n+b)}{(n+b)(n+d)}$$
Expand the two parts:
1. $(n^2+a)(n+d) = n^3 + dn^2 + an + ad$
2. $(n^2+c)(n+b) = n^3 + bn^2 + cn + bc$

And we can get:
$$(n^3 + dn^2 + an + ad) - (n^3 + bn^2 + cn + bc)$$
Notice that $n^3$ cancels out:
$$= (d - b)n^2 + (a - c)n + (ad - bc)$$


Then,multiply out the denominator and put it back together and divide by $n^2$, we'll get:
$$(n+b)(n+d) = n^2 + (b+d)n + bd$$
$$\frac{(d - b)n^2 + (a - c)n + (ad - bc)}{n^2 + (b+d)n + bd}$$

Divide on the top and bottom by $n^2$:

$$\frac{(d - b) + \frac{a - c}{n} + \frac{ad - bc}{n^2}}{1 + \frac{b + d}{n} + \frac{bd}{n^2}}$$


### Step 5: Take the limit as $n \to \infty$

As $n \to \infty$, any term with $n$ in the denominator becomes $0$:
* $\frac{a-c}{n} \to 0$
* $\frac{ad-bc}{n^2} \to 0$
* $\frac{b+d}{n} \to 0$
* $\frac{bd}{n^2} \to 0$


$$\lim_{n\to\infty} \frac{(d-b) + 0 + 0}{1 + 0 + 0} = \frac{d - b}{1} = d - b$$


And we've got the limit:$$\lim_{n\to \infty} \left( \frac{n^2+a}{n+b} - \frac{n^2+c}{n+d} \right) = \mathbf{d - b}$$
$Q.E.D$

---
## 4.
We have to find the limit as $n\to \infty$ for:$$\sqrt{n}(\sqrt{n+a}-\sqrt{n+b})$$.

First, we can notice that $\frac{\sqrt{n+a} + \sqrt{n+b}}{\sqrt{n+a} + \sqrt{n+b}}=1$,so the source one equals to:
$$\sqrt{n}(\sqrt{n+a} - \sqrt{n+b}) \times \frac{\sqrt{n+a} + \sqrt{n+b}}{\sqrt{n+a} + \sqrt{n+b}}$$


Using this:$(x - y)(x + y) = x^2 - y^2$, we'll have:

$$(\sqrt{n+a})^2 - (\sqrt{n+b})^2 = (n + a) - (n + b) = a - b$$

Now, put everything together:
$$\frac{\sqrt{n}(a - b)}{\sqrt{n+a} + \sqrt{n+b}}$$

Divide numerator and denominator by $\sqrt{n}$
$$\frac{\sqrt{n}(a - b)}{\sqrt{n}} = a - b$$
$$\frac{\sqrt{n+a} + \sqrt{n+b}}{\sqrt{n}} = \sqrt{\frac{n+a}{n}} + \sqrt{\frac{n+b}{n}} = \sqrt{1 + \frac{a}{n}} + \sqrt{1 + \frac{b}{n}}$$

So the fraction becomes:
$$\frac{a - b}{\sqrt{1 + \frac{a}{n}} + \sqrt{1 + \frac{b}{n}}}$$

As $n \to \infty$, the terms $\frac{a}{n}$ and $\frac{b}{n}$ go to $0$:

$$\lim_{n\to\infty} \frac{a - b}{\sqrt{1 + 0} + \sqrt{1 + 0}} = \frac{a - b}{1 + 1} = \frac{a - b}{2}$$

And we've got the limit:$$\lim_{n\to \infty} \sqrt{n}\left(\sqrt{n+a}-\sqrt{n+b}\right) = \mathbf{\frac{a - b}{2}}$$
$Q.E.D$