'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		var newNode = new Node(data, null, null);

		if(this.root == null) {
			this.root = newNode;
			return;
		} else {
			var parentNode = this.root;

			while(true) {
				if(newNode.data > parentNode.data) {
					if(parentNode.right == null) {
						parentNode.right = newNode;
						return;
					} else {
						parentNode = parentNode.right;
					}
				} else {
					if(newNode.data < parentNode.data) {
						if(parentNode.left == null) {
							parentNode.left = newNode;
							return;
						} else {
							parentNode = parentNode.left;
						}
					}
				}
			}
		}
	}

	contains(data) {
		var currentNode = this.root;

		if(this.root == null) {
			return false;
		}

		while(currentNode != null) {
				if(data == currentNode.data) {
					return true;
				}
				currentNode = (data > currentNode.data) ? currentNode.right : currentNode.left;
		}

		return false;
	}

	remove(data) {
		var currentNode = this.root;
		var parent  = null;
	 	var child = null;

	    while(currentNode != null && currentNode.data != data) {
	        parent = currentNode;
	        currentNode = (data < currentNode.data) ? currentNode.left : currentNode.right;
	    }
	 
	    if(currentNode == null) {
	    	return;
	    } else {	 
	       	if(currentNode.left == null || currentNode.right == null) {   
	            if(currentNode.left != null) { 
	                child = currentNode.left;
	            } else {
	            	if(currentNode.right != null) {
	             		child = currentNode.right;
	            	}
	            }

	            if(parent == null) {
	                this.root = child;
	            } else {
	                if(parent.left == currentNode){
	                    parent.left = child;
	                } else {
	                    parent.right = child;
	                }
	            }
	        } else {
	            var mostLeft = currentNode.right;
	            var mostLeftParent = currentNode;
	            
	            while(mostLeft.left != null) {
	                mostLeftParent = mostLeft;
	                mostLeft = mostLeft.left;
	            }
	 
	            currentNode.data = mostLeft.data;
	 
	            if(mostLeftParent.left == mostLeft) {
	                mostLeftParent.left = null;
	            } else {
	                mostLeftParent.right = null;
	            }
	        }
	    }
	}

	size() {
		function count(node) {
			if(node == null)
			    return 0;
			return count(node.right) + count(node.left) + 1;
		}	

		return count(this.root);
	}

	isEmpty() {
		return (this.root == null) ? true : false;
	}
}


