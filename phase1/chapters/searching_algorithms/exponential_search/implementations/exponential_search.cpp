#include <iostream>
#include <math.h>
using namespace std;

int binarySearch(int arr[], int, int, int);
int exponential_search(int arr[], int n, int x)
{
    if (arr[0] == x)
    {
        return 0;
    }
    int i = 1;
    while (i < n && arr[i] <= x)
    {
        i = i * 2;
    }

    return binarySearch(arr, i / 2, min(i, n - 1), x);
}

int binarySearch(int arr[], int l, int r, int x)
{
    if (r >= l)
    {
        int mid = l + (r - l) / 2;

        if (arr[mid] == x)
        {
            return mid;
        }
        if (arr[mid] > x)
        {
            return binarySearch(arr, l, mid - 1, x);
        }

        return binarySearch(arr, mid + 1, r, x);
    }

    return -1;
}

int main()
{
    const int size = 17;
    int arr[size] = {15, 21, 26, 27, 35, 40, 49, 59, 62, 63, 77, 83, 86, 89, 90, 92, 93};
    cout << "Generated array: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
    int x = 21;
    int result = exponential_search(arr, size, x);
    (result == -1)
        ? cout << "Element is not present in array"
        : cout << "Element is present at index " << result;
    return 0;
}