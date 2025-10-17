
// Example 1
/* function findDuplicateString(input_str) {

    let results = '';
    let seen = new Set();
    for(let str of input_str){
        if(!seen.has(str)){
            results += str;
            seen.add(str);
        }
    }
    return results;
}
console.log(findDuplicateString("banana")); // Output: "ban" */

// Example2
/* 
function findDuplicateString2(str){
    let results = '';
    let seen = new Map();
    
        for(let i=0; i < str.length; i++){
            if(!seen.has(str[i])){
                results += str[i]
                seen.set(str[i], 1);
        }
    }
    return results;
}
console.log(findDuplicateString2("banana")); // Output: "ban" */ 

//Exmaple 3

function findDuplicateString3(str){
    let results = '';
    for(let i=0; i < str.length; i++){
        if(!results.includes(str[i])){
            console.log(str[i]);
            
            results += str[i];
        }
    }
    return results;
}
console.log(findDuplicateString3('banana')); // Output: "ban"


