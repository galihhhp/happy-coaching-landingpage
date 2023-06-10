const Star = () => {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <img
            key={index}
            src="/star.svg"
            alt=""
            className="w-5 inline-block"
          />
        );
      })}
    </div>
  );
};

export default Star;
