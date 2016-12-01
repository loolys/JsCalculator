/**
 * Created by Pierre on 2016-12-01.
 */

var getNumber, setNumber;
var getAttr, setAttr;

(function(){
    /*
    Initializes the getter and setter for
    number when the code is first ran.
     */
    var number = 0;

    getNumber = function(){
        return number;
    };

    setNumber = function(num){
        if (typeof num === "number"){
            number = num;
        } else{
            console.log("Not a valid number");
        }
    };
}());


(function(){

    var attr = "";

    getAttr = function(){
        return attr;
    };

    setAttr = function(at){
        if (at == "+"){
            attr = "+";
        }
        else if(at == "-"){
            attr = "-";
        }
        else if(at == "*"){
            attr = "*";
        }
        else if(at == "/"){
            attr = "/";
        }
    };

}());

function calc(newNum){
    var number = getNumber();
    setNumber(newNum);
    var currentAttr = getAttr();

    if(currentAttr == "+"){
        number += getNumber();
    } else if(currentAttr == "-"){
        number -= getNumber();
    } else if(currentAttr == "*"){
        number *= getNumber();
    } else if(currentAttr == "/"){
        number /= getNumber();
    }
    setNumber(number);
    return number;
}