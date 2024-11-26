
var romanToInt = function(s) {
    const string = s.split('')
    var value = 0
    console.log(string);
    for(let i = 0;i <string.length; i++){
        if(
            (string[i] === 'I' && (string[i + 1] === 'V' || string[i + 1] === 'X')) || 
            (string[i] === 'X' && (string[i + 1] === 'L' || string[i + 1] === 'C')) ||
            (string[i] === 'C' && (string[i + 1] === 'D' || string[i + 1] === 'M')) 
        ){
            if(string[i] === 'I')value -=1;
            else if (string[i] === 'X') value -= 10;
            else if (string[i] === 'C') value -= 100;
        }else{
            if(string[i]=='I')value+=1           
            else if(string[i]=='V')value+=5;
            else if(string[i]=='X')value+=10;
            else if(string[i]=='L')value+=50;  
            else if(string[i]=='C')value+=100;   
            else if(string[i]=='D')value+=500;
            else if(string[i]=='M')value+=1000;
        }
 
    }
    return value
};
console.log(romanToInt("LVIII"))