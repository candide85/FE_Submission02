
const form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const payload = new FormData(form);

    console.log([... payload]);

    fetch(`https://freddy.codesubmit.io/login`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'access-token',
            'Authorization':'refresh-token'
        },
        body: JSON.stringify({
            "username": 'freddy',
            "password": 'ElmStreet2019'
        })
    })
    .then(data => {console.log(data.body)})
    
    
})




  