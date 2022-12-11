// request refresh token

fetch(`https://freddy.codesubmit.io/refresh`,{
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',    
        'authorization': `Bearer ${localStorage.getItem("refresh_token")}`
    },
})


// Request Bearer token 
fetch(`https://freddy.codesubmit.io/dashboard`, {
   method: "GET",
   headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',    
       'authorization': `Bearer ${localStorage.getItem("access_token")}`
   },
  
  
})
.then(res => {
    console.log(res)
    if (res.status !== 200) {
        throw Error("ERROR")
    }
   return res.json()   
}).then(data =>{
    console.log(data.dashboard.bestsellers)
    const display = data.dashboard.bestsellers

   

    display.forEach((product_name) => {console.log(product_name.product.name)})


}).catch(err =>{
    console.log(err)
})










// Logout 

const logout = function logout(){
    window.location.assign("../login/login.html")
}


// chart

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Today', 'Yesterday', 'day 3', 'day 4', 'day 5', 'day 6', 'day 7'],
        datasets: [{
            label: 'Life expectancy',
            data: [84.308, 84.188, 84.118, 83.706, 83.5, 83.468, 87.468],
            backgroundColor: [
                
               
               
            ],
            borderColor: [
               
            
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            
            position: 'top',
            fontSize: 26,
            // padding: 20,
            
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 75
                }
            }],
            xAxes: [{
                barPercentage: 0.2
            }]
        },
      
    }
});