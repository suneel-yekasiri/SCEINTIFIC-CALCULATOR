 var screen = document.querySelector('#screen');
    var btnText = document.querySelectorAll('.numOp');
    

    for(item of btnText){
        item.addEventListener('click', (e) => {
            btnText = e.target.innerText;
            if(btnText== '^')
            {
                btnText = '**';
            }
            if(btnText == '(-)'){
                btnText = '-';
            }
            if(btnText=='nCr'){
                btnText = 'C';
            }
            if(btnText=='nPr'){
                btnText = 'P';
            }
            screen.value += btnText;
        });
    }

// function for voice notes
let audio1 = new Audio('assets/button.mp3');
let audio2 = new Audio('assets/equals.mp3');

function keySound(){
    audio1.play();
}
function equalSound(){
    audio2.play();
}
// function declaration for  individual functioning keys 
function del(){
    screen.value = screen.value.substr(0, screen.value.length-1)
}

function fact(num)
 { if (num === 0 || num === 1) return 1; 
    for (var i = num - 1; i >= 1; i--)
     { num *= i; } 
     return num; }

function cubic(){
    screen.value = Math.pow(screen.value,3);
}

function square(){
    screen.value = Math.pow(screen.value,2);
}

function cubicRoot(){
    screen.value = Math.cbrt(screen.value);
}
function sqrRoot(){
    screen.value = Math.sqrt(screen.value);
}

function log(){
    screen.value = Math.log(screen.value);
}
function sin(){
    screen.value = Math.sin(screen.value)
}
function sinInverse(){
    screen.value = Math.asin(screen.value)
}
function cos(){
    screen.value = Math.cos(screen.value)
}
function cosInverse(){
    screen.value = Math.acos(screen.value)
}
function tan(){
    screen.value = Math.tan(screen.value)
}
function tanInverse(){
    screen.value = Math.atan(screen.value)
}
function Euler(){
    screen.value += 2.71828182;
}

function rec(){
    screen.value = 1/(screen.value);
}
function pi(){
    screen.value += 22/7;
}
function percentValue(){
    screen.value = screen.value/100;
}
// eval function declaration

function resultEquals()
    {
       
            // code for factorial key 

        if(btnText.includes('!')){
            let factNum = screen.value.substr(0,screen.value.length - 1);
            return screen.value = fact(factNum);
           
        }

        // code for nCr key 

       if(screen.value.includes('C')){
            let n,r,result;
            n= screen.value[0];
            r= screen.value[2];
            result = fact(n)/((fact(r))*(fact(n-r)));
            return screen.value = result;
            
        }

         // code for nPr key 

       if(screen.value.includes('P')){
            let n,r,result;
            n= screen.value[0];
            r= screen.value[2];
            result = fact(n)/fact(n-r);
            return screen.value = result;
            
        }
    //    code for basic arithmetic operations

    if(screen.value.includes('+')){
        return screen.value = eval(screen.value);
    }
    if(screen.value.includes('-')){
        return screen.value = eval(screen.value);
    }
    if(screen.value.includes('/')){
        return screen.value = eval(screen.value);
    }
    if(screen.value.includes('*')){
        return screen.value = eval(screen.value);
    }

    }
