function sortedSquarredArray(array){
    const newArray = new Array(array.length).fill(0);
   
   let pointLeft = 0;
   let pointRight = array.length-1;
   
   for(let i= array.length-1; i>=0; i--){
      const rightSqaure = Math.pow(array[pointRight],2);
      const leftSqaure = Math.pow(array[pointLeft], 2)
       
       if(leftSqaure > rightSqaure){
           newArray[i] = leftSqaure;
           pointLeft++;
       
       }else{
           newArray[i] = rightSqaure;
           pointRight--;
       }
   }


   return newArray;
   
}
