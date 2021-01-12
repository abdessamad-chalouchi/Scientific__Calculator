window.onload = myMain;
function myMain() {
    document.getElementById("calculator__container").onclick = button;
    
}
function button(e) {
    click = document.getElementById(e.target.id).value;
    
    var rad = document.getElementById("rad");
    var deg = document.getElementById("deg");
    var hyp = document.getElementById("hyp");
    var currenetOperation = document.getElementsByClassName("currenet__operation")[0];
    var PreviousOperation = document.getElementById("previous__operation");
    var clearButton = document.createElement("button");
    clearButton.innerHTML = "x";
    clearButton.setAttribute("id", "clear__previous--operation");
    clearButton.setAttribute("value", "clear__previous--operation");
    
    
    // math variable
    
    var π = Math.PI;
    var acos=Math.acos;
    var asin=Math.asin;
    var atan=Math.atan;
    var tan=Math.tan;
    var log=Math.log;
    
    var exp=Math.exp;
    var pow=Math.pow;
    var e=Math.E;
    var abs=Math.abs;
    var cosh=Math.cosh;
    var sinh=Math.sinh;
    var tanh=Math.tanh;
    var acosh=Math.acosh;
    var asinh=Math.asinh;
    var atanh=Math.atanh;

    // root of degree three
    function sqrt3(x){
        return pow(x, 1/3);
    }
    // root of degree three
    function sqrt(x, y=2){
            return pow(x, 1/y);
    }

    // x cube
    function cube(x){
        return pow(x,3);
    }

    // x square
    function sr(x){
        return pow(x,2);
    }

    // clear previous operation
    function clear(){
        PreviousOperation.textContent = "";
    }
    

    switch(click){
        case PreviousOperation.value:
            
            break;
        case "clear__previous--operation":
            clearButton.onclick= clear();
            break;
        case "Cl":
            currenetOperation.value = "";
            break;
        case "Del":
            currenetOperation.value = currenetOperation.value.slice(0,-1);
            break;
        case "=":
            if(currenetOperation.value.length == 0){
    
            }else{
                if(deg.checked == true){
                    // calculate in degree 
                    function sin(x){
                        return parseFloat(Math.sin(x * Math.PI/180).toFixed(10));
                    }
                    function cos(x){
                            return parseFloat(Math.cos(x * Math.PI/180).toFixed(10));
                        
                    }
                    function tan(x){
                        if(x==90 || x==-90){
                            alert("Error!, tan("+x+")= infinity.");
                        }else{
                            return Math.tan(x * Math.PI/180);
                        }
                    }
                    function asin(x){
                        return Math.asin(x) * 180/Math.PI;
                    }
                    function acos(x){
                        return Math.acos(x) * 180/Math.PI;
                    }
                    function atan(x){
                        return Math.atan(x) * 180/Math.PI;
                    }
                }else{
                    function sin(x){
                        return parseFloat(Math.sin(x).toFixed(10));
                        
                    }
                    function cos(x){
                        return parseFloat(Math.cos(x).toFixed(10));    
                    }
                    function tan(x){
                        if(x == Math.PI/2 || x == -Math.PI/2){
                            alert("Error!! tan("+x+") = Infinity");
                        }else{
                            return parseFloat(Math.tan(x).toFixed(10));
                        }
                    }
                }
                PreviousOperation.textContent = currenetOperation.value + "=" +parseFloat(eval(currenetOperation.value).toFixed(10));
                PreviousOperation.appendChild(clearButton);
                currenetOperation.value = parseFloat(eval(currenetOperation.value).toFixed(10));
            }
            break;
        case "hyp":
            hyp.value= "hyp1";
            document.getElementById("btn__acos").value = "acosh(";
            document.getElementById("btn__acos").innerHTML = "cosh<sup>-1</sup>";

            document.getElementById("btn__asin").value = "asinh(";
            document.getElementById("btn__asin").innerHTML = "sinh<sup>-1</sup>";

            document.getElementById("btn__atan").value = "atanh(";
            document.getElementById("btn__atan").innerHTML = "tanh<sup>-1</sup>";

            document.getElementById("btn__cos").value = "cosh(";
            document.getElementById("btn__cos").innerHTML = "cosh";

            document.getElementById("btn__sin").value = "sinh(";
            document.getElementById("btn__sin").innerHTML = "sinh";

            document.getElementById("btn__tan").value = "tanh(";
            document.getElementById("btn__tan").innerHTML = "tanh";
            break;
        case "hyp1":
            hyp.value= "hyp";
            document.getElementById("btn__acos").value = "acos(";
            document.getElementById("btn__acos").innerHTML = "cos<sup>-1</sup>";

            document.getElementById("btn__asin").value = "asin(";
            document.getElementById("btn__asin").innerHTML = "sin<sup>-1</sup>";

            document.getElementById("btn__atan").value = "atan(";
            document.getElementById("btn__atan").innerHTML = "tan<sup>-1</sup>";

            document.getElementById("btn__cos").value = "cos(";
            document.getElementById("btn__cos").innerHTML = "cos";

            document.getElementById("btn__sin").value = "sin(";
            document.getElementById("btn__sin").innerHTML = "sin";

            document.getElementById("btn__tan").value = "tan(";
            document.getElementById("btn__tan").innerHTML = "tan";
            break;
        default:
            currenetOperation.value += click;
            break;
    }
    
}
