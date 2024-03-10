// function findIndicesSum(array,targetValue){

//     let result = [];
    
//     for(let i=0; i<(array.length-1);i++){
//         for(let j=i+1;j<array.length;j++){
            
//             if(array[i]+array[j] === targetValue){
//                 result.push(i,j);
//             }
            
//         }
//     }

//     return result;

// }

function findIndicesSum(array,targetValue){

    let hashTable = {};
    let neededValue;
    
    for(let i=0;i<=array.length-1;i++){
        neededValue = targetValue - array[i];
        if(neededValue in hashTable){
            return [i,hashTable[neededValue]]
        }else{
            hashTable[array[i]] = i;
        }
        
    }


    return [];

}