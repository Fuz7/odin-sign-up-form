let pass = document.getElementById("password")
let confirmPass = document.getElementById("confirmPassword")
let form = document.getElementById("form")
let submitButton = document.getElementById("submitButton")
let allForm = document.getElementsByClassName("textInput")
let allFormArray = Array.from(allForm)
let secondColumn = document.getElementsByClassName("secondCol")[0]
let thirdColumn = document.getElementsByClassName("thirdCol")[0]




confirmPass.addEventListener("input", function(){
    if (confirmPass.value !== pass.value){
        confirmPass.classList.add("error")
    }else{
        confirmPass.classList.remove("error")
        confirmPass.classList.add('valid')
    }
})

submitButton.addEventListener('click', function(e){

    if (form.checkValidity() && confirmPass.classList.contains("valid")){
        form.submit()
    }else if(confirmPass.classList.contains('error') && confirmPass.value.length > 7){
        e.preventDefault()
        confirmPass.setCustomValidity("Password do not match")
        confirmPass.reportValidity()
    }else{
        e.preventDefault()
        form.reportValidity()
    }

})

allFormArray.forEach(function(item) {
    item.addEventListener("input", function(){
    if (form.checkValidity() && confirmPass.classList.contains("valid")){
        secondColumn.classList.add('valid')
        thirdColumn.classList.add('valid')
        submitButton.classList.add('valid')
    }else{
        secondColumn.classList.remove("valid")
        thirdColumn.classList.remove('valid')
        submitButton.classList.remove('valid')
    }
})})

confirmPass.addEventListener('input',function(){
    if (form.checkValidity() && confirmPass.classList.contains("valid")){
        secondColumn.classList.add('valid')
        thirdColumn.classList.add('valid')
        submitButton.classList.add('valid')
    }else{
        secondColumn.classList.remove("valid")
        thirdColumn.classList.remove('valid')
        submitButton.classList.remove('valid')
    }
})