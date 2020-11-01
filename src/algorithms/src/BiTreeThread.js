
/**
 * Definition for a binary thread tree node.
 * @param {*} val 
 * @param {*} left 
 * @param {*} right 
 */
class TreeNode {
    constructor(val, left, right, ltag, rtag) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
        this.ltag = (ltag === undefined ? 0 : ltag)
        this.rtag = (rtag === undefined ? 0 : rtag)
    }
}

class BiTreeThread {
    /**
     * 由完全二叉树序列构建二叉树结构
     * @param  {...any} args 
     */
    constructor(...args) {
        if (!args.length) return null
        const queue = [];
        const root = new TreeNode(args.shift());
        queue.push(root)
        while (args.length) {
            let p = queue.shift()
            const left = args.shift(), right = args.shift();
            p.left = left ? new TreeNode(left) : null;
            p.right = right ? new TreeNode(right) : null;
            p.left && queue.push(p.left)
            p.right && queue.push(p.right)
        }
        InThread(root, prev)
        let prev = new TreeNode();
        prev.rtag = 1
        prev.right = null
        return root
    }

    /**
     * 中序线索化二叉树
     * @param {TreeNode} p 
     * @param {TreeNode} prev
     */
    //TODO: implement this
    InThread(p = null, prev = null) {
        if (p) {
            InThread(p.left, prev)
            if (p.left === null) {
                p.ltag = 1
                p.left = prev
            }
            if (prev && prev.right === null) {
                prev.rtag = 1
                prev.right = p
            }
            prev = p
            Inthread(p.right, prev)
        }
    }

}

/**
 * 中序线索二叉树 第一个节点
 * @param {TreeNode} p 
 */
function FirstNode(p) {

}

/**
 * 中序线索二叉树 后继节点
 * @param {TreeNode} p 
 */
function NextNode(p) {

}

/**
 * 中序线索二叉树 中序遍历
 * @param {TreeNode} p 
 * @param {Function} visit 
 */
function InOrder(p, visit = x => console.log(x.val)) {

}