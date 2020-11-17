let firstNumber = +prompt(
  'Пожалуйста введите первое целое число с которого нaчнем отчет',
);
let secondNumber = +prompt(
  'Пожалуйста введите второе число до которого будем считать',
);
let sumOfTwoNumbers = 0;

while (Number.isNaN(firstNumber)) {
  firstNumber = +prompt('Введите пожалуйста целое число с которого начнем ');
}
while (Number.isNaN(secondNumber)) {
  secondNumber = +prompt('Введите пожалуйста второе целое число ');
}
while (secondNumber < firstNumber) {
  secondNumber = +prompt('Введите число которое будет больше чем первое!');
}
const countAllOrNotAll = confirm(
  'будем счтать все числа или только не парные?',
);
let i = '';
let j = '';

if (countAllOrNotAll) {
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

