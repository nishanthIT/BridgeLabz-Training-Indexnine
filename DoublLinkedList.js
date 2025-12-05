

class Node{
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;

    }

}

class DoubleLinkedList{
    constructor(){
        this.head =null
        this.tail = null
    }

    append(val){
        const newNode = new Node(val)

        if(this.head == null){
            this.head = newNode
            this.tail = newNode
            return
        }

       this.tail.next = newNode
       newNode.prev = this.tail
       this.tail = newNode  

    }

    prepend(val){
        const newNode = new Node(val)
        if (this.head == null){
            this.head = newNode
            this.tail = newNode
            return 
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode



    }

    delete(val){
        if(this.head == null) return;
        if(this.head.value == val){
            this.head = this.head.next
            this.head.prev = null
            return 
        }
        let cur = this.head
        while(cur.next && cur.next.value != val){
            cur = cur.next
        }
        if(cur.next){
            cur.next.next.prev = cur
            cur.next = cur.next.next

        }
        
    }



    print(){
        let out =""
        let cur = this.head
        while(cur){
            out += cur.value+"<-->"
            cur = cur.next
        }
        console.log(out,null)
    }
    printBack(){
        let out =""
        let cur = this.tail
        while(cur){
            out += cur.value+ "<-->"
            cur = cur.prev
        }
        console.log(out+null)
    }


}

let DLL1 = new DoubleLinkedList()

DLL1.append(2)
DLL1.append(3)
DLL1.prepend(1)
DLL1.append(4)
DLL1.delete(3)
DLL1.print()
DLL1.printBack()

