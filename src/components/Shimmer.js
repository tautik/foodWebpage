const Shimmer = () => {
  return (
    <div className="body">
      <div className="res-container">
        {Array(16)
          .fill("")
          .map((e) => (
            <div className="shimmer-card"></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
