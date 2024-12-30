const PosterText = ({ title, paragraphe }) => {
  return (
    <div className=" w-[98%] flex flex-col justify-center gap-10">
      <h2 className=" text-3xl text-black ">{title}</h2>
      <p className=" text-sm text-grayLight">{paragraphe}</p>
    </div>
  );
};

export default PosterText;
