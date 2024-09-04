import React from 'react'
import { useState,useEffect } from 'react'
import {
    APIProvider,
    Map,
    useMapsLibrary,
    useMap
} from "@vis.gl/react-google-maps"

const DirectiveMaps = () => {
    const position = {lat:43.6532,lng:-79.3832}
  return (
    <div style={{height:'50vh'}}>
        <APIProvider apiKey={process.env.REACT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <Map center={position} zoom={9}>

            </Map>
        </APIProvider>
    </div>
  )
}

export default DirectiveMaps