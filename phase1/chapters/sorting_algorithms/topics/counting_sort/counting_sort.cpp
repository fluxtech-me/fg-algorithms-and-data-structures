#include <iostream>
#include <time.h>

using namespace std;

void findMinMax(int *arr, int len, int &min, int &max)
{
    min = arr[0];
    max = arr[0];
    for (int i = 0; i < len; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
        if (arr[i] < min)
        {
            min = arr[i];
        }
    }
}

void counting_sort(int *arr, int len)
{
    int min, max, z = 0;
    findMinMax(arr, len, min, max);
    int range = (max - min) + 1;
    int *count = new int[range];
    for (int i = 0; i < range; i++)
    {
        count[i] = 0;
    }

    for (int i = 0; i < len; i++)
        count[arr[i] - min]++;

    for (int i = min; i <= max; i++)
    {
        while (count[i - min])
        {
            arr[z++] = i;
            count[i - min]--;
        }
    }

    delete[] count;
}

int main(int argc, char *argv[])
{
    int MAX = 10;
    srand(time(NULL));
    int arr[MAX];
    for (int i = 0; i < MAX; i++)
        arr[i] = rand() % 140 - rand() % 40 + 1;

    for (int i = 0; i < MAX; i++)
        cout << arr[i] << " ";
    cout << endl
         << endl;

    counting_sort(arr, MAX);

    for (int i = 0; i < MAX; i++)
        cout << arr[i] << " ";
    cout << endl
         << endl;

    return 0;
}
