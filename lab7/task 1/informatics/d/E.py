n = int(input())

list = input().split()


res = 0
for i in range(1,n):
    if(int(list[i]) * int(list[i - 1]) > 0):
        res += 1

if(res > 0):
    print("YES")
else:
    print("NO")