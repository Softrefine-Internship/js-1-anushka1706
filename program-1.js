// Write a JavaScript program to clone an array.
function cloneArr(arr){
    return arr.map(ele => {
        return Array.isArray(ele) ? cloneArr(ele):ele
    })
}
const arr = [2,5,[5,77],5,7]
const arr1 = [2,5,[5,[77,88]],5,7]
console.log(cloneArr(arr))
console.log(cloneArr(arr1))