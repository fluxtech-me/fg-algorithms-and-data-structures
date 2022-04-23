#include <iostream>
using namespace std;

int linear_search(int arr[], int n, int x)
{
    for (int i = 0; i < n; i++)
    {
        if (arr[i] == x)
        {
            return i;
        }
    }
    return -1;
}

int main()
{
    const int size = 7;
    int arr[size];
    for (int i = 0; i < size; i++)
    {
        arr[i] = rand() % 100;
    }
    cout << "Generated array: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
    int x = 21;
    int result = linear_search(arr, size, x);
    result == -1
        ? cout << "Element is not present in array"
        : cout << "Element is present at index " << result;
    return 0;
}