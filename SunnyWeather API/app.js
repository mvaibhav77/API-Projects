const weather = new Weather;
const ui =new UI;
// UI Elements
const searchName = document.getElementById('searchName');
const search = document.getElementById('search');

// Event Listeners

search.addEventListener('click',(e)=>{
    weather.getTemp(searchName.value)
     .then(data => {
        // console.log(data);
        ui.showTemp(data); 
        })
      .catch(err => console.log(err))
})