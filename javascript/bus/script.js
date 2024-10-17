document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    var source = document.querySelector('input[name="source"]').value;
    var destination = document.querySelector('input[name="destination"]').value;
    var date = document.querySelector('input[name="date"]').value;

    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ source, destination, date })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Available buses:', data);
        // Update the UI with available buses
    })
    .catch(error => console.error('Error:', error));
});
