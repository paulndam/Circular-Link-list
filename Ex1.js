// Write a program that allows you to place n people in a circle and specify that every mth person will be killed. The program should determine the number of the last two people left in the circle. Use a circularly linked list to solve the problem.

function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}



function Llist() {
    this.head = new Node('head');
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.moveForward = moveForward;
    this.count = count;
}


function display() {
    var currentNode = this.head;
    while (!(currentNode.next === null) && !(currentNode.next.element === 'head')) {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;

}

function find(item) {
    var currentNode = this.head;
    while (currentNode.element !== item) {
        currentNode = currentNode.next;
    }
    return currentNode;
    
}

function findPrevious(item) {
    var currentNode = this.head;
    while (!(currentNode.next === null) && currentNode.next.element != item) {
        currentNode = currentNode.next;   
    }
    return currentNode;
    
}

function count() {
    var currentNode = this.head;
    var counts = 0;
    while (!(currentNode.next === null)) {
        counts = counts++
        currentNode = currentNode.next;
    }
    return currentNode;
}

function moveForward(item, n) {
    var currentNode = this.find(item);
    for (let i = n; i > 0; i--){
        currentNode = currentNode.next
    }
    return currentNode
}



function remove(item) {
    var previousNode = this.findPrevious(item);
    if (previousNode != null) {
        previousNode = previousNode.next.next;
    }
    
}


function championsLeague(number, position) {
    
    var teams = new Llist();
    var currentNode = teams.head;
    var currentTeams = teams.head.element;

    for (let i = 1; i <= number; i++){
        teams.insert(i, currentNode.element);
        currentNode = currentNode.next;
    }

    // now i will eliminate all teams/person in the league
    //starting from the head

    while (teams.count() > 2) {
        //now move to the mth team
        var eliminate = teams.moveForward(currentTeams, position);
        // now setting a new start point to the next node after getting rid of the node element
        currentTeams = eliminate.next.element
        // now finally removing the mth team
        teams.remove(eliminate.element)
    }

    return teams.display()
}

championsLeague(40, 2)


// teams.insert('barca', 'head');
// teams.insert('man-u', 'barca');
// teams.insert('chelsea', 'man-u');
// teams.insert('liverpool', 'chelsea');
// teams.insert('ajax', 'liverpool');
// teams.display();
// console.log();

