function getInputValueById (inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputFieldString = inputField.value
    const inputFieldValue = parseFloat(inputFieldString)
    inputField.value = '';
    return inputFieldValue;
}
function getTextValueById (textFieldId){
    const textField = document.getElementById(textFieldId)
    const textFieldString = textField.innerText;
    const textFieldValue = parseFloat(textFieldString)
    return textFieldValue;
}
function setTextElementValueById(textFieldId, newValue){
    const textField = document.getElementById(textFieldId)
    textField.innerText= newValue;
}