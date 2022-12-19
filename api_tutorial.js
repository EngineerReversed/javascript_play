const url = "https://api.covid19api.com/countries";

fetch(url, {
    method: 'GET',
    headers: {
        'accept': 'application/json',
    }
}).then((response)=>{
    return response.json()
}).then((response)=>{
    console.log(response)
});