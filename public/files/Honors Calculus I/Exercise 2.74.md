# Exercise 2.74
---
## 1.$\lim_{x\to\infty}sin(\pi \sqrt{n^2+1})=0$
First, we've known that $sinx=0$ is true if and only if $x=n\pi,n\in Z$.
So we know that only if the equation below is true, the source is true:
$$\lim_{x\to\infty}sin(\pi \sqrt{n^2+1}-n\pi)=0$$
And we also know:
$$\sqrt{n^2+1} - n = \frac{(\sqrt{n^2+1} - n)(\sqrt{n^2+1} + n)}{\sqrt{n^2+1} + n} = \frac{1}{\sqrt{n^2+1} + n}$$
When $n\to\infty$:
$$\lim_{n \to \infty} \left(\sqrt{n^2+1} - n\right) = \lim_{n \to \infty} \frac{1}{\sqrt{n^2+1} + n} = 0$$
So:
$$\lim_{n \to \infty} \pi (\sqrt{n^2+1} - n) = 0$$
$$\lim_{x\to\infty}sin(\pi \sqrt{n^2+1}-n\pi)=sin0=0$$
$Q.E.D$

---
## 2. $\lim_{x\to\infty} sin^2(\pi\sqrt{n^2+n})=1$
Same as the above one, we've known that $sin^2x=1$ is true if and only if $x=(n+\frac{1}{2})\pi,n\in Z$.
So we know that only if the equation below is true, the source one is true:
$$\lim_{x\to\infty}sin(\pi \sqrt{n^2+n}-n\pi)=1$$
$$\lim_{x\to\infty}\pi \sqrt{n^2+n}-n\pi=\frac{1}{2}\pi$$
$$\lim_{x\to\infty} \sqrt{n^2+n}-n=\frac{1}{2}$$
That's what we want to show.
We also know:
$$\sqrt{n^2+n} - n = \frac{(\sqrt{n^2+n} - n)(\sqrt{n^2+n} + n)}{\sqrt{n^2+n} + n} = \frac{n}{\sqrt{n^2+n} + n}$$
So:
$$\frac{n}{\sqrt{n^2+n} + n}=\frac{1}{\sqrt{1+\frac{1}{n}}+1}$$
When $n\to\infty$:
$$\lim_{n \to \infty} \left(\sqrt{n^2+n} - n\right) = \frac{1}{\sqrt{1+0} + 1} = \frac{1}{2}$$
And we've proven this:
$$\lim_{x\to\infty} \sqrt{n^2+n}-n=\frac{1}{2}$$
Then we can know that 
$$\lim_{x\to\infty}sin(\pi \sqrt{n^2+n}-n\pi)=1$$
is true.
So the source equation is proven.
$Q.E.D.$
