import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useState, useCallback } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

// Map container dimensions
const containerStyle = {
  width: "100%",
  height: "400px",
};

// Borrowdale Junior School location
const center = {
  lat: -17.7596,
  lng: 31.0923,
};

// Light map style
const mapOptions = {
  styles: [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        { saturation: 0 },
        { lightness: 0 },
        { visibility: "on" },
      ],
    },
  ],
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: false,
  fullscreenControl: false,
};

const ContactSection = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(center);

  const onMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      setMarker({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      });
    }
  }, []);

  if (loadError) {
    return (
      <p className="text-center text-red-500">
        Map failed to load. Check your API key and billing setup.
      </p>
    );
  }

  if (!isLoaded) return <p className="text-center">Loading map...</p>;

  return (
    <section className="px-6 md:px-20 py-16 bg-white flex flex-col md:flex-row gap-10 items-start justify-between">
      {/* Left Info Panel */}
      <div className="md:w-1/2">
        <p className="text-green-600 font-bold text-sm tracking-[0.15em] mb-2 uppercase font-[Georgia]">
          Contact
        </p>
        <h2 className="text-4xl font-bold text-gray-800 mb-8 font-[Georgia]">
          Talk to Us
        </h2>

        <div className="space-y-6 text-gray-800 text-base font-[Georgia]">
          <div className="flex items-start gap-4">
            <EnvelopeIcon className="text-green-700 w-7 h-7 mt-1" />
            <div>
              <p className="font-semibold text-lg">Email</p>
              <p>info@smartfarms-tech.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <PhoneIcon className="text-green-700 w-7 h-7 mt-1" />
            <div>
              <p className="font-semibold text-lg">Phone</p>
              <p>+263 777 963 398</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPinIcon className="text-green-700 w-7 h-7 mt-1" />
            <div>
              <p className="font-semibold text-lg">Address</p>
              <p>
                Borrowdale Junior School<br />
                63GQ+VWR, Ridgeway N<br />
                Harare, Zimbabwe
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Map Panel */}
      <div className="md:w-1/2 w-full">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={marker || center}
          zoom={16}
          onClick={onMapClick}
          options={mapOptions}
        >
          {marker && <Marker position={marker} />}
        </GoogleMap>
        <p className="mt-2 text-sm text-gray-500 italic font-[Georgia]">
          Click on the map to pin the company’s exact location.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
