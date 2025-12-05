function binarySearch(arr,tahget){
    l = 0
    r = arr.length -1 
    while(l <= r){

        mid = Math.floor((l+r)/2)

        if (arr[mid]==tahget){
            return mid
        }
        if(tahget < arr[mid]){
            r = mid -1
        }else{
            l = mid+1
        }
       
    }

}
arr= [1,2,4,5]
console.log(binarySearch(arr,5))




queue = [
 {id:1, severity:3},
 {id:2, severity:5},
 {id:3, severity:5},
 {id:4, severity:2}
]
X = 3      