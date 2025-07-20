import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const containerStyle = {
  width: "100%",
  height: "400px",
};

// Centered on Borrowdale Junior School
const center = {
  lat: -17.7596,
  lng: 31.0923,
};

// Basic map options for cleaner look
const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: false,
  fullscreenControl: false,
};

const ContactSection = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [mapCenter] = useState(center); // No marker logic here

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
        <p className="text-green-600 font-bold text-sm tracking-widest mb-2 uppercase">
          Contact
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Talk to Us</h2>

        <div className="space-y-6 text-gray-800 text-base">
          <div className="flex items-start gap-4">
            <EnvelopeIcon className="text-green-600 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold text-lg">Email</p>
              <p>info@smartfarms-tech.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <PhoneIcon className="text-green-600 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold text-lg">Phone</p>
              <p>+263 777 963 398</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPinIcon className="text-green-600 w-6 h-6 mt-1" />
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
          center={mapCenter}
          zoom={16}
          options={mapOptions}
        />
      </div>
    </section>
  );
};

export default ContactSection;
