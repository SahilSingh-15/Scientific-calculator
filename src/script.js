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
        .replace("sin","Math.sin")
        .replace("cos","Math.cos")
        .replace("ln","Math.log")
        .replace("π","Math.PI")
        .replace("log","Math.log10")
        .replace("e","Math.E")
        .replace("tan","Math.tan")
        .replace("√","Math.sqrt")
        console.log('Converted value:',convertedvalue);
        const result=eval(convertedvalue);
        currentValue=result.toString();
        display.value=currentValue;
    }

    for (let i=0;i<buttons.length;i++){
        const button=buttons[i];
        button.addEventListener('click',function(){
            const value=button.innerText;

            try{
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
            }
            catch(error){
                console.error(error);
                currentValue="ERROR";
                display.value=currentValue;
            }
        
        })
    }


});