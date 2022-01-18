module.exports = function toReadable (number) {
    const dec={
        0:'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5:'five',
      6:'six',
      7:'seven',
      8:'eight',
      9:'nine',
      10: 'ten',
      11:'eleven',
      12:'twelve',
      13:'thirteen',
      14:'fourteen',
      15:'fifteen',
      16:'sixteen',
      17:'seventeen',
      18:'eighteen',
      19:'nineteen'
}

const dec2={
    0:'zero',
    1:'ten',
    2:'twenty',
    3:'thirty',
    4:'forty',
    5:'fifty',
    6:'sixty',
    7:'seventy',
    8:'eighty',
    9:'ninety',
}    

var frst=number % 10;
var sec=Math.floor(number/10);
var k=number/100;
var j= Math.floor(number/100);
if(number<20){
    return dec[number];
}
else if(number>=20 && number<100){   
	if(frst==0){
		return dec2[sec]; }
	else{
		return dec2[sec]+' '+dec[frst]; }}

else if(number%100==0){
	return dec[k]+' hundred';}
else{
	return dec[j]+' hundred ' + toReadable(number%100);
}
}
console.log
