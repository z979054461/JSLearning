
/**
 * 处于n/2的上界的数为有序序列L的中位数
 * 求等长有序序列L1和L2合并后的中位数
 * @param {Array} L1 
 * @param {Array} L2 
 */
export function median(L1,L2){
    const length= L1.length;
    let i = 0,j=0;
    let tmpIDX = 0,tmpValue;
    while(i<length || j<length){

        if(i === length){
            tmpIDX = j++
            tmpValue = L2[tmpIDX]
        }else if(j === length){
            tmpIDX = i++
            tmpValue = L1[tmpIDX]
        }else{
            tmpIDX = L1[i] <= L2[j]?i++:j++
            tmpValue = Math.min(L1[i],L2[j])
        }
        if(tmpIDX === length -1){
            return tmpValue
        }
    }
}