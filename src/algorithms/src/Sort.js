function Swap(arr, i, j) {
    // [arr[j],arr[i]] = [arr[i],arr[j]]
    // 解构交换元素可能效率不高
    const tmp = arr[j]
    arr[j] = arr[i]
    arr[i] = tmp
}

// #region InsertSort
/**
 * 直接插入排序
 * @param {*} arr 
 * @param {*} n 
 */
export function InsertSort(arr = [], n = 0) {
    let tmp, j;
    for (let i = 1; i < n; i++) {
        if (arr[i] < arr[i - 1]) {
            tmp = arr[i]
            j = i
            while (tmp < arr[j - 1]) {
                arr[j] = arr[j - 1]
                j--
            }
            arr[j] = tmp
        }
    }
    return arr
}
// #endregion InsertSort

// #region BinaryInsertSort
/**
 * 折半插入排序
 * @param {*} arr 
 * @param {*} n 
 */
export function BinaryInsertSort(arr = [], n = 0) {
    let tmp, low, high, mid;
    for (let i = 1; i < n; i++) {
        if (arr[i] < arr[i - 1]) {
            tmp = arr[i]
            low = 0
            high = i - 1
            //二分寻找插入位置high+1
            while (low <= high) {
                mid = ~~(low + (high - low) / 2);
                if (arr[mid] > tmp) high = mid - 1
                else low = mid + 1
            }
            for (let j = i; j > high; j--) {
                arr[j] = arr[j - 1]
            }
            arr[high + 1] = tmp
        }
    }
    return arr
}
// #endregion BinaryInsertSort

// #region ShellSort
/**
 * 希尔排序
 * @param {*} arr 
 * @param {*} n 
 */
export function ShellSort(arr = [], n = 0) {
    let gap = ~~(n / 2), j, tmp;
    while (gap >= 1) {//gap为增量序列的步长
        for (let i = gap; i < n; i++) {//i执行排序的每一趟
            if (arr[i] < arr[i - gap]) {
                tmp = arr[i]
                j = i
                while (j >= 0 && tmp < arr[j - gap]) {//寻找当前值arr[i]的插入位置j
                    arr[j] = arr[j - gap]//将子序列的前一个值向后移动
                    j -= gap
                }
                arr[j] = tmp
            }
        }
        gap = ~~(gap / 2)
    }
    return arr;
}
// #endregion ShellSort

// #region BubbleSort
/**
 * 冒泡排序
 * @param {*} arr 
 * @param {*} n 
 */
export function BubbleSort(arr = [], n = 0) {
    let swapFlag;
    for (let i = 0; i < n; i++) {
        swapFlag = false;
        for (let j = 0; j <= n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swapFlag = true;
                Swap(arr, j, j + 1);
            }
        }
        if (!swapFlag) break;//本趟无交换说明已经有序
    }
    return arr;
}
// #endregion BubbleSort


// #region QuickSort
/**
 * 快速排序
 * @param {*} arr 
 * @param {*} n 
 */
export function QuickSort(arr = [], n = 0) {
    const partition = (arr, low, high) => {//一趟划分
        let pivot = arr[low]//基准取第一个元素
        while (low < high) {
            while (low < high && arr[high] >= pivot) high--;
            arr[low] = arr[high]//比pivot小的元素交换到左边
            while (low < high && arr[low] <= pivot) low++;
            arr[high] = arr[low]//比pivot大的元素交换到右边
        }
        arr[low] = pivot
        return low
    }
    const QSort = (arr, low, high) => {
        if (low < high) {
            let pivotIdx = partition(arr, low, high)
            QSort(arr, 0, pivotIdx - 1);
            QSort(arr, pivotIdx + 1, high);
        }
    }
    QSort(arr, 0, n - 1)
    return arr
}
// #endregion QuickSort


// #region SelectionSort
/**
 * 选择排序
 * @param {*} arr 
 * @param {*} n 
 */
export function SelectionSort(arr = [], n = 0) {
    let i, j, min;
    for (i = 0; i < n; i++) {
        min = i
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (min !== i) Swap(arr, i, min);
    }
    return arr
}
// #endregion SelectionSort

