

const places = [
    new Place("Paris, France", 
        ["Eiffel Tower", "Louvre Museum", "Notre Dame Cathedral"], 
        "Spring 2023", 
        "The city of lights lived up to its name. Spent hours at cafes watching the world go by. The croissants are as amazing as everyone says!"),
    
    new Place("Tokyo, Japan", 
        ["Shibuya Crossing", "Tokyo Skytree", "Senso-ji Temple", "Meiji Shrine"], 
        "Fall 2022", 
        "Incredible blend of ancient tradition and futuristic technology. The attention to detail everywhere was mind-blowing. Best sushi of my life."),
    
    new Place("New York City, USA", 
        ["Statue of Liberty", "Central Park", "Times Square", "Brooklyn Bridge"], 
        "Summer 2021", 
        "The energy is palpable! Never a dull moment. Saw a Broadway show and ate the best pizza in Brooklyn.")
];

function displayAllPlaces() {
    const container = document.getElementById('places-container');
    
    if (places.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>No places added yet. Start your journey!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    places.forEach((place) => {
        const placeElement = document.createElement('div');
        placeElement.className = 'place-card';
        placeElement.innerHTML = `
            <h3>${place.location}</h3>
            <p class="time">Visited: ${place.timeOfYear}</p>
            <p class="landmark-preview">Landmarks: ${place.landmarks.slice(0, 2).join(', ')}${place.landmarks.length > 2 ? '...' : ''}</p>
        `;
        
        placeElement.addEventListener('click', () => {
            showPlaceDetails(place);
        });
        
        container.appendChild(placeElement);
    });
}

function showPlaceDetails(place) {
    const detailsDiv = document.getElementById('place-details');
    
    detailsDiv.style.display = 'block';
    detailsDiv.innerHTML = `
        <h2>${place.location}</h2>
        
        <div class="detail-item">
            <span class="detail-label">Landmarks:</span>
            <span class="detail-value">${place.landmarks.join(', ')}</span>
        </div>
        
        <div class="detail-item">
            <span class="detail-label">When I went:</span>
            <span class="detail-value">${place.timeOfYear}</span>
        </div>
        
        <div class="detail-item">
            <span class="detail-label">My memories:</span>
            <span class="detail-value">${place.notes}</span>
        </div>
        
        <div class="code-output">
            <p><strong>Business Logic Output:</strong> (from displayInfo() method)</p>
            <code>${place.displayInfo()}</code>
        </div>
    `;
    
    // Scroll to details
    detailsDiv.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    displayAllPlaces();
    
    // Show first place by default
    if (places.length > 0) {
        showPlaceDetails(places[0]);
    }
});