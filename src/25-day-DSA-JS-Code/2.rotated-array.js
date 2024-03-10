const maxArea = function (array){

    console.log(array)
    
    let maxA = 0;
    
    for(let i=0; i<array.length-1;i++){
        
        for(let j=i+1;j<array.length;j++){
            
            maxA = Math.max(maxA, Math.min(array[i],array[j]) * (j-i))
            
        }
    }
    
    return maxA;
    
}