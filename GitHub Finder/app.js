const github = new gitHub;
const ui = new UI;

const searchUser = document.getElementById('searchName');

// Search input event function
searchUser.addEventListener('keyup', (e)=>{
    // get input text
    const username = e.target.value;

    if(username !== ''){
        github.getUsers(username)
         .then(data =>{
             if(data.profile.message!=='Not Found'){
                //  Show profile
                //  console.log(data);
                ui.showProfile(data.profile);
                ui.showRepos([data.repos]);

             }else{
                // Show Alert
                // console.log(`No user with username "${username}"`)
                // alert(`"${username}" not found!!!!`)
                ui.showAlert();

             }
         });
    }else{
        // Clear Profile
        document.getElementById('profile').innerHTML='';
    }
    e.preventDefault();
});

