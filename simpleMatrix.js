var row1 = [1, 3, 3];
var row2 = [1, 4, 3];
var row3 = [2, 7, 7];

var rows = [row1, row2, row3]

function startFromAbove(){
    // i ->> the leading position
    for(i = 0; i <rows.length-1; i++){
        var rowsToPrint = [];
        rowsToPrint.push("בשלב ה" + (i + 1) +" בוצע:");
        for (q = 0; q<=i; q++){
            rowsToPrint.push((q + 1) + ") " + arrToStringArr(rows[q]));
        }
        for(i2 = i + 1; i2 < rows.length; i2++){
            if(rows[i2][i] === 0){
                rowsToPrint.push( (i2+1) + ") " + arrToStringArr(rows[i2]));
            }else{

                var multiplyBy = rows[i2][i]/ rows[i][i];
                var multiplyExtend = 0;


                if(i2+1 != rows.length && multiplyBy*rows[i][i+1] - rows[i2][i+1] != 1){
                    multiplyExtend = multiplyBy*rows[i][i+1] - rows[i2][i+1];
                }

                if(multiplyExtend != 0){
                    rowsToPrint.push( (i2+1) + ") " + arrToStringArr(rows[i2]) + "R"+(i2+1) + "' = (" + multiplyBy+"R"+(i+1) + " - R"+(i2+1) + ") / ("+multiplyExtend+")");
                    //replacing values
                    for(i3 = 0; i3 < rows[i2].length; i3++){
                        rows[i2][i3] = (multiplyBy*rows[i][i3] - rows[i2][i3]) / multiplyExtend;
                    }
                }else{
                    rowsToPrint.push( (i2+1) + ") " + arrToStringArr(rows[i2]) + "R"+(i2+1) + "' = " + multiplyBy+"R"+(i+1) + " - R"+(i2+1));
                    for(i3 = 0; i3 < rows[i2].length; i3++){
                        rows[i2][i3] = multiplyBy*rows[i][i3] - rows[i2][i3];
                    }
                }
            }          
        }
        printStringArray(rowsToPrint);
        console.log("----התוצאה-----");
        printArray(rows);
    }
}

function startFromBelow(){
    for(i = rows.length-1; i>0 ; i--){
        var rowsToPrint = [];
        for (q = rows.length-1; q>=i; q--){
            rowsToPrint.push((q + 1) + ") " + arrToStringArr(rows[q]));
        }
        for(i2 = i-1; i2 >=0 ; i2--){
            if(rows[i2][i] === 0)
            {
                rowsToPrint.push((i2 + 1) + ") " + arrToStringArr(rows[i2]));
            }
            else
            {
                var multiplyBy = rows[i2][i]/ rows[i][i];
                var multiplyExtend = 0;


                if(i2-1 >= 0 && multiplyBy*rows[i][i-1] - rows[i2][i-1] != 1){
                    multiplyExtend = multiplyBy*rows[i][i-1] - rows[i2][i-1];
                }

                if(multiplyExtend != 0){
                    rowsToPrint.push( (i2+1) + ") " + arrToStringArr(rows[i2]) + "R"+(i2+1) + "' = (R"+(i2+1) + " - "+multiplyBy+"R"+(i+1) + ") / ("+multiplyExtend+")");
                    //replacing values
                    for(i3 = rows[i2].length-1; i3 >= 0; i3--){
                        rows[i2][i3] = (rows[i2][i3] - multiplyBy*rows[i][i3]) / multiplyExtend;
                    }
                }else{
                    rowsToPrint.push( (i2+1) + ") " + arrToStringArr(rows[i2]) + "R"+(i2+1) + "' = R"+(i2+1) + " - "+multiplyBy+"R"+(i+1));
                    for(i3 = rows[i2].length-1; i3 >= 0; i3--){
                        rows[i2][i3] = rows[i2][i3] - multiplyBy*rows[i][i3];
                    }
                }
            }
        }
        rowsToPrint.push("בשלב ה" + (rows.length - i + 2) +" בוצע:");
        rowsToPrint.reverse();
        printStringArray(rowsToPrint);
        console.log("----התוצאה-----");
        printArray(rows);
    }
}

function printStringArray(arr){
    for(b = 0; b<arr.length; b++){
        console.log(arr[b]);
    }
}

function printArray(arr){
    for(b = 0; b<arr.length; b++){
        console.log(arrToStringArr(arr[b]));
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
startFromAbove();
startFromBelow();