const { BinaryTree, BinarySearchTree } = require("./binary_tree")


function binary_tree_demo() {
    const tree = new BinaryTree();

    tree.insert(2)
    tree.insert(1)
    tree.insert(5)
    tree.insert(3)
    tree.insert(10)

    const printNode = (node) => process.stdout.write(`${node.key} `)

    tree.traverseLevelOrder(printNode)
    console.log("\n")

    tree.traverseInOrder(printNode)
    console.log("\n")

    tree.traversePreOrder(printNode)
    console.log("\n")

    tree.traversePostOrder(printNode)
    console.log("\n")


    tree.print()
}


function binary_search_tree_demo() {
    const tree = new BinarySearchTree();

    tree.insert(2)
    tree.insert(1)
    tree.insert(5)
    tree.insert(3)
    tree.insert(10)
    
    tree.print()
    console.log()


    console.log('Searching 4 in the tree....')
    console.log(tree.search(4))
    console.log()


    console.log('Searching 10 in the tree....')
    console.log(tree.search(10))
    console.log()

    tree.delete(5);
    tree.print()
    console.log()

}


function binary_tree_to_BST_demo() {
    const binary_tree = new BinaryTree();

    binary_tree.insert(2)
    binary_tree.insert(1)
    binary_tree.insert(5)
    binary_tree.insert(3)
    binary_tree.insert(10)

    binary_tree.print()

    console.log('\n\n ----------- \n\n')

    const binary_search_tree = new BinarySearchTree(binary_tree);
    binary_search_tree.print()

    console.log()
}

binary_tree_demo()
binary_search_tree_demo()
// binary_tree_to_BST_demo()