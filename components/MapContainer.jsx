// import React from "react";
// import { Map, Marker, TileLayer } from "react-leaflet-universal";
// import { Icon } from "leaflet";

// const driverIcon = new Icon({
//   iconUrl: "https://www.flaticon.com/svg/static/icons/svg/738/738000.svg",
//   iconSize: [30, 30],
// });
// const restaurantIcon = new Icon({
//   iconUrl: "https://www.flaticon.com/svg/static/icons/svg/3075/3075977.svg",
//   iconSize: [30, 30],
// });
// const MapContainer = ({ order }) => {
//   return (
//     <Map
//       center={[
//         order.restaurant ? order.restaurant.latitude : 0,
//         order.restaurant ? order.restaurant.longitude : 0,
//       ]}
//       zoom={12}
//     >
//       <TileLayer
//         url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker
//         position={[
//           order.restaurant ? order.restaurant.latitude : 0,
//           order.restaurant ? order.restaurant.longitude : 0,
//         ]}
//         icon={restaurantIcon}
//       />
//       { order.courier &&
//         <Marker
//           position={[
//             order.courier ? order.courier.latitude : 0,
//             order.courier ? order.courier.longitude : 0,
//           ]}
//           icon={driverIcon}
//         />
//       }
//     </Map>
//   );
// };

// export default MapContainer;
