const form = document.querySelector('form')

// const height = document.querySelector("#height")     -> If used here -> it will take empty values


form.addEventListener('submit', (event) =>{
    event.preventDefault();          // To not post the form to server

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")

    console.log("Height : ", height)
    console.log("Weight : ", weight)

    if(height === '' || height < 0 || isNaN(height))
        result.innerHTML = "Please give a valid height !"
    else if(weight === '' || weight < 0 || isNaN(weight))
        result.innerHTML = "Please give a valid weight !"
    else
    {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        console.log(bmi)
        result.innerHTML = `<span>BMI : ${bmi}</span>`
    }
})