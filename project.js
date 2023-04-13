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


// const searchBar = document.getElementById('search-bar');
// const searchBtn = document.getElementById('search-btn');
// const driverList = document.getElementById('driver-list');

// searchBtn.addEventListener('click', getDrivers);

// function getDrivers() {
//   let searchQuery = searchBar.value;
//   fetch(`http://ergast.com/api/f1/${searchQuery}/drivers.json`)
//     .then(response => response.json())
//     .then(data => {
//       let driversHtml = "";
//       data.MRData.DriverTable.Drivers.forEach(driver => {
//         driversHtml += `
//           <div class="card">
//             <h3>${driver.givenName} ${driver.familyName}</h3>
//             <p>Nationality: ${driver.nationality}</p>
//             <a href="${driver.url}">Click Here</a>
//           </div>
//         `;
//       });
//       driverList.innerHTML = driversHtml;
//     })
//     .catch(error => {
//       console.error(error);
//       driverList.innerHTML = "<p>Failed to retrieve drivers</p>";
//     });
// }


// const searchBtn = document.getElementById("search-btn");
// const searchInput = document.getElementById("search-bar");
// const driverList = document.getElementById("driver-list");

// searchBtn.addEventListener("click", function() {
//   const searchText = searchInput.value;
//   let searchQuery = searchText;
//   fetch(`http://ergast.com/api/f1/${searchQuery}/drivers.json`)
//     .then(response => response.json())
//     .then(data => {
//       let driversHtml = "";
//       data.MRData.DriverTable.Drivers.forEach(driver => {
//         driversHtml += `
//           <div class="card">
//             <h3>${driver.givenName} ${driver.familyName}</h3>
//             <p>Nationality: ${driver.nationality}</p>
//             <a href="${driver.url}">Click Here</a>
//           </div>
//         `;
//       });
//       driverList.innerHTML = driversHtml;
//     })
//     .catch(error => {
//       console.error(error);
//       driverList.innerHTML = "<p>Failed to retrieve drivers</p>";
//     });
// });

  // Do something with searchText, such as search a database or perform a web search


  
  const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission

  const searchTerm = searchInput.value;
  const apiUrl = `http://ergast.com/api/f1/drivers.json?search=${searchTerm}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // clear previous search results
      searchResults.innerHTML = '';

      const drivers = data.MRData.DriverTable.Drivers;
      drivers.forEach(driver => {
        // create a new element to display each driver's name
        const driverElement = document.createElement('div');
        driverElement.textContent = `${driver.givenName} ${driver.familyName}`;
        searchResults.appendChild(driverElement);
      });
    })
    .catch(error => console.error(error));
});
