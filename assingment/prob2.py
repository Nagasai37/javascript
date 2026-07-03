n = int(input())
arr = list(map(int, input().split()))

arr = list(set(arr))   # Remove duplicates

if len(arr) < 2:
    print(-1)
else:
    arr.sort()
    print(arr[-2])