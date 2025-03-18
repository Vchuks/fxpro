import React from 'react'
import {AdvancedMarker, APIProvider, Map} from '@vis.gl/react-google-maps';

const UserMap = () => {
    return (

  <APIProvider apiKey="AIzaSyDBEWGAPAENM1D_ENr34JlvZV4wfzwlkOs"

  >
    <Map
      style={{width: '100%', height: '100%', borderRadius: '40px', margin:"auto", overflow:"hidden"}}
      defaultCenter={{lat: 6.605874, lng: 3.349149}}
      defaultZoom={15}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
      mapId={"7bb050ff10d43d16"}

    >
          <AdvancedMarker position={{ lat: 6.605746, lng:3.348985 }} />

    </Map>
  </APIProvider>
    )
}

export default UserMap
