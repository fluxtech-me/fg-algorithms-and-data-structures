#include "iostream"

using namespace std;

void _swap(int *xp, int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

void _printArray(int arr[], int size)
{
    for (int i = 0; i < size; ++i)
        cout << arr[i] << " ";
    cout << endl;
}

void bubbleSort(int arr[], int arr_length)
{
    for (int i = 0; i < arr_length - 1; ++i)
    {
        for (int j = 0; j < arr_length - i - 1; ++j)
        {
            if (arr[j] > arr[j + 1])
            {
                _swap(&arr[j], &arr[j + 1]);
            }
        }
    }
}

int main()
{
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);
    cout << "Sorted array: " << endl;
    _printArray(arr, n);
    return 0;
}
