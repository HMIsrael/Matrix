var row1 = [];
var row2 = [];
var row3 = [];

var oRow1 = [1,0,0];
var oRow2 = [0,1,0];
var oRow3 = [0,0,1];


var rows = [];
var oRows = [oRow1, oRow2, oRow3];

function startFromAbove(){
    // i ->> the leading position
    for(i = 0; i <rows.length-1; i++){
        var rowsToPrint = [];
        rowsToPrint.push("בשלב ה" + (i + 1) +" בוצע:");
        for (q = 0; q<=i; q++){
            var rMatString = arrToStringArrStart(rows[q]);
            var lMatString = arrToStringArrEnd(oRows[q]);
            rowsToPrint.push((q + 1) + ") " + rMatString + " || " + lMatString);
        }
        for(i2 = i + 1; i2 < rows.length; i2++){
            if(rows[i2][i] === 0){
                var rMatString = arrToStringArrStart(rows[i2]);
                var lMatString = arrToStringArrEnd(oRows[i2]);
                rowsToPrint.push( (i2+1) + ") " + rMatString + " || " + lMatString);
            }else{

                var multiplyBy = rows[i2][i]/ rows[i][i];
                var multiplyExtend = 0;


                if(i2+1 != rows.length && multiplyBy*rows[i][i+1] - rows[i2][i+1] != 1){
                    multiplyExtend = multiplyBy*rows[i][i+1] - rows[i2][i+1];
                }

                if(multiplyExtend != 0){
                    var rMatString = arrToStringArrStart(rows[i2]);
                    var lMatString = arrToStringArrEnd(oRows[i2]);
                    rowsToPrint.push( (i2+1) + ") " + rMatString + " || " + lMatString + "R"+(i2+1) + "' = (" + multiplyBy+"R"+(i+1) + " - R"+(i2+1) + ") / ("+multiplyExtend+")");
                    //replacing values
                    for(i3 = 0; i3 < rows[i2].length; i3++){
                        rows[i2][i3] = (multiplyBy*rows[i][i3] - rows[i2][i3]) / multiplyExtend;
                        oRows[i2][i3] = (multiplyBy*oRows[i][i3] - oRows[i2][i3]) / multiplyExtend;
                    }
                }else{
                    var rMatString = arrToStringArrStart(rows[i2]);
                    var lMatString = arrToStringArrEnd(oRows[i2]);
                    rowsToPrint.push( (i2+1) + ") " + rMatString + " || " + lMatString + "R"+(i2+1) + "' = " + multiplyBy+"R"+(i+1) + " - R"+(i2+1));
                    for(i3 = 0; i3 < rows[i2].length; i3++){
                        rows[i2][i3] = multiplyBy*rows[i][i3] - rows[i2][i3];
                        oRows[i2][i3] = multiplyBy*oRows[i][i3] - oRows[i2][i3];
                    }
                }
            }          
        }
        printStringArray(rowsToPrint);
        console.log("----התוצאה-----");
        addLabel("----התוצאה-----");
        printFullMatrix();
    }
}

