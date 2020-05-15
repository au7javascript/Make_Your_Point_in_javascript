# Priyesh way
def coinchange(target_sum, coin1, coin2, coin3):
    if target_sum < 0:
        return 0
    if target_sum == 0:
        return 1
    first = coinchange(target_sum - coin1, coin1, coin2, coin3)
    second = coinchange(target_sum - coin2, coin1, coin2, coin3)
    third = coinchange(target_sum - coin3, coin1, coin2, coin3)
    return first + second + third


coinchange(10, 5, 3, 2)

# TO PRINT COMBINATIONS ONLY
coin_combinations = set()
cur_list = []


def coinchange(target_sum, coin1, coin2, coin3):
    if target_sum < 0:
        return 0
    if target_sum == 0:
        coin_combinations.add(tuple(sorted(cur_list)))
        return 1

    cur_list.append(coin1)
    first = coinchange(target_sum - coin1, coin1, coin2, coin3)
    cur_list.pop()

    cur_list.append(coin2)
    second = coinchange(target_sum - coin2, coin1, coin2, coin3)
    cur_list.pop()

    cur_list.append(coin3)
    third = coinchange(target_sum - coin3, coin1, coin2, coin3)
    cur_list.pop()


coinchange(10, 5, 3, 2)
print(coin_combinations)
