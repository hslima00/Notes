# Data Preprocessing 

## Data Transformation 

- Smoothins «: removing noise from data, applying a filter etc 
- Normalization: scale values to fall within a smaller specified range
  - min-max
  - z-score 
- Discretization
- Agreggation 

### Min-Max normalization

$$
new_x=\frac{x-min}{max-min}
$$

!!! warning
    Min-Max does not handle outliers well!


### Z-Score 

$$
z=\frac{x-mean}{standard\ \ deviation}
$$

### Data Matrix 

$n$ data poins with $p$ dimenstions

### Proximity measure for nominal attributes 

#### Simple matching 

$$
d(i,j)=\frac{p-m}{p}
$$

Sendo $m$ o # de matches
e $p$ o numero de features

#### Use a large binary of nominal attributes 

Make attributes questions and turn the dataframe binary based 

$$
d(i,j)=\frac{soma\ \ das \ \ diferencas}{soma \ \ do \ \ resto  \ \ sem \ \ contar \ \ com \ \ pares \ \ 0-0}
$$

### Minkwski Distance 

ver depois 


## Vector Similarity 

- Represent data as vectors 

# Training, Validation, Test sets 

-   Training dataset 
-   Validation/Development dataset 
    -   Adjusting the weights in the neurons 
-   Test dataset

!!! important
    If a model performs better the training set than the test set than overfitting has occurred 

!!! tip
    Common ratios 
    - 70% Train 30% Test
    - 70 train 15 vali 15 test 
    - 80 10 10
    - ...


## K-Fold Cross-Validation

- Partition the data in K equal sized subset

!!! important
    Cross-Validation doesnt work in time series data

# Error Measurement 

## Root mean square error 

## Mean average error 

!!! important 
    we need a "baseline" to user this tipe of error measumement 

## Logarithmic Loss 

Log loss quantifies teh accuracy of a classifier by penalising false classifications

# Confusion Matrix learning_rate
    image of the matrix 

We can calculate the precision the NN with :

$$
ACC=\frac{TP+TN}{P+N}=\frac{TP+TN}{TP+TN+FP+FN}
$$

Positive Predictive Value

$$
PPV = \frac{TP}{TP+FP}
$$

True Positive Rate 

$$
TPR=\frac{TP}{P}=\frac{TP}{TP+FN}
$$

F1 score - Harmonic mean of PPV and TPR 

$$
F_1=\frac{PPV*TPR}{PPV+TPR}=\frac{2TP}{2TP+FP+FN}
$$

!!! bug
    ver isto no yt depois, o prof disse q era importante perceber esta treta