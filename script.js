// Use insert() function to insert the number in textview.
function insert(num){
    document.form1.textview.value = document.form1.textview.value + num ;
}

// Use equal() function to return the result based on passed values.
function equal(){
    let result = document.form1.textview.value;
    if(result){
        document.form1.textview.value = eval(result);
    }
}

//Use backspace() function to remove the number at the end of the numeric series in textview.
function backspace(){
   let res =  document.form1.textview.value;
   document.form1.textview.value = res.substring(0, res.lenght - 1);
}