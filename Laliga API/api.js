class Liga{
    // constructor(){
    //     this.season = new Date().getFullYear();        
    // }  

    async getStandings(){
        // console.log(this.season);
        const tableResponce = await fetch(`https://api-football-beta.p.rapidapi.com/standings?league=140&season=2021`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
                'X-RapidAPI-Key': 'e5648c18e2msh101eed599cac488p1aa374jsnc2d3358fd671'
            }
        });
        const standings = await tableResponce.json();
        return standings;
    }
}
