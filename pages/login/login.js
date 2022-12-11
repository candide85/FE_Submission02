
const form = document.getElementById('form');
form.addEventListener('submit', async function(e){
    e.preventDefault();    

    const res = await fetch(`https://freddy.codesubmit.io/login`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',            
        },
        credentials: "same-origin",
        body: JSON.stringify({
            "username": 'freddy',
            "password": 'ElmStreet2019'
        })
        // password : ElmStreet2019
        // username : freddy
    })

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    const data = await res.json()

    
    const access_token = localStorage.setItem("access_token", data.access_token);
    const refresh_token = localStorage.setItem("refresh_token", data.refresh_token);
    

    if(user == 'freddy' && pass == "ElmStreet2019"){
        window.location.assign("../dashboard/dashboard.html")
        alert("Login Successfully")
    }else{
        alert("wrong credentials")
        return
    }
    
    
})




  