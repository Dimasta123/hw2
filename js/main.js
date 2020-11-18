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
while (!Number.isInteger(firstNumber)) {
  firstNumber = +prompt('Введите пожалуйста целое число с которого начнем! ');
}
while (Number.isNaN(secondNumber)) {
  secondNumber = +prompt('Введите пожалуйста второе целое число ');
}
while (!Number.isInteger(secondNumber)) {
  secondNumber = +prompt('Введите пожалуйста второе целое число! ');
}
while (secondNumber < firstNumber) {
  secondNumber = +prompt('Введите число которое будет больше чем первое!');
}
const countAllOrNotAll = confirm(
  'будем счтать все числа или только не парные?',
);
for (let i = firstNumber; i <= secondNumber; i++) {
  if (countAllOrNotAll && i % 2 === 0) {
    continue;
  }
  sumOfTwoNumbers = sumOfTwoNumbers + i;
}
console.log(firstNumber, secondNumber, sumOfTwoNumbers);

