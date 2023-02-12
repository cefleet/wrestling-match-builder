import names from "./names.js";
const genders = ['male', 'female']

function getRandomName(gender){
  return `${getRandomFromList(names[gender])} ${getRandomFromList(names.surnames)}`;
}

function getRandomWeight(age){
  const min = Math.floor(age*4 + age*(2/age+1) + (age-4)*2);
  const max = Math.floor(age*4 + age*(2/age+age/1.5) + (age-4)*2);
  return getRandomNumber(min,max);
}

function getRandomFromList(list, weights){
  
  const newList = weights ? list.reduce((a,c,i)=>[...a, ...Array(weights[i]).fill(c)],[]) : list;
  return newList[Math.floor(Math.random()*newList.length)]
}

function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function createWrestler(){
  const gender = genders[Math.random() < 0.85 ? 0 : 1];
  const name = getRandomName(gender);
  const age = getRandomNumber(6,14);

  const weight = getRandomWeight(age);

  const exp = getRandomNumber(0,5);
  const competitionLevel = getRandomFromList(['non-competitive','beginner','intermidiate','advanced','expert'],[2,5,4,3,1]);

  return {name,gender, weight, age, exp, competitionLevel};
}