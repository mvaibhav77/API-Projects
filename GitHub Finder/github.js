class gitHub{
    constructor(){
        this.client_id = 'a0bf054202ea734ecd15';
				this.client_secret = '8dc9a7496e6c31e8e007d417d16a447b300bec5a';
				this.repos_count  = 5;
				this.repos_sort = 'created: asc';
    }

	async getUsers(user){
		const profileRsponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client-secret=${this.client_secret}`);

		const repoResponce = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client-secret=${this.client_secret}`)

		const profile = await profileRsponse.json();

		const repos = await repoResponce.json();


		return {
				profile,repos
		}
	}

}
