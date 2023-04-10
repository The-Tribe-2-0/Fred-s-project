// fetch("http://localhost:3000/MRData")
// .then(res => res.json())
// .then(data => console.log(data))
 
// fetch("http://localhost:3000/MRData"),then((data)=>{
//     //console.log(data)
//     return data.json();
// }).then((completedata)=>{
//     console.log(completedata[2].title)
//     document.getElementById('root').
//     innerHTML=completedata[2].title;
// });
const searchBar = document.getElementById('search-btn')
const mysearchBtn = document.getElementById('root');
const driverList = document.getElementById('container');

searchBar.addEventListener('click', getDriver);

function getDriver(){
  let finding = document.getElementById('search-btn').value;
  fetch('http://ergast.com/api/f1/drivers.json')
    .then(response => response.json())
    .then(data => {
        let myHtml = "";
      // loop through each driver and create a card for them
      data.Drivers.forEach(driver => {
        myHtml +=`
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = 
          <div class="card-details">
            <h3>${driver.driverId}</h3>
            <h4>${driver.url}</h4>
          </div>
        `;
      });
      driverList.innerHTML+= myHtml;
    });
}
