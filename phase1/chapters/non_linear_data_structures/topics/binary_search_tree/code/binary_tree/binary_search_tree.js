const BinaryTree = require('./binary_tree');
const BinaryNode = require('./binary_node');


class BinarySearchTree extends BinaryTree {
    constructor(binaryTree = null) {
        super()

        if (binaryTree !== null) {
            const tmp = [];
            binaryTree.traverseInOrder((node) => { tmp.push(node.key) })

            tmp.sort((a, b) => (a - b))

            let i = 0;
            binaryTree.traverseInOrder((node) => { node.key = tmp[i++] })

            this._root = binaryTree.getRootNode();
        }
    }

    insert(key) {
        if (this._root == null) {
            this._root = new BinaryNode(key);
            ++this._size;
            return;
        }

        this.#insert(key, this._root)
        ++this._size;
    }

    #insert = (key, root) => {
        if (key < root.key) {
            root.left = root.left === null ? (new BinaryNode(key)) : this.#insert(key, root.left);
        } else {
            root.right = root.right === null ? (new BinaryNode(key)) : this.#insert(key, root.right);
        }

        return root;
    }

    searchNode(key) {
        return this.#searchNode(key, this._root)
    }

    #searchNode = (key, root) => {
        if (root === null) {
            return null
        }

        if (root.key === key) {
            return root
        }

        return root.key < key ? this.#searchNode(key, root.left) : this.#searchNode(key, root.right);
    }

    delete(key) {
        this._root = this.#delete(key, this._root)
        --this._size;
    }

    #delete = (key, root) => {
        if (root === null) {
            return null
        }

        if (key < root.key) {
            root.left = this.#delete(key, root.left)
        } else if (key > root.key) {
            root.right = this.#delete(key, root.right)
        } else {
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            root.key = this.#minValue(root.right);

            root.right = this.#delete(root.key, root.right);
        }

        return root
    }

    minValue() {
        return this.#minValue(this._root)
    }

    #minValue = (root) => {
        let min = root.key;
        while (root.left !== null) {
            min = root.left.key;
            root = root.left;
        }

        return min
    }

    maxValue() {
        return this.#maxValue(this._root)
    }

    #maxValue = (root) => {
        let max = root.key;
        while (root.right !== null) {
            max = root.right.key;
            root = root.right;
        }

        return max
    }
}

module.exports = BinarySearchTree