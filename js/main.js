let firstNumber = +prompt(
  'Пожалуйста введите первое целое число с которого нaчнем отчет',
);
let secondNumber = +prompt(
  'Пожалуйста введите второе число до которого будем считать',
);
let sumOfTwoNumbers = 0;

const countAllOrNotAll = confirm(
  'будем счтать все числа или только не парные?',
);

while (Number.isNaN(firstNumber) === true) {
  firstNumber = +prompt('Введите пожалуйста целое число с которого начнем ');
}
while (firstNumber < secondNumber && Number.isNaN(secondNumber) === true) {
  secondNumber = +prompt(
    'Введите пожалуйста второе целое число которое больше чем первое',
  );
}
let i = '';
let j = '';

if (countAllOrNotAll === true) {
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
