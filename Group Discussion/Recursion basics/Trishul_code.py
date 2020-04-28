inp_arr=[   [' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ','8','8',' ',' '],
            [' ',' ',' ','8',' ',' ',' '],
            ['8','8','8','8','8','8',' '],
            [' ',' ',' ','8',' ',' ',' '],
            [' ',' ',' ','8','8',' ',' '],
            [' ',' ',' ',' ',' ',' ',' '],
        ]
# from collections import defaultdict
visited_set=set()
# visited_dict[2][3]=True
# a=visited_dict[5][6]

def eight_traverse(inp_arr,i,j):#i=4 j=3
    # print("Birth rank",i,j)
    visited_set.add((i,j))
    # print(visited_set)
    if inp_arr[i][j+1] is not ' ':
        if (i,j+1,) not in visited_set:
            # visited_set.add((i, j+1))
            eight_traverse(inp_arr,i,j+1) ;
    if inp_arr[i+1][j] is not ' ':
        if (i+1, j,) not in visited_set:
            # visited_set.add((i+1, j))
            eight_traverse(inp_arr,i+1,j);
    if inp_arr[i-1][j] is not ' ':
        if (i-1, j,) not in visited_set:
            eight_traverse(inp_arr,i-1,j);
    print("DEATH Wise",i,j)
eight_traverse(inp_arr,3,0)

