class UI{
    showStandings(standings){
        const table = document.createElement('table');
        table.className='table table-hover';
        let output=`
        <thead>
            <tr>
            <th scope="col" colspan="10">Club</th>
            <th scope="col">MP</th>
            <th scope="col">WIN</th>
            <th scope="col">LOSS</th>
            <th scope="col">GF</th>
            <th scope="col">GA</th>
            <th scope="col">GD</th>
            <th scope="col">Pts</th>    
            </tr>
        </thead>
        `;

    }
}