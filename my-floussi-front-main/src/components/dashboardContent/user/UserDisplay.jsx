import userLogo from "../../../assets/imgs/icons8-user.svg";

// eslint-disable-next-line react/prop-types
const UserDisplay = ({ users }) => {
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
  };
  let n = 0;
  return (
    <tbody className="bg-white  min-w-full dark:divide-gray-700 dark:bg-gray-800">
      {Array.isArray(users) ? (
        // eslint-disable-next-line react/prop-types
        users.map((user) => (
          <tr className="text-gray-700 dark:text-gray-400" key={user.id}>
            <td className="px-4 py-3 text-xs">
              <span className="px-4 py-3 text-sm bg-gray-100 rounded-full  ">
                {(n += 1)}
              </span>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center text-sm">
                <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src={userLogo}
                    alt=""
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 rounded-full shadow-inner"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Function
                  </p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-sm">{user.role}</td>
            <td className="px-4 py-3 text-sm">{formatDate(user.date)}</td>
            <td className="px-4 py-3 text-sm">{user.email}</td>
            <td className="px-4 py-3 text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                more
              </span>
            </td>
          </tr>
        ))
      ) : (
        <p>No users found</p>
      )}
    </tbody>
  );
};
export default UserDisplay;
