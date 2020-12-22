let name = prompt('Привет, как тебя зовут?');
    
while (name == '' || name == null ) {
  name = name = prompt('Привет, как тебя зовут?');
} 

alert(name + ', здесь правила игры.');

let number = Math.round(Math.random() * 100);

let guess = prompt('Какое число я загадал?');
let numberofguesses = 0;

while (guess != number) {
  if (guess > number){
    guess = prompt('Много, попробуй ещё раз');
    numberofguesses = numberofguesses + 1;
  }

  if (guess < number) {
    guess = prompt('Мало, попробуй ещё раз');
    numberofguesses = numberofguesses + 1;
  }
}

alert('Ты угадал число ' + number + ' за ' + numberofguesses + ' попыток.');
