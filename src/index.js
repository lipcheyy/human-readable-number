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
          8:'eigth',
          9:'nine',
    }
    const dec2={
        
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
    const dec3={
        10:'ten',
        20:'twenty',
        30:'thirty',
        40:'fourty',
        50:'fify',
        60:'sixty',
        70:'seventy',
        80:'eighty',
        90:'ninety',
    }
    
    if(number<10){
        return dec[number];
      }
  }
  