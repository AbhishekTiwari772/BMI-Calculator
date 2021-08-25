const calculateBtn = document.getElementById('calcBtn')
const height = document.getElementById('enteredHeight')
const weight = document.getElementById('enteredWeight')
const resultDiv = document.getElementById('result')
const resultRemark = document.getElementById('resultRemark')

function calculateBMI() {
    const heightVal = height.value
    const weightVal = weight.value

    if (heightVal && weightVal && heightVal !== null && weightVal !== null && weightVal !== 0 && heightVal !== 0 && heightVal > 0 && weightVal > 0){
        var BMI = (weightVal / (heightVal * heightVal)).toFixed(2)
        resultDiv.innerHTML = "Your BMI is " + BMI
    }
    else if (heightVal === 0 || weightVal === 0 || heightVal === null || weightVal === null || heightVal <= 0 || weightVal <= 0) {
        console.log("Please check the values!!")
    }
    
    if (BMI < 18.5){
        resultRemark.innerHTML = "You are Underweight!!"
    }
    else if (BMI >= 18.5 && BMI <= 24.9){
        resultRemark.innerHTML = "You are Normal!!"
    }
    else if (BMI >= 25.0 && BMI <= 29.9){
        resultRemark.innerHTML = "You are Overweight!!"
    }
    else if (BMI >= 30.0){
        resultRemark.innerHTML = "You are Obese!!"
    }
}

calculateBtn.addEventListener('click', calculateBMI)