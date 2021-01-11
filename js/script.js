window.onload = myMain;
function myMain() {
    document.getElementById("calculator__container").onclick = button;
    
}
function button(e) {
    click = document.getElementById(e.target.id).value;
    
    var rad = document.getElementById("rad");
    var deg = document.getElementById("deg");
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
        default:
            currenetOperation.value += click;
            break;
    }
    
}
