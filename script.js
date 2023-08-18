let currentValue='';

function appendValue(value){
    currentValue+=value;
    document.getElementById('result').value=currentValue;
}

function clearResult(){
    currentValue='';
    document.getElementById('result').value='';
}

function deleteLast(){
    currentValue=currentValue.slice(0,-1);
    document.getElementById('result').value=currentValue;
}

function calculate(){
    try{
        const result=eval(currentValue);
        document.getElementById('result').value=result;
        currentValue='';
    }
    catch(error){
        document.getElementById('result').value='Error';
    }
}