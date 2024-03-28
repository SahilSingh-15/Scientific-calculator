document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready");
    const display =document.getElementById('calc-display');
    const buttons= document.getElementsByClassName('btn');
    
    // console.log(display);
    // console.log(buttons);
    // buttons[0].addEventListener('click',function(){
    //     console.log('first button clicked');

    // });
    let currentValue = "";

    function evaluateResult(){
        console.log('current value:',currentValue);
        const convertedvalue=currentValue
        .replace("×","*")
        .replace("÷","/")
        .replace("%","*0.01")
        console.log('Converted value:',convertedvalue);
        const result=eval(convertedvalue);
        currentValue=result.toString();
        display.value=currentValue;
    }

    for (let i=0;i<buttons.length;i++){
        const button=buttons[i];
        button.addEventListener('click',function(){
            const value=button.innerText;

            if(value=='AC'){
                currentValue="";
                display.value=currentValue;


            }
            else if(value=='='){
                evaluateResult();

            }
            else{
              
            currentValue+=value;
            console.log('current value:',currentValue);
            display.value=currentValue;

            }
        
        })
    }


});