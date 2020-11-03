
/**
 * Definition for a binary tree node.
 * @param {*} val 
 * @param {*} left 
 * @param {*} right 
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

class BiTree {
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
        return root
    }
}
/**
 * 先序遍历 递归
 * @param {BiTree} T 
 * @param {Function} visit 
 */
function PreOrder(T, visit = x => console.log(x.val)) {
    if (T !== null) {
        visit(T)
        PreOrder(T.left, visit)
        PreOrder(T.right, visit)
    }
}

/**
 * 中序遍历 递归
 * @param {BiTree} T 
 * @param {Function} visit 
 */
function InOrder(T, visit = x => console.log(x.val)) {
    if (T !== null) {
        InOrder(T.left, visit)
        visit(T)
        InOrder(T.right, visit)
    }
}

/**
 * 后序遍历 递归
 * @param {BiTree} T 
 * @param {Function} visit 
 */
function PostOrder(T, visit = x => console.log(x.val)) {
    if (T !== null) {
        PostOrder(T.left, visit)
        PostOrder(T.right, visit)
        visit(T)
    }
}

/**
 * 先序遍历 非递归
 * @param {BiTree} T 
 * @param {Function} visit 
 */
function PreOrder2(T, visit = x => console.log(x.val)) {
    const stack = [];
    // T && stack.push(T);
    // let p;
    // while (stack.length) {
    //     p = stack.pop();
    //     visit(p);
    //     p.right && stack.push(p.right);
    //     p.left && stack.push(p.left);
    // }
    let p = T;
    while (stack.length || p) {
        if (p) {
            visit(p);
            stack.push(p)
            p = p.left
        } else {
            p = stack.pop();
            p = p.right;
        }
    }
}
/**
 * 中序遍历 非递归
 * @param {BiTree} T 
 * @param {Function} visit 
 */
function InOrder2(T, visit = x => console.log(x.val)) {
    const stack = [];
    let p = T;
    while (stack.length || p) {
        if (p) {
            stack.push(p)
            p = p.left;
        } else {
            p = stack.pop();
            visit(p);//和先序遍历就这一句不同
            p = p.right;
        }
    }
}
/**
 * 后序遍历 非递归
 * @param {BiTree} T 
 * @param {Function} visit 
 */
function PostOrder2(T, visit = x => console.log(x.val)) {
    const stack = [];
    let p = T, pre = null;
    while (stack.length || p) {
        if (p) {
            stack.push(p)
            p = p.left;
        } else {
            p = stack.pop();
            if (!p.right || p.right === pre) {//没有右子树或刚访问过右子树
                visit(p);
                pre = p
                p = null;
            } else {//有右子树并且没有访问
                stack.push(p);
                stack.push(p.right);//右子树入栈
                p = p.right.left;//转向右子树的左子树
            }
        }
    }
}
/**
 * 层次遍历
 * @param {BiTree} T 
 * @param {Function} visit 
 */
function LevelOrder(T, visit = x => console.log(x.val)) {
    if (T !== null) {
        const queue = [];
        queue.push(T);
        let p;
        while (queue.length) {
            p = queue.shift();
            visit(p);
            p.left && queue.push(p.left);
            p.right && queue.push(p.right);
        }
    }
}
// let biTree = new BiTree(1, 2, 3, null, 4, null, 5, 6);
// const collection = [];
// const fn = x => collection.push(x.val)
// InOrder2(biTree, fn);

/**
 * 前序、中序 创建二叉树
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const IndexInorder = {};//字符在中序序列中的下标
    inorder.forEach((val, idx) => IndexInorder[val] = idx);
    const n = preorder.length;
    const fn = (preLeft, preRight, inLeft, inRight) => {
        if (preLeft > preRight) return null;
        const p = new TreeNode(preorder[preLeft]),//创建根节点
            indexRoot = IndexInorder[preorder[preLeft]],//根节点位置
            leftSubTreeSize = indexRoot - inLeft;//左子树长度
        p.left = fn(preLeft + 1, preLeft + leftSubTreeSize, inLeft, indexRoot - 1);
        p.right = fn(preLeft + leftSubTreeSize + 1, preRight, indexRoot + 1, inRight);
        return p
    }

    return fn(0, n - 1, 0, n - 1);
};

export {
    BiTree, PreOrder, InOrder, PostOrder, PreOrder2, InOrder2, PostOrder2, LevelOrder
}