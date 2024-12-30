import { User } from "react-feather";

// eslint-disable-next-line react/prop-types
const Message = ({ message, color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="my-5 h-fit p-2 w-full px-5 py-6 flex items-center gap-5  rounded-md shadow-md "
    >
      <div className=" w-fit h-fit border rounded-full p-3 mt-2 bg-white">
        <User size={32} color="#707070" />
      </div>
      <p className=" text-sm text-grayLight ">{message.body}</p>
    </div>
  );
};

export default Message;
