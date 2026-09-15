### 1
We know that $|\frac{x_{n+1}}{x_n}|$ equals $\frac{|x_{n+1}|}{|x_n|}$, so we can know that $|\frac{x_{n+1}}{x_n}|=\frac{|x_{n+1}|}{|x_n|}\leq r$ according to the problem.

Then what we need to prove is that when $r \in (0,1)$ and $\frac{|x_{n+1}|}{|x_n|}\leq r$, {${x_n}$} is bounded.

We know that $\frac{|x_{n+1}|}{|x_n|}\leq r$, so we can know that $|x_{n+1}| \leq r|x_n|$. What's more, due to $r \in {0,1}$, $|x_{n+1}|$ and $|x_n|$ are positive real numbers, so we can know that $|x_{n+1}| \leq r|x_n| \leq |x_n|$.

Then we can easily realize that {$|x_n|$} is monotonically decreasing.

Let $x_1$ as a, we know that for every $n \in N_+$, we can have $|x_{n+1}| \leq |x_n|$, that is, $-|x_n| \leq x_{n+1} \leq |x_n|$. Then, we can easily get $-|x_1| \leq x_n \leq |x_1|$ for every $x \in N_+$.

Therefore, we can know that $-|x_1|$ is the lower bound of {$x_n$}, and $|x_1|$ is the upper bound of {$x_n$}.

$Q.E.D$

---

### 2

Same as the first one, we'll have $|\frac{x_{n+1}}{x_n}|=\frac{|x_{n+1}|}{|x_n|}\geq r$, and we'll easily know that $|x_{n+1}|\geq r|x_n| \geq |x_n|$ for every $r \in [1,+\infty)$.

That is, the sequence $|x_n|$ is monotonically increasing.

Then assume if the sequence $|x_n|$ is bounded, so it will have least-upper-bound $\sup |x_n| = \beta$ or a greatest-lower-bound $\inf |x_n| = \alpha$.

Just take $\gamma =\max({\alpha},{\beta})$ as {$x_n$}'s upper bound, and $-\gamma$ as  {$x_n$}'s lower bound.

We can know that when $\gamma$ exists, there must be a $n_0 \in N_+$, where $|x_{n_0}|=\gamma$. However, due to {${x_n}$} is monotonically increasing, there must be at least a $n \geq n_0$,$n \in N_+$, where $|x_n| \geq |x_{n_0}|$, so it's easily to know that $x_n > \gamma  $ or $x_n< \gamma$, and then we know that no longer  $\gamma$ is {$x_n$}'s upper bound or $-\gamma$ is {$x_n$}'s lower bound, opposite to the assumption before.

So we know that the assumption that {$x_n$} is bounded is false.
Therefore, we prove that {$x_n$} is unbounded.

$Q.E.D$