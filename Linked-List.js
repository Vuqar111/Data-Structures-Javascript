class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      }  
    append(value){
        const newNode = {value: value,next: null}
        this.tail.next = newNode;
        this.tail = newNode;
    }  
}


const linkedList = new LinkedList();
