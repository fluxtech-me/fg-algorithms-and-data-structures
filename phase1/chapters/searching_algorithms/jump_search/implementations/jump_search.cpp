#include <iostream>
#include <math.h>
#include <algorithm>

using namespace std;

int jump_search(int arr[], int size, int x)
{
    int step = sqrt(size);

    int prev = 0;
    while (arr[min(step, size) - 1] < x)
    {
        prev = step;
        step += sqrt(size);
        if (prev >= size)
        {
            return -1;
        }
    }

    while (arr[prev] < x)
    {
        ++prev;
        if (prev == min(step, size))
        {
            return -1;
        }
    }
    if (arr[prev] == x)
    {
        return prev;
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
    int result = jump_search(arr, size, x);
    result == -1
        ? cout << "Element is not present in array"
        : cout << "Element is present at index " << result;
    return 0;
}