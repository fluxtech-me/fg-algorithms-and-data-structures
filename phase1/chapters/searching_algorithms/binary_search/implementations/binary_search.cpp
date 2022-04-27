#include <iostream>

using namespace std;

int iterative_binary_search(int arr[], int l, int r, int x)
{
    while (l <= r)
    {
        int m = l + (r - l) / 2;

        if (arr[m] == x)
        {
            return m;
        }

        if (arr[m] < x)
        {
            l = m + 1;
        }

        else
        {
            r = m - 1;
        }
    }
    return -1;
}

int recursive_binary_search(int arr[], int l, int r, int x)
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
            return recursive_binary_search(arr, l, mid - 1, x);
        }

        return recursive_binary_search(arr, mid + 1, r, x);
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
    int result = iterative_binary_search(arr, 0, size - 1, x);
    (result == -1)
        ? cout << "Element is not present in array"
        : cout << "Element is present at index " << result;
    return 0;
}