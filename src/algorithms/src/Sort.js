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
    let swapFlag, tmp;
    for (let i = 0; i < n; i++) {
        swapFlag = false;
        for (let j = 0; j <= n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swapFlag = true;
                // [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                // 解构交换元素可能效率不高
                tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
        if (!swapFlag) break;//本趟无交换说明已经有序
    }
    return arr;
}
// #endregion BubbleSort
