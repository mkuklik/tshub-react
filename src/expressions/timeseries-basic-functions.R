library(zoo)

t = as.yearqtr("2000Q1") + seq(0,9)/4
x <- zoo(c(1.3, 2.3, 5.6, 2.3, 2.4, 5.3, 3.1, 4.5, 1.5, 0.7), t);
x <- zoo(c(1.3, 2.3, 5.6, 2.3, 2.4, 5.3, 3.1, NaN, 1.5, 0.7), t);
yoypc = x/lag(x, -4)-1.0; yoypc
apc = (x/lag(x, -1))^4-1.0; apc
pc = x/lag(x, -1)-1.0; pc
d = x-lag(x, -1); d
yoydiff = x-lag(x, -4)
alogdiff = 4*log(x)-log(lag(x, -1))
logdiff = log(x)-log(lag(x, -1)); logdiff
yoylogdiff = log(x)-log(lag(x, -4)); yoylogdiff

m1 = lm("y~1+x", data = merge(y=x, x=zoo(seq(1,10), t)))
plot.zoo(merge(x, predict(m1)), plot.type="single")
predict(m1)
mean(x)
