const PosterImage = ({ poster, imgDir }) => {
  return (
    <div
      style={{ justifyContent: imgDir === "l" ? "flex-end" : "flex-start" }}
      className=" w-full flex"
    >
      <img
        loading="lazy"
        src={poster}
        style={{ objectFit: "contain" }}
        alt=""
      />
    </div>
  );
};

export default PosterImage;
