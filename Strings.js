//rev

function rev_in_build(str){
    return str.split('').reverse().join('')
}

console.log(rev_in_build("Nishath"))


function rev_manul(str){
    let res =''
    for(let i = str.length -1; i>=0;i--){
        res += str[i]

    }
    return res;
}
console.log(rev_manul("nisha"))


function isPalindrome(str){
    const string = str.split('').reverse().join('')
    return str == str
}



function count_Vowal(str){
    let count =0
    const vowel = "aeiouAEIOU"
    for(let i of str){
        if(vowel.includes(i)){
            count+=1
        }
    }
    return count
}
console.log(count_Vowal("Nishat"))

//non repeating elemants:
function find_the_non(str){
    for(let i =0; i<str.length;i++ ){
        let found = false;
        for(let j =0;j< str.length; j++){
            if(i !=j && str[i]== str[j]){
                found = true
                break;
            }
        }
        if (!found) return str[i]
    }
    return null
}

console.log(find_the_non("aabbcddce"))



//capitalize

function capitalize(str){
    return str.split('').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join("")
}
console.log(capitalize("nishajdsd"))


function BinarySearch(arr,target){
    l = 0
    r = arr.length-1

    while(l<=r){
        mid = Math.floor((l+r)/2)
        if(arr[mid]==target){
            return mid
        }
        if(target < arr[mid]){
            r = mid -1

        }else{
            l= mid +1
        }
    }
}



