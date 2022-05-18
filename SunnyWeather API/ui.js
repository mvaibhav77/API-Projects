class UI{
    constructor(){
        this.cardBody = document.querySelector('.mainBody');
        this.loader = document.getElementById('loader');
    }
    showTemp(loc){
        this.loader.style='';
        this.cardBody.innerHTML='';
        setTimeout(()=>{
            this.loader.style.display='none';
            let output=`
            <h2 class="text-secondary">${loc.location.name}</h2>
            <h5 class="text-warning">${loc.current.condition.text} <img src="${loc.current.condition.icon}" alt=""></h5>
            <h5 class="text-dark">${loc.current.temp_c}	&#8451;(${loc.current.temp_f} F)</h5>
            <ul class="list-group mt-3">
                <li class="list-group-item align-items-center border-bottom-1">
                  Humidity : ${loc.current.humidity} %
                </li>
                <li class="list-group-item align-items-center">
                  Wind : ${loc.current.wind_kph}KPH ${loc.current.wind_dir}
                </li>
                <li class="list-group-item align-items-center">
                   FeelsLike : ${loc.current.feelslike_c} &#8451;(${loc.current.feelslike_f} F)
                </li>
            </ul>
            `;
            this.cardBody.innerHTML=output;
        },1500);

    }
}