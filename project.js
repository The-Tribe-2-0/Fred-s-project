// 




function getDriver() {
    let finding = document.getElementById('search-btn').value;
    let driverList = document.getElementById('driver-list');
    driverList.innerHTML = ""; // clear the previous search results
    let myHtml = "";
  
    fetch(`http://ergast.com/api/f1/drivers/${finding}.json`)
      .then(response => response.json())
      .then(data => {
        // loop through each driver and create a card for them
        data.drivers.forEach(driver => {
          myHtml += `
            <div class="card">
              <div class="card-details">
                <h3>${driver.driverId}</h3>
                <h4>${driver.url}</h4>
              </div>
            </div>
          `;
        });
        driverList.innerHTML = myHtml;
      })
      .catch(error => {
        console.error(error);
        driverList.innerHTML = "Error fetching data. Please try again.";
      });
  }