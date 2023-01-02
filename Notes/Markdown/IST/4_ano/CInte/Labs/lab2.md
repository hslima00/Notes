# Lab2 - CInte

[Enunciado](files/lab2_en22%20(1).pdf)


```python
import numpy as np
import pandas as pd
from datetime import datetime


oil_df = pd.read_csv('DCOILBRENTEUv2.csv') 
oil_df['DCOILBRENTEU'].astype(float) 

min=oil_df['DCOILBRENTEU'].min()
max=oil_df['DCOILBRENTEU'].max()
mean=oil_df['DCOILBRENTEU'].mean()

oil_df['Normalize']= (oil_df['DCOILBRENTEU']-min)/(max-min)
standard_deviation=oil_df['DCOILBRENTEU'].std()
oil_df['Z-Score']= (oil_df['DCOILBRENTEU']-mean)/(standard_deviation)

Ydates=oil_df['DATE'].astype(np.datetime64)
oil_df.to_csv('alinea_a.csv', decimal=',', sep=';', index=False)

plt.subplot(211)
plt.plot(Ydates,oil_df['Normalize'], 'b--')
plt.xlabel('Normalized')
plt.ylabel('Date')
plt.subplot(212)
plt.plot(Ydates, oil_df['Z-Score'], 'g--')
plt.xlabel('Z-Score')
plt.ylabel('Date')
plt.show()

plt.figure()
plt.plot(Ydates,oil_df['DCOILBRENTEU'].rolling(window=50).mean())
plt.xlabel('Oil price with moving average')
plt.ylabel('Date')
plt.show()
```

# Output

## a)

![picture 1](%24%7Bpath%7D/img/fafe48170d951b717995e69e715aa68ec5f13b731f251fdbd42ebf0d8ee39745.png)  

## b)

![picture 2](%24%7Bpath%7D/img/248b4e3f31c4d011cfb83e7d15d49633b29882615b8cf4387d4832477ec1b9d8.png)  
