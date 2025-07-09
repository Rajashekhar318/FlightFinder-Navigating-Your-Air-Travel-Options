function fetchFlights() {
  fetch('http://localhost:3000/api/flights')
    .then(res => res.json())
    .then(data => {
      const flightList = document.getElementById('flightList');
      flightList.innerHTML = '';
      data.forEach(flight => {
        const li = document.createElement('li');
        li.textContent = `${flight.from} → ${flight.to} - ${flight.price}`;
        flightList.appendChild(li);
      });
    })
    .catch(err => console.error('Error fetching flights:', err));
}
