queue = [
 {id:1, severity:3},
 {id:2, severity:5},
 {id:3, severity:5},
 {id:4, severity:2}
]
X = 3

   let siv = queue[2]
   let s = null
   let id = null

for(let p of queue){
    if(p.severity > siv.severity){
        s = p.severity
        id = p.id
    }
    if(p.severity == siv.severity){
       
        console.log(p.severity)
        console.log(siv.severity)
        
        id = p.id < siv.id ? p.id: siv.id


    }
}

console.log(id)