let form = document.querySelector('form')
let input = document.querySelector('input')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let img = document.querySelector('img')

async function getData(e){
    e.preventDefault()
    try{
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=5bf93f3a9b06437890e62654232702&q=${input.value}&aqi=yes`)
        const data = await res.json()
        h2.innerText = data.location.name
        h1.innerText = data.current.temp_c
        let icon = 'https:' + data.current.condition.icon
        img.setAttribute("src" , icon)
    }catch(error){
        window.alert("Enter Valid City Name")
    }
    form.reset()
}

form.addEventListener("submit" , getData)


let word = "I Am"
let name = "Batman"

// console.log(word + " " + name)
// console.log(`${word} ${name}`)
// ("")
// ('')
// (``)

// console.log(" I am 'Imran' Khan")