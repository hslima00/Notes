


# MAP2 Study 

## Study for the $2^{nd}$ MAP 

  
- [Evolutionary Computation](files/6-ACI_Evolutionary_Computation_student.pdf)
- [Evolutionary Optimization](files/7-ACI_Evolutionary_Optimization_student.pdf)
- [Examples](files/7-ACI_EO_ExtraExamples.pdf)

# Basic Ideas and Fundamentals

****

**Motivation:** Finding optimal solutions for complex problems without exact analytical description. Automate the process of evolving algorithms. 

## ==Genotype-phenotype distinction==

- ==*Genotype*== is an organism's full
hereditary information

- ==*Phenotype*== is an
organism's actual observed properties, such
as morphology, development, or behavior

We can this of this two definitions like 2 separate spaces connected: 

![picture 1](%24%7Bpath%7D/img/8cdeb6071c947adbd3e842135070240b08eb0c1e558c295c71d501c8b70a0f14.png)  

$G$ being the Genotype, or, the actual organisms/generation space
$P$ being the Phenotype, or the response/behavior of the organisms when passed through a certain function. 

!!! info "Important"
    Evolution can be viewed as occurring as a succession of four mapping functions

!!! example "Mapping Functions"

     1. Epigenesis, $f_1$
     2. Selection, $f_2$
     3. Genotypic survival, $f_3$
     4. Mutation, $f_4$
   
!!! note "Epigenesis $f_1$"
    Each element from the generation $g_i$ passes through some kind of function to obtain the "collection of phenotypes"

    ??? abstract "Example image"

        ![picture 2](%24%7Bpath%7D/img/0de8493a308d4e1782631ebc7101e1798db8a3053ee8e34fb605d1033bbbe7ea.png)  

!!! note "Selection $f_2$"
    Selects the best percentage of phenotypes according to our problem.

    ??? abstract "Example"

        Assuming a minimization problem:

        ![picture 3](%24%7Bpath%7D/img/64a2930dfdfa03423487fe52973d18c4b4eaa55a010ff2fb786f0849a78c53ca.png)  

!!! note "Genotypic Survival $f_3$"
    Basically choses which organisms will survive according to their phenotypes chosen by the ==Selection== function

    ??? abstract "Example"

        ![picture 4](%24%7Bpath%7D/img/6d62c512e1b850462c6c10095d74b457d7832359b209bc50fa8ad701bc74890a.png)  

!!! note "Mutation $f_4$"
    Creation of offsprings from parents. 

    Mutation is a set of ==rules== of genetic variation: **individual gene mutations, recombination, inversion, etc**

## ==Exhaustive Search== 

The procedure is certain to ==**find the best solution**== but time to find it may be prohibitive.

1. Generate a list of all potential solutions to the problem
2. Evaluate potential solutions one by one disqualifying "bad" ones
3. Keep track of the best one found so far

==Transcomputational Problem== is a problem that requires processing of more then 10^93^ bits of information.

What this means is that the Exhaustive Search doesn't work if our data is bigger than 10^93^ bits. 


## ==Blind Random Search== 

1. Picks a random index from an array
2. Picks another random index from an array
3. Checks if the newly picked index has a better score then the previous
4. If it has, it removes the previous index from the array
5. Repeat from 2.

Each index has a $\frac{1}{k}$ probability to be the first pick. The second index has a $\frac{1}{k-1}$ probability to be chosen and so forth.

!!! danger "Comment"
    The procedure can be performed in a reasonable time, however, ==it usually performs poorly in real-world problems==.

!!! note
    Both Exhaustive and Blind Random Search choose the next solution ==without regard to what has been chosen previously==. 

## ==Traditional Search Procedures== (Gradient Search)

This methods **are not blind**. They involve gradient or statistics to move rapidly in a direction that is presumed to be beneficial

!!! danger
    This methods converge very quickly on a maximum or minimum, bit run the risks of stalling into a local maxima or minima.

## EA vs Traditional Gradient Methods 

Two major differences: 
1. No point-to-point search, we can analyze various solutions in one generation, **each competing for survival**.
2. Instead of utilizing gradient information, they utilize random variation to explore for new solutions


## ==Evolutionary Algorithm==
The relation between parents and offsprings is ==inheritance==. If there is no inheritance then we basically have a blind random search.

Evolutionary algorithms are often viewed in terms of:
- the ==data structures== that are used to represent ==solutions==,
- the ==search operators== that are applied to those data structures,
- and the ==selection operators== that determine which solutions in a  population will influence the creation of the next generation.


## Representation, Search and Selection Operators 

!!! abstract "Selection"
    - can vary in effect from strong to weak
    - strong selection ensure the survival of only the best solutions
    - weak selection means that weaker solutions may also serve as parents

!!! abstract "Search"
    - include **mutation functions** that apply to ==a single parent==
    - **recombination functions** apply to ==two or more parents==.
      - Crossover is a special case of recombination, where we take segments of the genome of the two parents and create an offspring with them.



### Traveling Salesman Problem

Given $n$ cities with known distances between each pair, find the shortest tour that passes through all the cities exactly once before returning to the starting city.


# Evolutionary Optimization

## Basic Ideas

- Utilizing EA for optimization requires the problem to be well defined, and the solutions must be comparable.
- **Interactive Evolutionary Computation**- humans provide a judgment about the quality of proposed solutions.

!!! abstract "There are two forms of optimization problem"

    - ==Numeric==: the goal is a numeric solution, for example, in a minimization problem the lower the better
    - ==Combinatoric==: the goal is a combination of items that can be listed. 

## Global NUmerical Optimization

This is the basic EA.
![picture 1](%24%7Bpath%7D/img/22270f3b6939ca217c889da8df7485651f60eb7a07350bfd4beadff570b118d9.png)  

When should se stop looking for solutions?
- If the best solution is below a pre-defined threshold
- If the best solution is not evolving for a pre-defined time (number of generations)

In Global Numerical Optimization we create offsprings by ==mutation== or ==recombination==.

==One Point Cross-Over==

![picture 2](%24%7Bpath%7D/img/e1819caa15d831b9691374b90f433e3ea7313a843ee4b4e88ee3ee48e4557372.png)  

==Multiple Point Crossover==

![picture 3](%24%7Bpath%7D/img/ac23dfe16f8061867e4c6d943008969b8daf952e313348b24e72ac6e37f81691.png)  

==Uniform Crossover==

![picture 4](%24%7Bpath%7D/img/7a019e38824eac10590ee9961c0cb2b50effe5718379b784ea490aaff695ca79.png)  


!!! important "EA vs Gradient"
    - If the problem at hand presents a smooth, convex, continuous landscape then gradient or related methods of optimization will be faster in locating the single optimum point.
    - If the problem has local minima then apply EA
    - If the landscape is discontinuous apply EA

## Combinatorial Optimization
## Mathematical Considerations
## Variation
## Constraint Handling
## Self-Adaption