const timezoneSelector = document.getElementById('timezone-selector');
const locationDisplay = document.getElementById('location');

function updateClock() {
    const now = new Date();
    const selectedZone = timezoneSelector.value;
    const selectedLocation = timezoneSelector.options[timezoneSelector.selectedIndex].textContent;

    locationDisplay.textContent = selectedLocation;
    
    // Configuration object for formatting the time
    let timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    
    // Configuration object for formatting the date
    let dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };

    // If a specific timezone is selected, inject it into the options
    if (selectedZone !== 'local') {
        timeOptions.timeZone = selectedZone;
        dateOptions.timeZone = selectedZone;
    }

    // 1. Get the formatted time string (e.g., "03:45:12 PM")
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    
    // 2. Separate the numbers from the AM/PM part
    // The timeString looks like "03:45:12 PM", splitting by space gives ["03:45:12", "PM"]
    const [timeParts, ampm] = timeString.split(' ');
    const [hours, minutes, seconds] = timeParts.split(':');

    // 3. Inject values into the DOM
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
    
    // 4. Update the localized date
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', dateOptions);
}

// Listen for dropdown changes to instantly update the clock visually
timezoneSelector.addEventListener('change', updateClock);

// Run clock immediately on load, then update every second
updateClock();
setInterval(updateClock, 1000);

