import { useRef, useEffect } from "react";
import { PARTNERS } from "../../dummy-partners";
//AIzaSyBrMaVE3bcyVZtSj35c2V8qELGsrx1IctM
export default function RentForm({inputStartRent, inputEndRent, partners, onChangePlace}) {
  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  const inputRef = useRef();
  // console.log(window.google);
  const options = {
    componentRestrictions: { country: "fr" },
    // fields: ["address_components", "geometry", "icon", "name"],
    types: ["(cities)"]
  };
  
  useEffect(() => {
    function compare(a,b) {
      if (a.distance < b.distance)
         return -1;
      if (a.distance > b.distance)
        return 1;
      return 0;
    }

    // console.log(inputRef.current);
    const autoComplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    )
    autoComplete.addListener('place_changed', () => {
      const place = autoComplete.getPlace();
      // console.log(place);
      if (!place.geometry || !place.geometry.location) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
          alert("this location not available")
      }
      if (place.geometry.viewport || place.geometry.location) {
          // do something
          // console.log(place.geometry.location);
          // console.log(place.geometry.location.lat());
          // console.log(place.geometry.location.lng());
          // console.log(getDistanceFromLatLonInKm(place.geometry.location.lat(), place.geometry.location.lng(), PARTNERS[0].location.lat, PARTNERS[0].location.lng));
          // let partnersUpdated = PARTNERS;
          let partnersUpdated = [...partners];
          partnersUpdated.forEach(partner => {
            partner.distance = getDistanceFromLatLonInKm(
              place.geometry.location.lat(), 
              place.geometry.location.lng(), 
              partner.location.lat, 
              partner.location.lng
            );

            return partner;
          });
          onChangePlace(partnersUpdated.sort(compare));
      }
    })
  }, []);

  return (
    <form className="flex flex-col w-full gap-8">
      <input ref={inputRef} type="text" name="partner" placeholder="Ville de départ" className="bg-transparent border-b-1 border-white text-white py-2" />
      <input ref={inputStartRent} type="datetime-local" name="start_rent" defaultValue="2024-05-24T17:26" className="py-2" />
      <input ref={inputEndRent} type="datetime-local" name="end_rent" defaultValue="2024-05-24T17:26" className="py-2" />
    </form>
  );
}
