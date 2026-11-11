# Exercise 3.20
---

## 3.$y = \left(1 + \frac{1}{x}\right)^x$

Apply the logarithmic：
$$\ln y = \ln \left[\left(1 + \frac{1}{x}\right)^x\right] = x \ln \left(1 + \frac{1}{x}\right)$$

Then calculate:
$$\frac{1}{y} \cdot \frac{dy}{dx} = \frac{d}{dx}[x] \cdot \ln \left(1 + \frac{1}{x}\right) + x \cdot \frac{d}{dx}\left[\ln \left(1 + \frac{1}{x}\right)\right]$$


$$\frac{1}{y} \frac{dy}{dx} = 1 \cdot \ln \left(1 + \frac{1}{x}\right) + x \cdot \frac{1}{1 + \frac{1}{x}} \cdot \left(-\frac{1}{x^2}\right)$$

$$x \cdot \frac{x}{x + 1} \cdot \left(-\frac{1}{x^2}\right) = -\frac{1}{x + 1}$$

$$\frac{1}{y} \frac{dy}{dx} = \ln \left(1 + \frac{1}{x}\right) - \frac{1}{x + 1}$$

$$\frac{dy}{dx} = \left(1 + \frac{1}{x}\right)^x \left[ \ln \left(1 + \frac{1}{x}\right) - \frac{1}{x + 1} \right]$$

So we got the answer:

$$y'=\left(1 + \frac{1}{x}\right)^x \left[ \ln \left(1 + \frac{1}{x}\right) - \frac{1}{x + 1} \right]$$

---

## 6. $y = (\sin x)^{\cos x} + (\cos x)^{\sin x}$

Simple assume $y = u + v$, and use logarithmic separately, then finally put them together using :$\frac{dy}{dx} = \frac{du}{dx} + \frac{dv}{dx}$。

### 1. $u = (\sin x)^{\cos x}$

Take logarithmic：
$$\ln u = \cos x \cdot \ln(\sin x)$$

Then calculate the derivative on both sides:
$$\frac{1}{u}\frac{du}{dx} = (-\sin x)\ln(\sin x) + \cos x \cdot \frac{\cos x}{\sin x} = -\sin x \ln(\sin x) + \frac{\cos^2 x}{\sin x}$$


$$\frac{du}{dx} = (\sin x)^{\cos x} \left[ \frac{\cos^2 x}{\sin x} - \sin x \ln(\sin x) \right]$$

### 2. $v = (\cos x)^{\sin x}$ 
Same as what's shown above:
$$\ln v = \sin x \cdot \ln(\cos x)$$

$$\frac{1}{v}\frac{dv}{dx} = \cos x \cdot \ln(\cos x) + \sin x \cdot \frac{-\sin x}{\cos x} = \cos x \ln(\cos x) - \frac{\sin^2 x}{\cos x}$$

$$\frac{dv}{dx} = (\cos x)^{\sin x} \left[ \cos x \ln(\cos x) - \frac{\sin^2 x}{\cos x} \right]$$

### 3. Put them together:

$$\frac{dy}{dx} = (\sin x)^{\cos x} \left[ \frac{\cos^2 x}{\sin x} - \sin x \ln(\sin x) \right] + (\cos x)^{\sin x} \left[ \cos x \ln(\cos x) - \frac{\sin^2 x}{\cos x} \right]$$

$Q.E.D.$