const numbers = [3, 7, 8, 5, 9, 12, 15];

function findFirstEvenNumber(numbers) {
  return numbers.find(function (num) {
    if (num % 2 === 0) return true;
  });
}

console.log(findFirstEvenNumber(numbers));
