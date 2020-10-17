// Given a binary tree, returns of all its levels in a bottom-up fashion (i.e. last level towards the root). Ex: Given the following tree…

// Tree Class - Do Not Edit
class Tree {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const binaryTreeBottomsUp = (root) => {
  let queue = [];
  let path = [];

  if (root === null) return root;

  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;
    let level = [];

    for (let i = 0; i < size; i++) {
      let node = queue.pop();
      level.push(node.val);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }
    path.push(level);
  }
  return path.reverse();
};

// Ex: Given the following tree…
//         2
//        / \
//       1   2

let tree = new Tree(2);
tree.left = new Tree(1);
tree.right = new Tree(2);

console.log(binaryTreeBottomsUp(tree)); // return [[1, 2], [2]]

// Ex: Given the following tree…
//
//        7
//       / \
//     6    2
//    / \
//   3   3

tree = new Tree(7);
tree.left = new Tree(6);
tree.left.left = new Tree(3);
tree.left.right = new Tree(3);
tree.right = new Tree(2);

console.log(binaryTreeBottomsUp(tree)); // return [[3, 3], [6, 2], [7]]
