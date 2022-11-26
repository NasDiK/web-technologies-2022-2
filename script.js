//task 1
const pickPropArray = (array, prop) => 
  array.reduce((arr,item)=>{
    if(item.hasOwnProperty(prop)) {
      arr.push(item[prop]);
    }
    return arr;
  }, []);

const students = [
  { name: 'Павел', age: 20 },
  { name: 'Иван', age: 20 },
  { name: 'Эдем', age: 20 },
  { name: 'Денис', age: 20 },
  { name: 'Виктория', age: 20 },
  { age: 40 },
 ]
 
console.log(pickPropArray(students, 'name'));

//task 2

const createCounter = () => {
  let i = 0;
  return function(){
    console.log(++i);
  };
}

const counter1 = createCounter();
counter1();
counter1();
const counter2 = createCounter();
counter2();
counter2();

//task 3
const spinWords = (str) => {
  const matches = str
    .match(/[А-Яа-яA-Za-z]+/ig)
    .map(word=>word.length >= 5 ? word.split('').reverse().join('') : word);
  return matches.join(' ');
}

console.log(spinWords('this is a test'));
console.log(spinWords('Привет из Legacy'));

//task 4

const exec = (nums, target) => {
  for(let i=0;i<nums.length; i++)
    for(let j=i; j<nums.length; j++)
      if(nums[i]+nums[j]===target && i!==j)
        return([i,j]);
};

console.log(exec([2,7,11,15],9));

//task 5

const mostLength = (words) => {
  if(words.length < 2) return;
  const reversedWords = words.map(word=>word.split('').reverse().join(''));
  const minLength = Math.min(...words.map(word=>word.length));

  const result = [];
  for (let i=0; i<minLength; i++){
    let symbol = reversedWords[0][i];
    if (reversedWords.every(word=>word[i]===symbol))
      result.push(symbol);
  }
  return result.length < 2 ? '' : result.reverse().join('');
}

console.log(mostLength(['цветок', 'поток', 'хлопок']));
console.log(mostLength(["собака","гоночная машина","машина"]));