// 1. 遍历：

// 前序遍历 (Preorder Traversal)：访问根节点 -> 遍历左子树 -> 遍历右子树
// 中序遍历 (Inorder Traversal)：遍历左子树 -> 访问根节点 -> 遍历右子树
// 后序遍历 (Postorder Traversal)：遍历左子树 -> 遍历右子树 -> 访问根节点
// 层次遍历 (Level Order Traversal)：按照从上到下、从左到右的顺序访问每个节点

// 2. 搜索：

// 深度优先搜索 (DFS)：沿着树的深度遍历树的节点，尽可能深地搜索树的分支。
// 广度优先搜索 (BFS)：按照层次顺序从上到下、从左到右地遍历树的节点。

// 3. 插入和删除：

// 对于特定类型的树（如二叉搜索树），需要有特定的插入和删除节点的算法，以保持树的特性。

// 4. 平衡和重构：

// 对于自平衡的树结构（如AVL树、红黑树），在插入或删除节点后，需要进行特定的旋转和重构操作，以保持树的平衡。

// 5. 最小值和最大值查找：

// 在二叉搜索树中，最小值通常在左子树的最左边，最大值通常在右子树的最右边。

// 6. 路径和问题：

// 计算从根节点到叶节点的所有路径，以及路径上的节点值之和。

// 7. 公共祖先查找：

// 查找两个节点的最近公共祖先 (LCA)，即这两个节点在树中的最低公共根节点。

// 8. 树的直径：

// 树的直径是树中任意两个节点间路径长度的最大值。

// 9. 树的序列化与反序列化：

// 将树结构转换成字符串形式（序列化），以及将字符串转换回树结构（反序列化）。

// 10. 树结构的比较：

// 比较两棵树是否相同或是否是彼此的镜像。

// 11. 子树问题：

// 检查一棵树是否是另一棵树的子树。

// 12. 树的高度和深度：

// 计算树的最大深度或高度。

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = value ? new TreeNode(value) : null;
  }

  formatConsoleInOrder() {
    const result = [];
    this.inOrderTraversal(node => result.push(node.value));
    console.log('formated:', result);
  }

  preOrderRecursiveTraversal(predict) {
    const traverse = treeNode => {
      if (treeNode === null) {
        return;
      }
      predict(treeNode);
      traverse(treeNode.left);
      traverse(treeNode.right);
    };
    traverse(this.root);
  }

  inOrderRecursiveTraversal(predict) {
    const traverse = treeNode => {
      if (treeNode === null) {
        return;
      }
      traverse(treeNode.left);
      predict(treeNode);
      traverse(treeNode.right);
    };
    traverse(this.root);
  }

  postOrderRecursiveTraversal(predict) {
    const traverse = treeNode => {
      if (treeNode === null) {
        return;
      }
      traverse(treeNode.left);
      traverse(treeNode.right);
      predict(treeNode);
    };
    traverse(this.root);
  }

  levelOrderTraversal(predict) {
    const queue = [];
    if (this.root) {
      queue.push(this.root);
    }
    while (queue.length > 0) {
      const current = queue.shift();
      predict(current);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  preOrderTraversal(predict) {
    const stack = [];
    let node = null;
    if (this.root) {
      stack.push(this.root);
    }
    while (stack.length > 0) {
      node = stack.pop();
      predict(node);
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
    }
  }

  inOrderTraversal(predict) {
    const stack = [];
    let node = this.root;

    while (node !== null || stack.length > 0) {
      while (node) {
        stack.push(node);
        node = node.left;
      }

      node = stack.pop();
      predict(node);
      node = node.right;
    }
  }

  postOrderTraversal(predict) {
    // let node = null;
    // let stack = this.root ? [this.root] : [];
    // let stack2 = [];

    // while (stack.length > 0) {
    //   node = stack.pop();
    //   stack2.push(node);
    //   if (node.left) {
    //     stack.push(node.left);
    //   }
    //   if (node.right) {
    //     stack.push(node.right);
    //   }
    // }

    // while (stack2.length > 0) {
    //   node = stack2.pop();
    //   predict(node);
    // }

    let node = this.root;
    let stack = [];
    let lastVisitedNode = null;
    let topNode = null;
    while (node || stack.length > 0) {
      if (node) {
        stack.push(node);
        node = node.left;
      } else {
        topNode = stack[stack.length - 1];
        if (topNode.right && topNode.right !== lastVisitedNode) {
          node = topNode.right;
        } else {
          stack.pop();
          predict(topNode);
          lastVisitedNode = topNode;
        }
      }
    }
  }
}

module.exports = {
  TreeNode,
  BinaryTree,
};

// const test = new BinaryTree(4);
// test.root.left = new TreeNode(3);
// test.root.right = new TreeNode(5);
// test.root.left.left = new TreeNode(2);
// test.root.left.right = new TreeNode(6);

// let result;

// result = [];
// test.preOrderRecursiveTraversal(node => result.push(node.value));
// console.log('preOrderRecursive:', result);

// result = [];
// test.preOrderTraversal(node => result.push(node.value));
// console.log('preOrderTraversal:', result);

// result = [];
// test.inOrderRecursiveTraversal(node => result.push(node.value));
// console.log('inOrderRecursive:', result);

// result = [];
// test.inOrderTraversal(node => result.push(node.value));
// console.log('inOrderTraversal:', result);

// result = [];
// test.postOrderRecursiveTraversal(node => result.push(node.value));
// console.log('postOrderRecursive:', result);

// result = [];
// test.postOrderTraversal(node => result.push(node.value));
// console.log('postOrderTraversal:', result);

// result = [];
// test.levelOrderTraversal(node => result.push(node.value));
// console.log('levelOrder:', result);
