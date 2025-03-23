addEventListener("DOMContentLoaded", () =>{
    const cityInput = document.getElementById("cityInput")
    const btn = document.getElementById("btn")
    // const errormsg = document.getElementById("errormsg") 
    // stringerror = "Kindky check the city "


    
    // let city = "Mohali"
    const API_KEY = "11046b3cc32897ce06766813402ad744"

    
    // function location(){
    //     const cityValue = cityInput.Value
    //     if(cityValue === ""){
    //         alert("Something went wrong")
    //     }
    // }
    function getWeatherData(){
        let city = cityInput.value.trim()
        if(!city){
            alert("Enter the city")
            return
        }
        cityInput.value = " "
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                // document.getElementById("errormsg").textContent = stringerror
                alert("City not found!")
                throw new Error('Network response was not ok'); 
                // alert("Kindly Check the name of the city")
            }
        })
        .then(data => {
            console.log(data);
            const cityName =` The Weather in ${data.name}`
            const temp = data.main.temp
            const wind = data.wind.speed
            const description = data.weather[0].description
            const a = Math.round(temp - 273.15) + '°C';
            const icon = data.weather[0].icon

            
            console.log(cityName, temp, wind , description);

            document.getElementById("cityName").textContent = cityName
            document.getElementById("description").textContent = description
            // document.getElementById("temp").textContent = temp = `${Math.round(temp - 273.15)}°C`
            document.getElementById("temp").textContent = a
            // document.getElementById("wind").textContent = wind
            document.getElementById("icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`
            })
        .catch(error => console.error('There was a problem with the fetch operation:', error));

    
    }
    btn.addEventListener("click", ()=>{
    getWeatherData()
   })

})






// addEventListener("DOMContentLoaded", () =>{
//     const cityInputValue = document.getElementById("cityInput")
//     const btn = document.getElementById("btn")
//     // Data Display

//     // const cityName = document.getElementById("cityName")
//     // const description = document.getElementById("description")
//     // const temp = document.getElementById("temp")
//     // const wind = document.getElementById("wind")

//     // let city = "Mohali"
//     const API_KEY = "11046b3cc32897ce06766813402ad744"
//     // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
//     // const data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
//     // console.log(data);


//     function cityInput(){
//         const cityValue = cityInputValue.ariaValueMax.trim()
//         if(!cityValue){
//             alert("Something went wrong")
//         }
//     }
//     function getWeatherData(city){
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error('Network response was not ok'); 
//             }
//         })
//         .then(data => {
//             console.log(data);
//             const cityName = data.name
//             const temp = data.main.temp
//             const wind = data.wind.speed
//             const description = data.weather[0].description
//             console.log(cityName, temp, wind , description);

//             // cityName.textContent = cityName
//             // description.textContent = description
//             // temp.textContent = temp
//             // wind.textContent = wind

            
//             document.getElementById("cityName").textContent = cityName
//             document.getElementById("description").textContent = description
//             document.getElementById("temp").textContent = temp
//             document.getElementById("wind").textContent = wind
//             })
//         .catch(error => console.error('There was a problem with the fetch operation:', error));
        
//     }
//     btn.addEventListener("click", ()=>{

//     // cityInput.value.trim()
//     getWeatherData(input)
//    })


// })


    
//     const API_KEY = "e3ee30ee5c00897c4413aa0b1ba224f6"
//     // const url =`https://api.openweathermap.org/data/3.0/weather?q=${city}&units=metric&apiid=${API_key}`




// //    async function getWeatherData(city){
// //         try {
// //             const response = await fetch(`https://api.openweathermap.org/data/3.0/weather?q=${city}&units=metric&apiid=${API_key}`)

// //             if(!response.ok){
// //                 throw new Error(`Response Status: ${response.status}`)  
// //             }
            
// //             const json = response.json()
// //             console.log(response);
            
// //         }
    
// //         catch (error){
// //             console.error(error);
// //     }

// //     }


// // city = "london"
// function getWeatherData(){
//     let data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
// `)
// }
//     // btn.addEventListener("click", () =>{
//     //     cityInput.value.trim()
//     //     getWeatherData()

//     // })
//     function click(){
//         cityInput.value.trim()
//         getWeatherData()
//     }

    
// console.log(data);
    
// })
