let time_chunk1 = document.querySelector("#time-chunk1")
let time_chunk2 = document.querySelector("#time-chunk2")
var city_name = "monterrey"
var city_name2 = "berlin"

async function get_timezones(city){
    try {
        const res = await axios.get('https://enigmatic-caverns-01292.herokuapp.com/api/v1/time_chunks/'+ city)
        return res.data

    } catch (error) {
        console.log(error)
    }
}

function create_time_chunk(data, time_chunk){
    let city = document.createElement('p')
    let time = document.createElement('p')
    let message = document.createElement('p')
    city.innerText = data.city
    time.innerText = data.current_time
    message.innerText = data.message
    if(time_chunk == 1){
        time_chunk1.appendChild(city)
        time_chunk1.appendChild(time)
        time_chunk1.appendChild(message)
    }else{
        time_chunk2.appendChild(city)
        time_chunk2.appendChild(time)
        time_chunk2.appendChild(message)
    }
}

function add_data(){
    (async () => {
        let time_data = await get_timezones(city_name)
        let time_data2 = await get_timezones(city_name2)
        create_time_chunk(time_data,1)
        create_time_chunk(time_data2,2)
    })()
}

document.addEventListener("DOMContentLoaded", function(event){
    add_data()
});
