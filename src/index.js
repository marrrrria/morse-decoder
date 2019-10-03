const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let words2=[];
    let words=expr.split(["**********"]);
    for  (let i=0;i<words.length; i++) {
      let letters = words[i].match(/..........?/g);
      let word = '';
      for (let j=0; j<letters.length;j++) {
        word+=getLetter(letters[j]);
      }
      words2.push(word);
    }
    return words2.join(' ');
   
    function getLetter(code) {
        let b='';
        for(i=0;i<=9;i+=2){        
            let a=''+code[i]+code[i+1];        
        if (a=="10") {b+="."}
        else if(a=="11") {b+="-"} 
        }
        return MORSE_TABLE[b];
    }
}

module.exports = {
    decode
}