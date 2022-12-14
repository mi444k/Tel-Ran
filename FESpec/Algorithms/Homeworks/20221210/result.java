/// Part 1 ///

// In general, the time complexity of the given code is O(n^2)
void test1(int n)
 {
    if (n==1) 
       return;
    for (int i=1; i<=n; i++)
        for (int j=1; j<=n; j++)
            System.out.println("*");
            break;
}

// In general, the time complexity of the given code is O(n^2)
void test2(int n)
 {
    if (n==1) 
       return;
    for (int i=1; i<=n; i++)
        for (int j=1; j<=n; j++)
            System.out.println("*");
}

// In general, the time complexity of the given code is O(n^2)
void test3(int n)
{
    int a = 0;
    for (i = 0; i < n; i++)
        for (j = n; j > i; j--)
        a = a + i + j;

}

// In general, the time complexity of the given code is O(n*log(n))
void test4(int n)
{
    int i, j, a = 0;
    for (i = n/2; i <=n; i++)
        for (j = 2; j <=n; j=j*2)
        a=a+n/2;

}


/// Part 2 ///
// Given a sorted array in which all elements occur twice (one after the other) and one element appears only once. Find the element that appears once in a sorted array.

int findElement(arr) {
  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // If the current element is not the same as the next element,
    // it means it appears only once
    if (arr[i] !== arr[i + 1]) {
      return arr[i];
    }
    // Skip the next element because it is a duplicate
    i++;
  }
}



/// Part 3 with * ///

// The best case for the given code is when i is already less than or equal to 0, in which case the code runs in constant time, which is considered O(1).
// The worst case for the given code is when i is equal to n, in which case the code runs in O(log n) time, as the value of i is halved on each iteration of the while loop.
// In general, the time complexity of the given code is O(log n) in the worst case.
void test5(int n)
 {
    int a = 0, i = n;
    while (i > 0) {
        a += i;
        i /= 2;
}
}

// The best case for the given code is when a and b are equal, in which case the code runs in constant time, which is considered O(1).
// The worst case for the given code is when a and b are not equal, in which case the code will run until a and b are equal, which can take up to O(a + b) time. However, in practice, the time complexity of the code is likely to be closer to O(log(a + b)) because the values of a and b are reduced by at least half on each iteration of the while loop.
// In general, the time complexity of the given code is O(log(a + b)) in the worst case.
void method(int a, int b) {
        while (a != b) {
            if (a > b) {
                a = a - b;
            } else {
                b = b - a;
            }
        }
    }

// The best case for the given code is when n is 1, in which case the code runs in constant time, which is considered O(1).
// The worst case for the given code is when n is greater than 1, in which case the code runs in O(n^2 * log n) time, as the innermost for loop will run log n times for each pair of values of i and j.
// In general, the time complexity of the given code is O(n^2 * log n) in the worst case.
void method2(int n) {
        for (int i = 0; i < n / 2; i++) {
            for (int j = 1; j + n / 2 <= n; j++) {
                for (int k = 1; k <= n; k = k * 2) {
                    System.out.println("I am expert!");
                }
            }
        }
    }

// The best case for the given code is when n is 1, in which case the code runs in constant time, which is considered O(1).
// The worst case for the given code is when n is greater than 1, in which case the code runs in O(n^2) time, as the innermost for loop will run n / i times for each value of i.
// In general, the time complexity of the given code is O(n^2) in the worst case.
void method3(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j = j + i) {
                System.out.println("I am expert!");
            }
        }
    }
