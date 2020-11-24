const fatorial = (num) => {
  let fatNum = 1;
  for (let index = num; index > 0; index -=1){
    fatNum = index * fatNum;
  }
  return fatNum;
}
console.log(fatorial(5));