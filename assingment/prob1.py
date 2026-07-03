def isPrime(num):
    if num < 2:
        return False
    i = 2
    while i * i <= num:
        if num % i == 0:
            return False
        i += 1
    return True

n = int(input())
arr = list(map(int, input().split()))

count = 0

for i in range(n):
    for j in range(i + 1, n):
        if isPrime(arr[i] + arr[j]):
            count += 1

print(count)