function startFromBelow(){
    for(i = rows.length-1; i>0 ; i--){
        var rowsToPrint = [];
        for (q = rows.length-1; q>=i; q--){
            var rMatString = arrToStringArrStart(rows[q]);
            var lMatString = arrToStringArrEnd(oRows[q]);
            rowsToPrint.push((q + 1) + ") " + rMatString + " || " + lMatString);
        }
        for(i2 = i-1; i2 >=0 ; i2--){
            if(rows[i2][i] === 0)
            {
                var rMatString = arrToStringArrStart(rows[q]);
                var lMatString = arrToStringArrEnd(oRows[q]);
                rowsToPrint.push((i2 + 1) + ") " + rMatString + " || " + lMatString);
            }
            else
            {
                var multiplyBy = rows[i2][i]/ rows[i][i];
                var multiplyExtend = 0;


                if(i2-1 >= 0 && multiplyBy*rows[i][i-1] - rows[i2][i-1] != 1){
                    multiplyExtend = multiplyBy*rows[i][i-1] - rows[i2][i-1];
                }

                if(multiplyExtend != 0){
                    var rMatString = arrToStringArrStart(rows[q]);
                    var lMatString = arrToStringArrEnd(oRows[q]);
                    rowsToPrint.push( (i2+1) + ") " + rMatString + " || " + lMatString + "R"+(i2+1) + "' = (R"+(i2+1) + " - "+multiplyBy+"R"+(i+1) + ") / ("+multiplyExtend+")");
                    //replacing values
                    for(i3 = rows[i2].length-1; i3 >= 0; i3--){
                        rows[i2][i3] = (rows[i2][i3] - multiplyBy*rows[i][i3]) / multiplyExtend;
                        oRows[i2][i3] = (oRows[i2][i3] - multiplyBy*oRows[i][i3]) / multiplyExtend;
                    }
                }else{
                    var rMatString = arrToStringArrStart(rows[q]);
                    var lMatString = arrToStringArrEnd(oRows[q]);
                    rowsToPrint.push( (i2+1) + ") " + rMatString + " || " + lMatString + "R"+(i2+1) + "' = R"+(i2+1) + " - "+multiplyBy+"R"+(i+1));
                    for(i3 = rows[i2].length-1; i3 >= 0; i3--){
                        rows[i2][i3] = rows[i2][i3] - multiplyBy*rows[i][i3];
                        oRows[i2][i3] = oRows[i2][i3] - multiplyBy*oRows[i][i3];
                    }
                }
            }
        }
        rowsToPrint.push("בשלב ה" + (rows.length - i + 2) +" בוצע:");
        rowsToPrint.reverse();
        printStringArray(rowsToPrint);
        console.log("----התוצאה-----");
        addLabel("----התוצאה-----");
        printFullMatrix();
    }
}

function printStringArray(arr){
    for(b = 0; b<arr.length; b++){
        console.log(arr[b]);
        addLabel(arr[b]);
    }
}

function printFullMatrix(){
    for (b = 0; b < rows.length; b++) {
        var rMatString = arrToStringArrStart(rows[b]);
        var lMatString = arrToStringArrEnd(oRows[b]);
        console.log(rMatString + " || " + lMatString);
        addLabel(rMatString + " || " + lMatString);
      }
}

function arrToStringArr(arr){
    var output = "[";
    for (var a = 0; a <arr.length; a++){
        output += arr[a].toString();
        if(a != arr.length -1){
            output += ", ";
        }
    }
    output += "]";
    return output;
}

function arrToStringArrStart(arr){
    var output = "[";
    for (var a = 0; a <arr.length; a++){
        output += arr[a].toString();
        if(a != arr.length -1){
            output += ", ";
        }
    }
    return output;
}

function arrToStringArrEnd(arr){
    var output = "";
    for (var a = 0; a <arr.length; a++){
        output += arr[a].toString();
        if(a != arr.length -1){
            output += ", ";
        }
    }
    output += "]";
    return output;
}

function addLabel(string){
    var label = document.createElement('p');
    label.innerHTML = string;
    document.getElementById("Calculation_div").appendChild(label);
}

function calculateMatrix(){
    var oneOn1 = document.getElementById("OneO1").value;
    var oneOn2 = document.getElementById("OneO2").value;
    var oneOn3 = document.getElementById("OneO3").value;

    var twoOn1 = document.getElementById("TwoO1").value;
    var twoOn2 = document.getElementById("TwoO2").value;
    var twoOn3 = document.getElementById("TwoO3").value;

    var threeOn1 = document.getElementById("ThreeO1").value;
    var threeOn2 = document.getElementById("ThreeO2").value;
    var threeOn3 = document.getElementById("ThreeO3").value;

    row1 = [oneOn1, oneOn2, oneOn3];
    row2 = [twoOn1, twoOn2, twoOn3];
    row3 = [threeOn1, threeOn2, threeOn3];

    rows = [row1, row2, row3];
    startFromAbove();
    startFromBelow();
}
