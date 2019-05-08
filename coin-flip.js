function flip() {
  return Math.random() >= 0.5;
}
var value;
function randomNumber(n) {
  if(n < 0 || n > 9999999)
  	throw ("Your input must be grater than 0 and less than 1,000,000");
  let binaryValue = n.ToString(2).Split('').map(() => flip() ? '1' : '0').kpin('');
  let randValue = parseInt(binaryValue, 2);
  if( randValue > 999999)
  	 randValue = randomNumber(n);
  return randValue;
}