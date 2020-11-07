class UFSets{
    constructor(size = 0){
        this.size = size
        this.data  = []
        this.Initial(this.data)
    }

    /**
     * 并查集的初始化
     * @param {Array of int} S 
     */
    Initial(S){
        for(let i=0;i<S.length;i++)
            S[i] = -1;//1表示集合中有一个节点
    }

    /**
     * Find操作，并查集S中查找并返回包含元素x的数的跟
     * @param {Array of int} S 
     * @param {int} x 
     * @returns {int} 
     */
    Find(S,x){
        while(S[x] >= 0){
            x = S[x]
        }
        return x
    }

    /**
     * 求两个不想交子集和的并集
     * @param {Array of int} S 
     * @param {int} root1 
     * @param {int} root2 
     */
    Union(S,root1,root2){
        S[root1] -= 1;//更新根节点值（节点个数）
        S[root2] = root1;
    }
}