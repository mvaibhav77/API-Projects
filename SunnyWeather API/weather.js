class Weather{
    constructor(){
        this.host = 'weatherapi-com.p.rapidapi.com';
        this.key = 'e5648c18e2msh101eed599cac488p1aa374jsnc2d3358fd671';
    }

    async getTemp(loc){
        const tempResp = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${loc}`,{
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': this.host,
                'X-RapidAPI-Key': this.key
            }
        });
        const temp = await tempResp.json();
        return temp;
    }

}






















// const options = {
	// method: 'GET',
	// headers: {
	// 	'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
	// 	'X-RapidAPI-Key': 'e5648c18e2msh101eed599cac488p1aa374jsnc2d3358fd671'
	// }
// };

// fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Raigarh', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response.current.temp_c))
// 	.catch(err => console.error(err));

