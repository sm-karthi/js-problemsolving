document.getElementById('searchButton').addEventListener('click', function () {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    // Check if all fields are filled
    if (!from || !to || !date) {
        alert("Please fill in all fields to search for buses.");
        return;
    }

    // Store search parameters in localStorage
    localStorage.setItem('searchFrom', from);
    localStorage.setItem('searchTo', to);
    localStorage.setItem('searchDate', date);

    // Redirect to bus_show.html
    window.location.href = 'bus_show.html';
});
