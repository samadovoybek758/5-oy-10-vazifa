const KEY = '96b947a45d33d7dc1c49af3203966408';


// request
const getData = async(city) =>{
    const base = 'https://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&units=metric&appid=${KEY}`;

    const req = await fetch(base + query);
    const data = await req.json()
    return data
}



// get weather 
const getWeather = async function (city) {
    const data = await getData(city);

    return data
}


export{getData,getWeather}