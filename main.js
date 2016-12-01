/**
 * Created by Pierre on 2016-12-01.
 */

var getNumber, setNumber;
var getAttr, setAttr;
var getReset, setReset;
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

    var reset = true;

    getReset = function(){
        return reset;
    };
    setReset = function(bool){
        reset = bool;
    };
})

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
    console.log("In calc:" + number);
    setReset(true);
    $("#currentVal").text(number);
    return number;
}

$(document).ready(function(){

    $("#add").click(function(){
        setAttr("+");
        var number = $("#currentVal").text();
        console.log(number);
        calc(parseInt(number));
    });

    $("#subtract").click(function(){
        setAttr("-");
        var number = $("#currentVal").text();
        setNumber(parseInt(number));
        console.log(number);
        setReset(true);
    });

    $("#divide").click(function(){
        setAttr("/");
        var number = $("#currentVal").text();
        setNumber(parseInt(number));
        console.log(number);
        setReset(true);
    });

    $("#multiply").click(function(){
        setAttr("*");
        var number = $("#currentVal").text();
        setNumber(parseInt(number));
        console.log(number);
        setReset(true);
        /*
        var number = $("#currentVal").text();

        calc(parseInt(number));*/
    });
    $("#equal").click(function(){
        var number = $("#currentVal").text();
        calc(parseInt(number));
        setNumber(0);
    })

    $("#1").click(function(){
        changeText(1);

    });
    $("#2").click(function(){
        changeText(2);
    });
    $("#3").click(function(){
        changeText(3);
    });
    $("#4").click(function(){
        changeText(4);
    });
    $("#5").click(function(){
        changeText(5);
    });
    $("#6").click(function(){
        changeText(6);
    });
    $("#7").click(function(){
        changeText(7);
    });
    $("#8").click(function(){
        changeText(8);
    });
    $("#9").click(function(){
        changeText(9);
    });
    $("#0").click(function(){
        $("#currentVal").append("0");
    });

});

function changeText(i){
    if(getReset()){
        $("#currentVal").text(""+i);
        setReset(false);
    }
    else{
        $("#currentVal").append(""+i);
    }
}