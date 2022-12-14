
function canSum(target, numbers) {
    const summedArr = [];
  for (let i = 0; i < numbers.length; i++){
    const digit = numbers[i]
  
    
    for(let j = 0; j < numbers.length; j++){
      if(digit !== numbers[j]){
        if (digit + numbers[j] === target){
          summedArr.push(digit+numbers[j])
        }
      }
  
    }
    }
  return summedArr.length !==0
  }
  
  
  
  
  
  console.log(canSum(10, [3, 5, 2, 6, 7])); // true
  console.log(canSum(9, [3, 3 , 3, 3, 3])); // false
  console.log(canSum(1, [3, 5, 2, 6, 7])); // false
  
  
  
  function canSum2(target, numbers) {
    const obj = {}
  
    for (let i = 0; i < numbers.length; i++){
      obj[numbers[i]] = i;
    }
  
    for (let i = 0; i < numbers.length; i++){
      const diff = target - numbers[i];
  
      if (obj[diff] && obj[diff] !== i) {
        return true
      }
      return false
    }
  }
  
  console.log(canSum2(10, [3, 5, 2, 6, 7])); // true
  console.log(canSum2(9, [3, 3 , 3, 3, 3])); // false
  console.log(canSum2(1, [3, 5, 2, 6, 7])); // false