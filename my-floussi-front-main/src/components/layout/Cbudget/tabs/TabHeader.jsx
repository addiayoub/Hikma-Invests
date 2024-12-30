import { X } from "react-feather";
import GripDots from "../../../../utils/svgs/gripDots";

const TabHeader = ({
  type,
  title,
  onChange,
  onKeyUp,
  titleRef,
  deleteGroup,
  dataLength,
}) => {
  return (
    <div className=" px-4 py-6 flex justify-between h-[80px] items-center border-b border-b-grayExtraLight ">
      <div className=" flex items-center h-full w-full">
        <GripDots />
        <input
          ref={titleRef}
          placeholder="Group sans nom"
          onChange={(e) => onChange(e)}
          onKeyUp={onKeyUp}
          className="max-w-fit text-black text-xl h-full outline-none capitalize align-middle  "
          value={type !== "revenus" ? title : type}
          readOnly={type === "revenus"}
        />
      </div>

      {dataLength && (
        <div
          onClick={deleteGroup}
          className=" w-fit h-full cursor-pointer opacity-50 hover:opacity-100"
        >
          <X color="#707070" size={27} />
        </div>
      )}
    </div>
  );
};

export default TabHeader;
