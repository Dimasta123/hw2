let firstNumber = '';
let secondNumber = '';
let sumOfTwoNumbers = 0;
firstNumber = +prompt(
  'Пожалуйста введите первое целое число с которого нaчнем отчет',
);
secondNumber = +prompt(
  'Пожалуйста введите второе число до которого будем считать',
);
let countAllOrNotAll = confirm('будем счтать все числа или только не парные?');
let i = '';
let j = '';

if (countAllOrNotAll !== true) {
  for (let i = firstNumber; i <= secondNumber; i++) {
    sumOfTwoNumbers += i;
  }
} else {
  for (let j = firstNumber; j <= secondNumber; j++) {
    if (j % 2 == 0) {
      continue;
    }
    sumOfTwoNumbers += j;
  }
}
console.log(firstNumber, secondNumber, sumOfTwoNumbers);
