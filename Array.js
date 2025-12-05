let arr = [10,20,30,40]

console.log("first:",arr[0])

arr.push(50)

arr.unshift(0)


arr.pop()
arr.shift()

console.log(arr)
for(let i =0; i< arr.length;i++){
    console.log("Eelem",i,arr[i])
}
//Find the maximum number in an array.


function findMax(arr){
    max=0
for(i of arr){
    if(max<i)
        max  = i
}
return max


}
console.log(findMax([2,3,4,5,5]))

//rev


re_arr = [1,2,3,4,5]
// console.log(re_arr.reverse())
rev_arr = []

//without-rev
for(let i=(re_arr.length-1);i>=0;i--){
    rev_arr.push(re_arr[i])
}
console.log(rev_arr)

var i =0
var j = re_arr.length -1
while(i <j){
   let tmp = re_arr[i]
   re_arr[i] = re_arr[j]
   re_arr[j] = tmp
   i++
   j--
}
console.log(re_arr)


//Product of Array Except Self

var productExceptSelf = function(nums) {
     arr =[]
    for(let i =0; i<nums.length;i++){
        var product=1
        for(let j =0; j<nums.length;j++){
            
            if(j!==i){
                product *=nums[j]
                
            }
            arr[i] =product
        }
    }
    return arr
};


//two sum 
const twoSum = (num,target)=>{
    const map = new Map();
  
    for (let i=0; i<num.lengrt;i++){
        const diff = target - map[i]
        if(map.has(diff)) return [map.get(deff),i]
        map.set(num[i],i)
    }
}


console.log(twoSum([2,3,4,5],5))