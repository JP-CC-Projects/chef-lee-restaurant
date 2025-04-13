// import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
// import { Library } from '@googlemaps/js-api-loader';
// import mapStyles from './MapComponentStyle';

// const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

// const options = {
//   styles: mapStyles,
//   streetViewControl: false,
//   mapTypeControl: false
// };

// const center = {
//   lat: 38.08147784030874,
//   lng: -77.85059984686582
// };
// const containerStyle = {
//   width: '100%',
//   height: '60vh'
// };
// const libraries: Library[] = ['geometry', 'drawing'];

// const MapComponent = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: apiKey,
//     libraries
//   });
//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={14}
//       options={options}
//     >
//       <MarkerF
//         position={{ lat: 37.70021602095869, lng: -77.8867058076346 }}
//       />
//     </GoogleMap>
//   );
// }

// export default MapComponent;


import mapImage from '../../../../assets/map.png';

const containerStyle = {
  width: '100%',
  height: '60vh'
};

const MapComponent = () => {
  return (
    <div style={containerStyle}>
      <img
        src={mapImage}
        alt="Map"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default MapComponent;
