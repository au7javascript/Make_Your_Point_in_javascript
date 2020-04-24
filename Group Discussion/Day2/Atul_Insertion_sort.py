#https://www.hackerrank.com/challenges/insertionsort1/problem
#So, In this question we are given a sorted array and a number at the end of it
#arr[-1] ie the last number needs to be put at right position
#all the numbers in sorted array, which are greater than last number needs to be sifted to
#right. And we have to show the steps by printin array, after each shifting and finally print sorted array

"""
Input
5
2 4 6 8 3

Sample Output
2 4 6 8 8
2 4 6 6 8
2 4 4 6 8
2 3 4 6 8
"""

def insertionSort1(n, arr):
    key=arr[-1]
    j=len(arr)-2
    while(j>=0 and arr[j]>key):
        arr[j+1]=arr[j]
        j-=1
        print(*arr)
    arr[j+1]=key
    print(*arr)
insertionSort1(5,[2 ,4 ,6 ,8 ,3,])

#https://www.hackerrank.com/challenges/correctness-invariant/problem
#Make correction
def insertion_sort(l):
    for i in range(1, len(l)):
        j = i-1
        key = l[i]
        while (j >= 0) and (l[j] > key): #instead of j>0 it will be j>=0
           l[j+1] = l[j]
           j -= 1
        l[j+1] = key

#https://www.hackerrank.com/challenges/runningtime/problem
#In this problem we have to add total no. of shiftin
#Like in insertionsort1() we are shifting numbers to insert last number
#So, we have to count all the sifting for putting all the number in right place.
#Point to note is that no. of shift in one cycle is the difference of
#where the index of key(ie. no needed to put in right place) to it's index in sorted part of array
def runningTime(l):
    shift=0
    for i in range(1, len(l)):
        j = i-1
        key = l[i]   #key was initially at index i
        while (j >= 0) and (l[j] > key):
           l[j+1]= l[j]
           j -= 1
        l[j + 1] = key #key's final index is j+1
        if l[j+1] is not key:
            shift+=i-j-1  #No of shift in this cycle is difference of initial index and final index.

    return shift