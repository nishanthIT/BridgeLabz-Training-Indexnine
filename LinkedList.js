



class Node{
    constructor(val){
        this.value = val
        this.next = null

    }
}

class LinkedList{
    constructor(){
        this.head = null
    }


    append(val){
        const newNode = new Node(val)

        if(!this.head){
            this.head = newNode
            return
        }

        let cur_node = this.head

        while(cur_node.next){
            cur_node = cur_node.next
        }
        cur_node.next = newNode


    }

    print(){
        let cur_node = this.head;

        let out = ""

        while(cur_node){
            out += cur_node.value+"-->"
            cur_node = cur_node.next
        }

        console.log(out)
    }


    prepend(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
        }
        newNode.next = this.head
        this.head = newNode
    }

    delete(val){
        if(this.head == null) return;
        if(this.head.value === val){
            this.head = this.head.next
        }
        let cur = this.head
        while(cur.next && cur.next.value !==val){
            cur = cur.next
        }
        if(cur){
            cur.next = cur.next.next
        }
            
    }


}



l1 = new LinkedList()

l1.append(4)
l1.append(3)
l1.append(2)
l1.prepend(5)
l1.delete(3)
l1.print()
