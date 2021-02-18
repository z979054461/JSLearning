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