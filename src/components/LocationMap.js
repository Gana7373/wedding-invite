const LocationMap = () => {
  return (
    <iframe
      src="https://maps.google.com/maps?q=Peddahulthi%20Village%20Kurnool&z=13&output=embed"
      title="map"
      style={{
        width: "100%",
        height: "100%",   // ✅ original full height
        border: "0",
        borderRadius: "8px"
      }}
      loading="lazy"
    />
  );
};

export default LocationMap;