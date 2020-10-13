// Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.

// Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

// O(n) time | O(n) space
const invertBinaryTree = (tree) => {
  // Initialize a queue to store tree nodes
  let queue = [];
  // Return null if input tree is null
  if (tree === null) return null;

  // Push root node into queue
  queue.push(tree);
  // Loop while queue has nodes
  while (queue.length > 0) {
    // Grab node off the queue
    let treeNode = queue.pop();
    // Swap children nodes if node is not null
    if (treeNode !== null) {
      swapChildren(treeNode);
    } else {
      // Node is null, continue to next node in queue
      continue;
    }
    // Add swapped children to the queue
    queue.unshift(treeNode.left);
    queue.unshift(treeNode.right);
  }

  return tree;
};

// Swaps left and right node children
const swapChildren = (node) => {
  const left = node.left;
  node.left = node.right;
  node.right = left;
};

// This is the class of the input binary tree.
class Tree {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// Tree Construction
const tree = new Tree(4);
tree.left = new Tree(2);
tree.right = new Tree(6);
tree.left.left = new Tree(1);
tree.left.right = new Tree(3);
tree.left.left.left = new Tree(5);
tree.left.left.right = new Tree(7);

console.log("original:", tree);
console.log("\ninverted:", invertBinaryTree(tree));
