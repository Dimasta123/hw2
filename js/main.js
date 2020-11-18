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
while (isInteger(firstNumber)) {
  firstNumber = +prompt('Введите пожалуйста целое число с которого начнем! ');
}
while (Number.isNaN(secondNumber)) {
  secondNumber = +prompt('Введите пожалуйста второе целое число ');
}
  while (isInteger(secondNumber)) {
  secondNumber = +prompt('Введите пожалуйста второе целое число! ');
}
while (secondNumber < firstNumber) {
  secondNumber = +prompt('Введите число которое будет больше чем первое!');
}
const countAllOrNotAll = confirm(
  'будем счтать все числа или только не парные?',
);

 for (var i = firstNumber; i <= secondNumber; i++) 
{if (countAllOrNotAll) 
 sumOfTwoNumbers += i;
     }
} else { (i % 2 === 0)
 sumOfTwoNumbers += i;
  
}
console.log(firstNumber, secondNumber, sumOfTwoNumbers);

