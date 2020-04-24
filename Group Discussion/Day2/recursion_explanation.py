"""
Before trying to solve a problem with recursion,
or while trying to figure out recursive solution, we don't leverage the fact that
"We can assume that all sub-problem are already solvable. Even before we get the solution"
For discussion let's assume that function name is "recursive_fncn(actual_parameter_representing_whole_problem)"
In other words, we never need to discuss or think
"What will happen if we call "recursive_fncn(subset_of_actual_problem)". The only goal is that whether
"recursive_fncn(actual_parameter...)" will give right output or not.
If it's gives the right output after using the assumed result of any no of "recursive_fncn(subset_of_ac...)", then
We found the solution.
"""

#Trying to search using recursion
def search(arr,num):
    if len(arr)==0:
        return False
    if num==arr[0]:
        return True
    #We have already searched first element of arr
    return search(arr[1:],num)
    #We assumed search(arr[1:],num) will give right result
print(search([1,4,2,5],2))
print(search([2,45,54,23],4))

#Now we will apply this logic on real question
#Question Combination Sum - Part 2
#Link https://practice.geeksforgeeks.org/problems/combination-sum-part-2/0

#So here goal is to write a function combinations(arr, num) which would return sequence of all pairs which summ up to num.
#So, while planning I am free to assume or take for granted that I know the result of combinations(arr[1:],num) since it is
#subset of original input(arr,num). Like wise I also know the result of combinations(arr,num-any_integer). I don't have to worry
# or delve into how these are going to be evaluated.
#Since I know all the subproblem I will try to calculate combinations(arr,num) using result of sub problems.

#Nearest result available for solving "combinations(arr,num)" is result of combination(arr[1:],num)
#(01) So, we need to add few things to the result of combination(arr[1:],num) to make it result of combination(arr,num), which we will
#return and hence problem solved.

#So, how the result of combination(arr[1:],num) will be affected if we try to add arr[0] in the begging of arr[1:]  to
#obtain the result of combination(arr,num)?
#(02)First if arr[0] itself equals to num then "(arr[0],)" will be added.
#Now all the pairs in arr[1:] which sum up to num-arr[0] will be also added in result(03). Notice we are safely assuming
#that we can just have the result of combination(arr[1:],num-arr[0]) as it's also a sub problem.
#(04)In all the results obtained in point(03) arr[0] needs to be added, as pairs were originally summing up to num-arr[0]
#Anything more?
#No, can now proceed to write code

#This code is not actual solution but you'll get unsorted answer with some repettion.
# You can skip to next final solution.
def combinations(arr, num):
    if len(arr)==0 or num<=0:
        return []
    ans=[]
    if arr[0]==num:
        ans.append([arr[0]])#(02)First if arr[0] itself equals to num then "(arr[0],)" will be added.
    # Now all the pairs in arr[1:] which sum up to num-arr[0] will be also added in result(03)
    ans1=combinations(arr[1:],num-arr[0])
    #Add a[0] in all the pair
    # (04)In all the results obtained in point(03), arr[0] needs to be added, as pairs were originally summing up to num-arr[0]
    for x in ans1:
        x.append(arr[0])
    ans.extend(ans1)
    # (01) So, we need to add few things to the result of combination(arr[1:],num)
    ans.extend(combinations(arr[1:],num)) #Reffer point(01). You can do this in begining also.
    return ans

print("Almost solution" ,combinations([10,1,2,7,6,1,5],8))


#In order to remove duplicates we can sort them and use set to take care of duplication.
#Set supports immutable objects only so instead of inner list we will have to use tuple
#Final Solution
def combinations(arr, num):
    if len(arr)==0 or num<=0:
        return set()
    # Now all the pairs in arr[1:] which sum up to num-arr[0] will be also added in result(03)
    ans=combinations(arr[1:],num-arr[0])

    #Add a[0] in all the tuple pairs in ans
    #(04)In all the results obtained in point(03), arr[0] needs to be added, as pairs were originally summing up to num-arr[0]
    temp=set()
    for x in ans:
        temp.add(tuple(sorted(x+(arr[0],))))  #Reffer point (04)
    ans=temp
    if arr[0] == num: #(02)First if arr[0] itself equals to num then "(arr[0],)" will be added.
        ans.add((arr[0],))
    # (01) So, we need to add few things to the result of combination(arr[1:],num)
    ans=ans.union(combinations(arr[1:],num))
    return ans

ans=combinations([10,1,2,7,6,1,5],8)
ans=sorted(ans)
# print(*ans)
for x in ans:
    print("(",end="")
    print(*x,end="")
    print(")", end="")
print()