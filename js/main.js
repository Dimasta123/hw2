let firstNumber = +prompt(
  'Пожалуйста введите первое целое число с которого нaчнем отчет',
);
let secondNumber = +prompt(
  'Пожалуйста введите второе число до которого будем считать',
);
let sumOfTwoNumbers = 0;

const skipEvenNumbers = confirm(
  'будем счтать все числа или только не парные?',
);
let i = '';
let j = '';

if (skipEvenNumbers !== true) {
  for (i = firstNumber; i <= secondNumber; i++) {
    sumOfTwoNumbers += i;
  }
} else {
  for (j = firstNumber; j <= secondNumber; j++) {
    if (j % 2 === 0) {
      continue;
    }
    sumOfTwoNumbers += j;
  }
}
console.log(firstNumber, secondNumber, sumOfTwoNumbers);
