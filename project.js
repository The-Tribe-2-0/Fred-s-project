
// function getDriver() {
//     let finding = document.getElementById('search-btn').addEventListener("click");
//     let driverList = document.getElementById('driver-list');
//     driverList.innerHTML = ""; // clear the previous search results
//     let myHtml = "";
  
//     fetch(`http://ergast.com/api/f1/drivers/${finding}.json`)
//       .then(response => response.json())
//       .then(data => {
//         // loop through each driver and create a card for them
//         data.drivers.forEach(driver => {
//           myHtml += `
//             <div class="card">
//               <div class="card-details">
//                 <h3>${driver.driverId}</h3>
//                 <h4>${driver.url}</h4>
//               </div>
//             </div>
//           `;
//         });
//         driverList.innerHTML = myHtml;
//       })
//       .catch(error => {
//         console.error(error);
//         driverList.innerHTML = "Error fetching data. Please try again.";
//       });
//   }

const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", getDriver);

function getDriver() {
  fetch("http://ergast.com/api/f1/drivers.json")
    .then(response => response.json())
    .then(data => {
      let html = "";
      data.forEach(driver => {
        html += `
          <div class="card">
            <div class="card-details">
              <h3>${driver.driverId}</h3>
              <h4>${driver.url}</h4>
            </div>
          </div>
        `;
      });
      document.getElementById("search-results").innerHTML = html;
    })
    .catch(error => {
      console.error(error);
    });
}


  
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
