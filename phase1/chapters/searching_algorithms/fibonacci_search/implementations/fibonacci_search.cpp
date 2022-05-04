#include <iostream>
using namespace std;

int min(int x, int y)
{
    return (x <= y) ? x : y;
}

int fibonacci_search(int arr[], int x, int n)
{
    int fbM2 = 0;          // (m-2)'th Fibonacci number
    int fbM1 = 1;          // (m-1)'th Fibonacci number
    int fbM = fbM2 + fbM1; // m'th Fibonacci
    int offset = -1;
    while (fbM < n)
    {
        fbM2 = fbM1;
        fbM1 = fbM;
        fbM = fbM2 + fbM1;
    }
    while (fbM > 1)
    {
        int i = min(offset + fbM2, n - 1);
        if (arr[i] < x)
        {
            fbM = fbM1;
            fbM1 = fbM2;
            fbM2 = fbM - fbM1;
            offset = i;
        }
        else if (arr[i] > x)
        {
            fbM = fbM2;
            fbM1 = fbM1 - fbM2;
            fbM2 = fbM - fbM1;
        }
        else
            return i;
    }
    if (fbM1 && arr[offset + 1] == x)
        return offset + 1;
    return -1;
}

int main()
{
    int n;
    cout << "\nEnter the number of elements in array which should be less than 10";
    cin >> n;
    int arr[10];
    cout << "Enter elements in array";
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    int n = sizeof(arr) / sizeof(arr[0]);
    int x;
    cout << "\nEnter element to be searched :";
    cin >> x;
    cout << "Found at index:" << fibonacci_search(arr, x, n);
    return 0;
}