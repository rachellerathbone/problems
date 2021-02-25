// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3


// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3


// Follow up: Solve it both recursively and iteratively.

// Recursive Solution (DFS)
const isSymmetric = function(root) {
    return isMirror(root, root)
};

const isMirror = (t1, t2) => {
    if (t1 === null && t2 === null) {
        return true
    }

    if (t1 === null || t2 === null) {
        return false
    }

    return (t1.val === t2.val) && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right)
}

// Iterative Solution (BFS)
const isSymmetric = function(root) {
    let queue = [root, root]

    while (queue.length > 0) {
        let t1 =  queue.shift()
        let t2 =  queue.shift()

        if (t1 === null && t2 === null) {
            continue
        }

        if (t1 === null || t2 === null || t1.val !== t2.val) {
            return false
        }

        queue.push(t1.left, t2.right)
        queue.push(t1.right, t2.left)
    }

    return true
}
