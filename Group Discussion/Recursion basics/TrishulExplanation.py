
#Ignore above lines
#[DEAD rank 12] eight_traverse(arr,3,0)#checks 1st if-> true ->calls fn(3,1) 2nd and 3rd if is false returning dead
#[DEAD rank 11] eight_traverse(arr,3,1)#checks 1st if-> true ->calls fn(3,2) 2nd and 3rd if is false returning dead
#[DEAD rank 10] eight_traverse(arr,3,2)#checks 1st if-> true ->calls fn(3,3) 2nd and 3rd if is false returning dead
#[DEAD rank 9] eight_traverse(arr,3,3)#checks 1st if-> true ->calls fn(3,4) check 2nd if-> true calls fn(4,3) 3rd if is true call() return DEAD
#[DEAD rank 2]eight_traverse(arr,3,4)#checks 1st if-> true ->calls fn(3,5) checks 2nd if-> false checks 3rd if-> false returnDEAD
#[DEAD rank 1]eight_traverse(arr,3,5)#checks 1st if-> false -> checks 2nd if-> false checks 3rd if-> false DEAD
#[DEAD rank 5] eight_traverse(arr,4,3)# 1st if is false checks 2nd if true calls fn(5,3) 3rd if visited DEAD
#[DEAD rank 4]eight_traverse(arr,5,3)# 1st if is true calls fn(5,4), 2nd if false  3rd if false as visited
#[DEAD rank 3]eight_traverse(arr,5,4)# all if failed returns DEAD
#[DEAD rank 8] eight_traverse(arr,2,3)#1st if is false 2nd if false 3rd if true calls fn(1,3) 3ed if visited false return DEAD
#[DEAD rank 7] eight_traverse(arr,1,3)#1st if true calls fn(1,4) 2nd if false 3rd if is visited false DEAD
#[DEAD rank 6] eight_traverse(arr,1,4)#1st 2nd 3rd if are false returning DEAD
