# Aprendizagem Automática 

## Apresentação 

**Prof**: Jorge S. Marques 

# Evaluation

**Exam (50%) + Lab (50%)**

Lab: students organized in groups of 2, should perform a project and a
10 pages report. The project includes 2 parts: regression problem and a
classification problem. Lab enrolment is done through fenix in the first
week.



# Project 

!!! important 
    2 parts 

    predict from a training set and should predict from new examples.  1 data set given for evaluation and training and a second data set for prediction. Training set with features and outcome, and evaluation set with only features.    

    2nd part - classification of butterfly images ??? 

    10 pages report     



## What is Machine Learning (ML)

!!! quote
    "the field of study that gives computers the ability to learn without being explicitly programmed. (Arthur Samuel, 1959) 

Basically ML is used (but not only) to solve problems that mathematically are too difficult. -> Intersection with Computational Intelligence! 



!!! quote 
    ”A computer program is said to learn from experience E with respect to some task T and some performance measure P, if its performance on T, as measured by P, improves with experience.” (Tom Mitchell, 1998)

    Ou seja, aprende pela experiência E como? Fazendo tarefas e depois havendo um avaliador para cada tarefa T que ele faça, o tal P.

Being P the performance index. 

## Learning Problems

There are 3 categories of Learning Problems: 

!!! tip "Learning Problems"
    - **Supervised Learning**: receives inputs an output values, and the computer goal is to find the map between them.
    - Unsupervised Learning: receives only inputs.
    - Reinforcement Learning: learns from environment feedback.

    !!! danger
        Only the first category will be studied in the course. 


## Supervised Learning 

There are 3 key concepts in SL: 

- **features** (input) 
- **outcome** (output)
- **predictor** (function model) $ŷ=f(x)$ such that $ŷ$ (predicted) is similar to output $y$ (training)

### Examples: 

#### Example 1
![picture 3](%24%7Bpath%7D/img/5a20db6f6853a23ddf54e2a8875bb2334e5f2c5879e97f64ff601512a5360aa5.png)  

2 inputs as values computes a output as a label

****
#### Example 2
![picture 4](%24%7Bpath%7D/img/af378938dca5b219d8e326b7aea02d97411bcbf43104e6e5fd939be16ffba0b4.png)  

Numerical input computes numerical output 

### Regression VS. Classification 

If the "mapping" of `y` values is a scalar, then the problem is known as a **regression problem**: 

![picture 1](%24%7Bpath%7D/img/0a9686f2187352dc3335ceffa046a0473b87bd0f7723d1d6f7ec72e7fa09e860.png)  

If the output `y` is a label (categorical value) then the problem is known as a **classification problem**:

![picture 2](%24%7Bpath%7D/img/0e71769a7d8c82573d463a66c6ab1a9c99bafdbd435521f3068a1ce1885b31d4.png)  

$y\in\Omega$
Being $\Omega$ a set of labels
$\Omega={\omega_0,...,\omega_{K-1}}$

### System Architecture  

 ![picture 5](%24%7Bpath%7D/img/505d440e4016f3b173d6c7732747d078b0cc4de5afacbfb0a2b4084169490652.png)  

First we train the computer to create a model, then we can predict new outputs and make an assessment. 

### Main Questions 

The block diagram suggests three main questions:
- what class of functions should we consider?
- how do we fit the function f to the training data i.e.,how do we select the function?
- how do we evaluate the predictor?

### Data sets

[Data Sets Example](https://archive.ics.uci.edu/ml/datasets.html)

### Nearest Neighbor method 

Classify the label of an output basead on the label of the nearest known labeled object. 

