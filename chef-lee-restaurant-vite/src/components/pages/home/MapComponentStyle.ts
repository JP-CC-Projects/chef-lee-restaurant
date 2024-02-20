const mapStyles = [
    { elementType: "geometry", stylers: [{ color: "#505052" }] }, // Lighter black (dark grey) for background
    // Labels have visibility on by default
    { elementType: "labels", stylers: [{ visibility: "on" }] },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ visibility: "on" }, { color: "#f0e68c" }] // Lighter gold color for text fill
    },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.stroke",
        stylers: [{ visibility: "on" }, { color: "#202020" }] // Lighter black (dark grey) for text stroke
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ visibility: "on" }, { color: "#f0e68c" }] // Lighter gold color for road label text fill
    },
    {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [{ visibility: "on" }, { color: "#202020" }] // Lighter black (dark grey) for road label text stroke
    },
    // Increase visibility and quantity of street labels
    {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "on" }]
    },
    // Hide points of interest
    { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] },
    // Transit features visibility
    { featureType: "transit", elementType: "all", stylers: [{ visibility: "on" }] },
    // Style roads with specific colors
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#383838" }] },
    // Display and style country borders
    {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [{ color: "#f0e68c" }] // Lighter gold color for country borders
    },
    // Display and style state borders
    {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [{ color: "#f0e68c" }] // Lighter gold color for state borders
    },
    // Update park colors
    {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{ color: "#424242" }] // Lighter grey for park fill
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f0e68c" }] // Lighter gold for park label text fill
    },
    // Update water body colors
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#2c3e50" }] // Lighter dark blue for water bodies
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f0e68c" }] // Lighter gold for water label text fill
    },
    // Turn off visibility of highway/freeway/interstate signs
    {
        featureType: "road.highway",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
    },
];

export default mapStyles;
