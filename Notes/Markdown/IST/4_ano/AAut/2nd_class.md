# Linear Regression

$\newcommand\Beta{\mathrm{B}}$

$x\in R \ \ features$ -> Scalar

$y\in R \ \ outcome$

$ŷ=f(x) \ \ predictor$ -> linear (on this case, can be complex like NN)

$ŷ=\Beta_0+\Beta_1x$ , being $\Beta_0$ the offset

***

$T={(1,1)}$

$\Beta_0+\Beta_1=1$ 

Not enough data to model our system! 

***

$T={(1,1),(3,2)}$

$\Beta_0+\Beta_1=1$

$\Beta_0+3\Beta_1=2$

Still not a good model because lacks of data

***

$T={(1,1),(3,2),(0,1)}$

With these 3 points, we cannot model the system, because we have more equations than variables: 

$\Beta_0+\Beta_1=1$

$\Beta_0+3\Beta_1=2$  

$\Beta_0+0\Beta_1=1$

**Impossible to solve!**

We need to assume that there will be erros: 

$e^{(i)}=y^{(i)}-ŷ^{(i)}$  being $i$ the example data point

$e^{(i)}=y^{(i)}-f(x^{(i)})=y^{(i)}-\Beta_0-\Beta_1 x^{(i)}$

Loss: $(y^{(i)}-ŷ^{(i)})²$ 

Total Loss (SSE(sum of squared errors)): $SSE=\sum_{i=1}^{n}(y^{(i)}-ŷ^{(i)})²$

We want to find points that minimize the loss, that being $\hat\Beta_0$ and $\hat\Beta_1$ 

![picture 1](%24%7Bpath%7D/img/8fff22033d132ae5e60066341b1eed81c013a7bc72e1fbba76c2eeaac056a663.png)  

We now calculate the partial derivatives of SEE:

![picture 2](%24%7Bpath%7D/img/11da312c147a079d896c8443c690aa922bea49823109d29a76e3ec806c295129.png)  


![picture 3](%24%7Bpath%7D/img/34f98b26de116c852b39e962466819f7c61a714fdb7f538b07807cdf9a6ae103.png)  

![picture 4](%24%7Bpath%7D/img/6406781714764baaa6f49d2c4667c71eb2baeccebd73066169062982cb98ac73.png)  


## Analytic Optimization!

![picture 5](%24%7Bpath%7D/img/631c1541b3f69d229761a60479fc22d81fea2f2d24fdde81f9fedea6513e5b05.png)  

### Exercise:

!!! danger
    ![picture 6](%24%7Bpath%7D/img/906f781e9c625e393173a60eda8a44d99128a073cdc3b4665ea7a53af4b1cd72.png)  

### Exercise Data Pre-Processing: 

![picture 7](%24%7Bpath%7D/img/9873e161bb9aabcd7ddc909e43fb505a117c8c29081548af63dedf89787d82ac.png)  

![picture 8](%24%7Bpath%7D/img/8ac9170d44ae82b64a912d7bc7cadbd4e846b26837560528fd332f882d820ef0.png)  

## Problem Formulation 

![picture 9](%24%7Bpath%7D/img/292fe418fbbf525529152e72dc0f813dda8b562a4f971dcca1891a962790eff7.png)  

Putting the linear model in a matrix

![picture 10](%24%7Bpath%7D/img/23dc2db51a67c4f830496fe6ad8adb6140892e4c455399e9f61f8bed73190f3f.png)  

Is read "a collumn of ones followed by the features:

$ŷ=f(x)=X$

![picture 11](%24%7Bpath%7D/img/7e6bf760123410820d0eaff21817d63a1719ab56ddd87fedadf8394a5980b382.png)  

![picture 12](%24%7Bpath%7D/img/0da14f28975764deedd74c4d6cee24ef1aba7beb4e0394652d528aad35853ca6.png)  


## Summary of Linear Regression 

![picture 6](%24%7Bpath%7D/img/48bf200bf98549d1d81f530c7b206fce8c4806154c0b6521b50965de62d92698.png)  

