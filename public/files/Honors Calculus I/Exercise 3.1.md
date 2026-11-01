# Exercise 3.1
---
## 1.$(\frac{1}{1+x})'=\lim_{\Delta x\to 0}\frac{\frac{1}{1+(x+\Delta x)}-\frac{1}{1+x}}{\Delta x}$
Do some algebra:
$$\frac{\frac{1}{1+(x+\Delta x)}-\frac{1}{1+x}}{\Delta x}=\frac{(1+x)-(1+x+\Delta x)}{\Delta x (1+x+\Delta x)(1+x)}=\frac{-\Delta x}{\Delta x (1+x+\Delta x)(1+x)}=-\frac{1}{(1+x+\Delta x)(1+x)}$$
Take x to the limit:
$$\lim_{\Delta x\to 0}\frac{\frac{1}{1+(x+\Delta x)}-\frac{1}{1+x}}{\Delta x}=\lim_{\Delta x\to 0}\frac{-1}{(1+x+\Delta x)(1+x)}=-\frac{1}{(1+x)(1+x)}$$
So we've got this:
$$(\frac{1}{1+x})'=-\frac{1}{(1+x)(1+x)}$$
$Q.E.D.$

---
## 2. $(\frac{1}{\sqrt{x+a}})'=\lim_{h\to 0}\frac{\frac{1}{\sqrt{(x+h)+a}}-\frac{1}{\sqrt{x+a}}}{h}$

Do some algebra:
$$\frac{\frac{1}{\sqrt{(x+h)+a}}-\frac{1}{\sqrt{x+a}}}{h}=\frac{\sqrt{x+a}-\sqrt{x+h+a}}{h\sqrt{x+h+a}\sqrt{x+a}}=\frac{(\sqrt{x+a}-\sqrt{x+h+a})(\sqrt{x+a}+\sqrt{x+h+a})}{h\sqrt{x+h+a}\sqrt{x+a}(\sqrt{x+a}+\sqrt{x+h+a})}=\frac{x+a-(x+h+a)}{h\sqrt{x+h+a}\sqrt{x+a}(\sqrt{x+a}+\sqrt{x+h+a})}=\frac{-1}{\sqrt{x+h+a}\sqrt{x+a}(\sqrt{x+a}+\sqrt{x+h+a})}$$
And we can know:
$$\sqrt{x+h+a}\sqrt{x+a}(\sqrt{x+a}+\sqrt{x+h+a})=(x+a)\sqrt{x+h+a}+(x+h+a)\sqrt{x+a}$$
Take h to the limit
$$\lim_{h\to 0}\frac{-1}{\sqrt{x+h+a}\sqrt{x+a}(\sqrt{x+a}+\sqrt{x+h+a})}=\frac{-1}{\sqrt{x+a}\sqrt{x+a}(\sqrt{x+a}+\sqrt{x+a})}=\frac{-1}{2(x+a)^\frac{3}{2}}$$
So we got the limit.
$Q.E.D.$