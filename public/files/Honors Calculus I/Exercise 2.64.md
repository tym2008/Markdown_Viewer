# Exercise 2.64
---
## 1. $f(x)=\sqrt{x^2-x+1}$

Simply assume the slant asymptote as $y=kx+b$
And we can write it as:
$$k_1=\frac{f(x)}{x}=\frac{\sqrt{x^2-x+1}}{x}=\sqrt{1-\frac{1}{x}+\frac{1}{x^2}}$$
Take $x \to \infty$ and $x \to -\infty$, and we'll get:
$$k_1=\lim_{x \to \infty} \sqrt{1-\frac{1}{x}+\frac{1}{x^2}}=\sqrt{1}=1$$
$$k_2=\lim_{x \to -\infty} \frac{\sqrt{x^2 - x + 1}}{x} = \lim_{x \to -\infty} \frac{\vert{}x\vert{}\sqrt{1 - \frac{1}{x} + \frac{1}{x^2}}}{x} = -1$$
$$b_1=\lim_{x\to \infty} f(x)-x$$
$$b_2=\lim_{x\to -\infty} f(x)-x$$
Do some algebra to $b$, and we'll get:
$$b_1=\frac{(x^2-x+1)-x^2}{\sqrt{x^2-x+1}+x}=\lim_{x \to +\infty} \frac{1-x}{\sqrt{x^2 - x + 1} + x} = \lim_{x \to +\infty} \frac{\frac{1}{x}-1}{\sqrt{1 - \frac{1}{x} + \frac{1}{x^2}} + 1} = -\frac{1}{2}$$
$$b_2=\lim_{x \to -\infty} \frac{(x^2 - x + 1) - x^2}{\sqrt{x^2 - x + 1} - x} = \lim_{x \to -\infty} \frac{-x + 1}{\vert{}x\vert{}\sqrt{1 - \frac{1}{x} + \frac{1}{x^2}} - x}=\lim_{x \to -\infty} \frac{-1 + \frac{1}{x}}{-\sqrt{1 - \frac{1}{x} + \frac{1}{x^2}} - 1} = \frac{-1}{-2} = \frac{1}{2}$$
So we got the slant asymptote:
$$y=x-\frac{1}{2}$$
$$y=-x+\frac{1}{2}$$
$Q.E.D$

---
## 2.$g(x)=\sqrt{2x^2+3x+5}$
Simply assume the slant asymptote as $y=kx+b$
And we can write it as:
$$k=\frac{f(x)}{x}=\frac{\sqrt{2x^2+3x+5}}{x}=\sqrt{2+\frac{3}{x}+\frac{5}{x^2}}$$
Take $x$ to the limit, and we'll have:
$$lim_{x\to\infty} k_1=\sqrt{2+\frac{3}{x}+\frac{5}{x^2}}=\sqrt{2}$$
$$lim_{x\to-\infty} k_2=\frac{\sqrt{2x^2+3x+5}}{x}=-\sqrt{2}$$
Then consider $b$
$$b_1=\lim_{x\to \infty} f(x)-\sqrt{2}x=\lim_{x \to +\infty} \frac{(2x^2 + 3x + 5) - 2x^2}{\sqrt{2x^2 + 3x + 5} + \sqrt{2}x} = \lim_{x \to +\infty} \frac{3x + 5}{\sqrt{2x^2 + 3x + 5} + \sqrt{2}x} = \frac{3}{\sqrt{2} + \sqrt{2}} = \frac{3}{2\sqrt{2}} = \frac{3\sqrt{2}}{4}$$
$$b_2 = \lim_{x \to -\infty} \left(\sqrt{2x^2 + 3x + 5} - (-\sqrt{2}x)\right) = \lim_{x \to -\infty} \left(\sqrt{2x^2 + 3x + 5} + \sqrt{2}x\right)=\lim_{x \to -\infty} \frac{3 + \frac{5}{x}}{-\sqrt{2 + \frac{3}{x} + \frac{5}{x^2}} - \sqrt{2}} = \frac{3}{-\sqrt{2} - \sqrt{2}} = -\frac{3}{2\sqrt{2}} = -\frac{3\sqrt{2}}{4}$$
So we got the slant asymptote when $x\to\infty$ and $x\to-\infty$:
$$y = \sqrt{2}x + \frac{3\sqrt{2}}{4}$$
$$y = -\sqrt{2}x - \frac{3\sqrt{2}}{4}$$
$Q.E.D$