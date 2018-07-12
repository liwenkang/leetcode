const log = console.log.bind(console)

function intToRoman(num) {
    var result = "";
    var thousand = parseInt(num / 1000, 10);
    var hundreds = parseInt((num % 1000) / 100, 10);
    var decade = parseInt(((num % 1000) % 100) / 10, 10);
    var unit = parseInt(((num % 1000) % 100) % 10, 10);

    //写千位
    for(var i = 0; i < thousand; i++) {
        result += "M";
    }

    //写百位
    if(hundreds == 9){
        result += "CM";
    }
    if(hundreds >= 5 && hundreds <= 8) {
        result += "D";
        for(var i = 0; i < hundreds - 5; i++) {
            result += "C";
        }
    }
    if(hundreds == 4){
        result += "CD";
    }
    if(hundreds >= 1 && hundreds <=3){
        for(var i = 0; i < hundreds; i++) {
            result += "C";
        }
    }

    //写十位
    if(decade == 9){
        result += "XC";
    }
    if(decade >= 5 && decade <= 8) {
        result += "L";
        for(var i = 0; i < decade - 5; i++) {
            result += "X";
        }
    }
    if(decade == 4){
        result += "XL";
    }
    if(decade >= 1 && decade <=3){
        for(var i = 0; i < decade; i++) {
            result += "X";
        }
    }

    //写个位
    if(unit == 9){
        result += "IX";
    }
    if(unit >= 5 && unit <= 8) {
        result += "V";
        for(var i = 0; i < unit - 5; i++) {
            result += "I";
        }
    }
    if(unit == 4){
        result += "IV";
    }
    if(unit >= 1 && unit <=3){
        for(var i = 0; i < unit; i++) {
            result += "I";
        }
    }
    log(result)
    return result;
}

intToRoman(3);
intToRoman(4);
intToRoman(9);
intToRoman(58);
intToRoman(1994);
