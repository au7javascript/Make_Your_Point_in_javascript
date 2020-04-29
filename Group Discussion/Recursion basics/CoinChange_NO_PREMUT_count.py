def coinchange(coin_arr,target_sum):
    if target_sum<0 or len(coin_arr)==0:
        return 0
    if target_sum==0:
        return 1
    if coin_arr[0]==target_sum and len(coin_arr)==1:
        return 1
    return coinchange(coin_arr[1:],target_sum) + coinchange(coin_arr,target_sum-coin_arr[0])

print(coinchange([5,3,2],10))
print(coinchange([4,5,6],53))