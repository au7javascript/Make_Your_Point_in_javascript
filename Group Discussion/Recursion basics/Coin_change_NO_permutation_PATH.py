resArr=[]
def coinchange(coin_arr,target_sum):
    if target_sum<0 or len(coin_arr)==0:
        return 0
    if target_sum==0:
        print(resArr,sum(resArr))
        return 1
    if coin_arr[0]==target_sum and len(coin_arr)==1:
        resArr.append(coin_arr[0])
        print(resArr,sum(resArr))
        resArr.pop()
        return 1
    res1= coinchange(coin_arr[1:],target_sum)
    resArr.append(coin_arr[0])
    res2= coinchange(coin_arr,target_sum-coin_arr[0])
    resArr.pop()
    return res1+res2
print(coinchange([5,3,2],10))
print(coinchange([4,5,6],53))
