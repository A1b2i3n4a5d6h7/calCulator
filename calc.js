function displayData(n){
    result.value+=n
}

function allClear(){
    result.value=""
}

function backSpace(){
    result.value=result.value.slice(0,-1)
}

function outPut(){
    result.value=eval(result.value)
}