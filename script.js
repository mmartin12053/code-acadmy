var userName = 'dan'

if (userName){
  console.log('hello, ' + userName + '!');
}else {
  console.log('hello!');
};

let userQuestion = 'is god real';

console.log('you asked ' + userQuestion + '. the answer is:');

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = randomNumber;

swich (randomNumber) {
  case 0;
    console.log('It is certain')
  break;
  case 1;
    console.log('It is decidedly so')
  break;
  case 2;
    console.log('Reply hazy try again')
  break;
  case 3;
    console.log('Cannot predict now')
  break;
  case 4;
    console.log('Do not count on it')
  break;
  case 5;
    console.log('My sources say no')
  break;
  case 6;
    console.log('Outlook not so good')
  break;
  case 7 ;
    console.log('Signs point to yes')
  break;
  default;
    console.log('you did not ask a question.')
}
