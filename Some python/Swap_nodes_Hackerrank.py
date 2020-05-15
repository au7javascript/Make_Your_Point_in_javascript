#Question-https://www.hackerrank.com/contests/robin-apl-dsa-2/challenges/swap-nodes-algo/problem
import sys
sys.setrecursionlimit(20000)
def swapNodes(indexes, queries):
    ans=[]
    indexes.insert(0,None)  #inserting None in beginning to make child access with
                            #indexes[parent] instead of indexes[parent-1].
                            #indexes[parent][0]:left child of parent
                            #indexes[parent][1]:right child pf parent
    for k in queries:
        ansArr=[]
        inorder(1,indexes,1,k,ansArr)
        ans.append(ansArr)
    return ans

def inorder(root,indexes,dep,k,ansArr):#dep:depth
    if len(indexes)<=root:
        return
    if dep%k==0:
        indexes[root][0],indexes[root][1]=indexes[root][1],indexes[root][0]
    if indexes[root][0] is not -1:
        inorder(indexes[root][0],indexes,dep+1,k,ansArr)
    ansArr.append(root)
    if indexes[root][1] is not -1:
        inorder(indexes[root][1],indexes,dep+1,k,ansArr)

#sample input 0
print(swapNodes([[2,3],[-1,-1],[-1,-1]],[1,1]))
#Output [[3, 1, 2], [2, 1, 3]]

#sample input 1
print(swapNodes([[2,3],[-1,4],[-1,5],[-1,-1],[-1,-1]],[2]))
#Output [[4, 2, 1, 5, 3]]

#sample input 2
print(swapNodes([[2,3],[4,-1],[5,-1],[6,-1],[7,8],[-1,9],[-1,-1],[10,11],[-1,-1],[-1,-1],[-1,-1]],[2,4]))
#Output [[2, 9, 6, 4, 1, 3, 7, 5, 11, 8, 10], [2, 6, 9, 4, 1, 3, 7, 5, 10, 8, 11]]
