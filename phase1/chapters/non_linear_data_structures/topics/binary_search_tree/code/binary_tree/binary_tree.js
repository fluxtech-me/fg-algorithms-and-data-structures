const BinaryNode = require('./binary_node');
const { Queue } = require("./utils");


class BinaryTree {
    constructor() {
        this._root = null;
        this._size = 0;
    }

    getRootNode() {
        return this._root;
    }

    insert(key) {
        // find random place and add a node

        const new_node = new BinaryNode(key);

        if (this._root === null) {
            this._root = new_node;
        } else {
            let tmp = this._root;
            while (true) {
                const randomBoolean = (Math.random() > 0.5)

                if (randomBoolean) {
                    if (tmp.left === null) {
                        tmp.left = new_node;
                        break;
                    } else {
                        tmp = tmp.left;
                    }
                } else {
                    if (tmp.right === null) {
                        tmp.right = new_node;
                        break;
                    } else {
                        tmp = tmp.right;
                    }
                }
            }
        }

        ++this._size;
    }

    delete(key) {
        throw new Error('Method not implemented.')
    }

    search(key) {
        return this.#search(key, this._root)
    }

    #search = (key, root) => {
        if (root === null) {
            return null
        }

        if (root.key === key) {
            return root
        }

        return this.#search(key, root.left) || this.#search(key, root.right)
    }


    traverseLevelOrder(f) {
        // traverse and apply function f on each node
        const queue = new Queue();
        let tmp = this._root;

        while (tmp !== null || !queue.isEmpty()) {
            if (tmp === null) {
                tmp = queue.dequeue();
                continue
            }

            f(tmp);
            queue.enqueue(tmp.left);
            queue.enqueue(tmp.right);

            tmp = queue.dequeue();
        }
    }

    traverseInOrder(f) {
        // traverse and apply function f on each node
        this.#traverseInOrder(f, this._root)
    }

    #traverseInOrder = (f, root) => {
        // traverse and apply function f on each node
        if (root === null) {
            return
        }

        this.#traverseInOrder(f, root.left)
        f(root)
        this.#traverseInOrder(f, root.right)
    }

    traversePreOrder(f) {
        // traverse and apply function f on each node
        this.#traversePreOrder(f, this._root)
    }

    #traversePreOrder = (f, root) => {
        // traverse and apply function f on each node
        if (root === null) {
            return
        }

        f(root)
        this.#traversePreOrder(f, root.left)
        this.#traversePreOrder(f, root.right)
    }

    traversePostOrder(f) {
        // traverse and apply function f on each node
        this.#traversePostOrder(f, this._root)
    }


    #traversePostOrder = (f, root) => {
        // traverse and apply function f on each node
        if (root === null) {
            return
        }

        this.#traversePostOrder(f, root.left)
        this.#traversePostOrder(f, root.right)
        f(root)
    }

    print() {
        this.#print(this._root, 0)
    }

    #print = (root, nodeDist) => {
        if (root === null) {
            return;
        }

        nodeDist += 5;

        this.#print(root.right, nodeDist)
        process.stdout.write(`\n`)

        for (let i = 5; i < nodeDist; ++i) {
            process.stdout.write(' ')
        }

        process.stdout.write(`${root.key}\n`)
        this.#print(root.left, nodeDist)
    }
}

module.exports = BinaryTree