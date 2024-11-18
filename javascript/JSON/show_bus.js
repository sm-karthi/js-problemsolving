window.addEventListener('DOMContentLoaded', function () {
    // Retrieve search parameters from localStorage
    const from = localStorage.getItem('searchFrom');
    const to = localStorage.getItem('searchTo');
    const date = localStorage.getItem('searchDate');

    const busList = document.getElementById('bus_list');

    // Check if search parameters exist in localStorage
    if (!from || !to || !date) {
        busList.innerHTML = "<p>Please enter search criteria for 'from', 'to', and 'date' on the previous page.</p>";
        return;
    }

    // Fetch bus data from JSON file using Fetch API
    fetch('buses.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load bus data.");
            }
            return response.json();
        })
        .then(buses => {
            // Filter buses based on search parameters
            const matchingBuses = buses.filter(bus =>
                bus.from.toLowerCase() === from.toLowerCase() &&
                bus.to.toLowerCase() === to.toLowerCase() &&
                bus.date === date
            );

            // Display buses
            if (matchingBuses.length > 0) {
                matchingBuses.forEach(bus => {
                    const busItem = document.createElement('div');
                    busItem.classList.add('bus-item');
                    busItem.innerHTML = `
                        <h3>${bus.name}</h3>
                        <p>From: ${bus.from}</p>
                        <p>To: ${bus.to}</p>
                        <p>Date: ${bus.date}</p>
                        <p>Departure: ${bus.departure}</p>
                        <p>Arrival: ${bus.arrival}</p>
                    `;
                    busList.appendChild(busItem);
                });
            } else {
                busList.innerHTML = "<p>No buses available for this route on the selected date.</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            busList.innerHTML = "<p>Could not load bus data. Please try again later.</p>";
        });
});
