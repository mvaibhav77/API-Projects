class UI{
   constructor(){
		this.profile = document.getElementById('profile');
    }

	 
	 showProfile(user){
		this.profile.innerHTML = `
		<div class="card card-body mb-3">
			<div class="row">
				<div class="col-md-3">
					<img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
					<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
				</div>
				<div class="col-md-9">
					<span class="badge bg-primary">Public Repos : ${user.public_repos}</span>
					<span class="badge bg-secondary">Public Gists : ${user.public_gists}</span>
					<span class="badge bg-success">Followers : ${user.followers}</span>
					<span class="badge bg-info">Following : ${user.following}</span>
					<ul class="list-group mt-3">
						<li class="list-group-item">Company : ${user.company}</li>
						<li class="list-group-item">Website/Blog : ${user.blog}</li>
						<li class="list-group-item">Location : ${user.location}</li>
						<li class="list-group-item">Membership since : ${user.created_at}</li>
					</ul>
				</div>
				
			</div>
		</div>
		<h3 class="page-heading mb-3">
			Latest Repositories
		</h3>
		<div id="repos"></div>
		`
	}

	// show repose
	showRepos(repos){
		let output ='';
		
		repos.forEach((repo)=>{
			output+=`
			<div class="card card-body mb-2">
				<div class="row">
					<div class="col-md-6">
						<a href="${repo.html_url}" target="_blank">${repo.name}</a>
					</div>
					<div class="col-md-6">
						<span class="badge bg-primary">Stars : ${repo.stargazers_count}asa</span>
						<span class="badge bg-secondary">Watchers : ${repo.watchers_count}</span>
						<span class="badge bg-success">Forks : ${repo.forms_count}</span>
					</div>
				</div>
			</div>
			`
		})

		document.getElementById('repos').innerHTML=output;
	}

	// Show Alert Msg
	showAlert(){
		if(!(document.getElementById('error'))){	
			const error = document.createElement('div');
			error.className = 'alert alert-dismissible alert-danger';
			error.id = 'error';
			error.appendChild(document.createTextNode('User not found!!'));
			const container=document.querySelector('.searchContainer');
			const search = document.querySelector('.search');
			container.insertBefore(error,search);
			setTimeout(()=>{
				error.style.display='none';
			},2000)
		}
	}

}