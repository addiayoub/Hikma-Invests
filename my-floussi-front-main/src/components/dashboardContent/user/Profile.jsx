import {useAuth} from "../../../context/AuthContext.jsx";
import {useState} from "react";


const Profile = () => {

    const { user, updateUser } = useAuth();
    const [isEditingUsername, setIsEditingUsername] = useState(false);
    const [newUsername, setNewUsername] = useState(user.name);


    const handleEditUsername = () => {
        setIsEditingUsername(true);
    };

    const handleCancelEdit = () => {
        setIsEditingUsername(false);
        setNewUsername(user.name);
    };

    const handleSaveUsername = async () => {
        try {
            await updateUser({ name: newUsername });
            setIsEditingUsername(false);
        } catch (error) {
            console.error("Failed to update username:", error);
            // Handle error (e.g., show error message to user)
        }
    };

    // const [showPassword, setShowPassword] = useState(false);
    // const [password, setPassword] = useState("");
    //
    // const [showNewPassword, setShowNewPassword] = useState(false);
    // const [newPassword, setNewPassword] = useState("");
    //
    // const [reEnterNewPassword, setReEnterNewPassword] = useState("");
    // const [showReEnterNewPassword, setShowReEnterNewPassword] = useState(false);
    //
    // const [passwordError, setPasswordError] = useState("");

    // const handleTogglePassword = () => {
    //     setShowPassword(!showPassword);
    // };
    //
    // const handleToggleNewPassword = () => {
    //     setShowNewPassword(!showNewPassword);
    // };
    //
    // const handleToggleReTypeNewPassword = () => {
    //     setShowReEnterNewPassword(!showReEnterNewPassword);
    // };

    return(
        <div
            className="m-10"
        >
            {/* Description list with inline editing */}
            {/*<div className="divide-y divide-gray-200">*/}
            {/*    <div className="space-y-1">*/}
            {/*        <h3 className="text-lg font-medium leading-6 text-gray-900">Profil</h3>*/}
            {/*        <p className="max-w-2xl text-sm text-gray-500">*/}
            {/*            Ces informations seront affichées publiquement, alors faites attention à ce que vous partagez.                    </p>*/}
            {/*    </div>*/}
            {/*    <div className="mt-6">*/}
            {/*        <dl className="divide-y divide-gray-200">*/}
            {/*            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">*/}
            {/*                <dt className="text-sm font-medium text-gray-500">UserName</dt>*/}
            {/*                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">*/}
            {/*                    <span className="flex-grow">{user.name}</span>*/}
            {/*                    <span className="ml-4 flex-shrink-0">*/}
            {/*                      <button*/}
            {/*                          type="button"*/}
            {/*                          className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"*/}
            {/*                      >*/}
            {/*                        Update*/}
            {/*                      </button>*/}
            {/*                    </span>*/}
            {/*                </dd>*/}
            {/*            </div>*/}
            {/*            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">*/}
            {/*                <dt className="text-sm font-medium text-gray-500">Email</dt>*/}
            {/*                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">*/}
            {/*                    <span className="flex-grow">{user.email}</span>*/}

            {/*                </dd>*/}
            {/*            </div>*/}
            {/*            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">*/}
            {/*                <dt className="text-sm font-medium text-gray-500">Role</dt>*/}
            {/*                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">*/}
            {/*                    <span className="flex-grow">{user.role}</span>*/}

            {/*                </dd>*/}
            {/*            </div>*/}
            {/*        </dl>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="divide-y divide-gray-200">
                <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Profil</h3>
                    <p className="max-w-2xl text-sm text-gray-500">
                        Ces informations seront affichées publiquement, alors faites attention à ce que vous partagez.
                    </p>
                </div>
                <div className="mt-6">
                    <dl className="divide-y divide-gray-200">
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500">UserName</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {isEditingUsername ? (
                                    <>
                                        <input
                                            type="text"
                                            value={newUsername}
                                            onChange={(e) => setNewUsername(e.target.value)}
                                            className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        <span className="ml-4 flex-shrink-0">
                                            <button
                                                type="button"
                                                onClick={handleSaveUsername}
                                                className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                            >
                                                Save
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleCancelEdit}
                                                className="ml-3 rounded-md bg-white font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                            >
                                                Cancel
                                            </button>
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <span className="flex-grow">{user.name}</span>
                                        <span className="ml-4 flex-shrink-0">
                                            <button
                                                type="button"
                                                onClick={handleEditUsername}
                                                className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                            >
                                                Update
                                            </button>
                                        </span>
                                    </>
                                )}
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                            <dt className="text-sm font-medium text-gray-500">Email</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <span className="flex-grow">{user.email}</span>
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500">Role</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <span className="flex-grow">{user.role}</span>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            {/*<div className="mt-10 divide-y divide-gray-200">*/}
            {/*    <div className="space-y-1">*/}
            {/*        <h3 className="text-lg font-medium leading-6 text-gray-900">Password</h3>*/}
            {/*        <p className="max-w-2xl text-sm text-gray-500">*/}
            {/*            Manage how information is displayed on your account.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*    <div className="mt-6">*/}
            {/*        <dl className="divide-y divide-gray-200">*/}
            {/*            <div className="py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:py-5">*/}
            {/*                <dt className="text-sm font-medium text-gray-500 pb-2">Current Password</dt>*/}
            {/*                <div className="relative flex flex-col">*/}
            {/*                  <span className="absolute left-3 top-3">*/}
            {/*                    <svg*/}
            {/*                        xmlns="http://www.w3.org/2000/svg"*/}
            {/*                        className="w-6 h-6 text-gray-300"*/}
            {/*                        fill="none"*/}
            {/*                        viewBox="0 0 24 24"*/}
            {/*                        stroke="currentColor"*/}
            {/*                        strokeWidth="2"*/}
            {/*                    >*/}
            {/*                      <path*/}
            {/*                          strokeLinecap="round"*/}
            {/*                          strokeLinejoin="round"*/}
            {/*                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"*/}
            {/*                      />*/}
            {/*                    </svg>*/}
            {/*                  </span>*/}
            {/*                    <input*/}
            {/*                        type={showPassword ? "text" : "password"}*/}
            {/*                        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"*/}
            {/*                        placeholder=""*/}
            {/*                        value={password}*/}
            {/*                        onChange={(e) => setPassword(e.target.value)}*/}
            {/*                    />*/}
            {/*                    <span*/}
            {/*                        className="absolute right-3 top-3 cursor-pointer"*/}
            {/*                        onClick={handleTogglePassword}*/}
            {/*                    >*/}
            {/*                        {showPassword ? (*/}
            {/*                            <svg*/}
            {/*                                xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                fill="none"*/}
            {/*                                viewBox="0 0 24 24"*/}
            {/*                                strokeWidth="1.5"*/}
            {/*                                stroke="currentColor"*/}
            {/*                                className="w-6 h-6 text-gray-300"*/}
            {/*                            >*/}
            {/*                                <path*/}
            {/*                                    strokeLinecap="round"*/}
            {/*                                    strokeLinejoin="round"*/}
            {/*                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"*/}
            {/*                                />*/}
            {/*                                <path*/}
            {/*                                    strokeLinecap="round"*/}
            {/*                                    strokeLinejoin="round"*/}
            {/*                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"*/}
            {/*                                />*/}
            {/*                            </svg>*/}
            {/*                        ) : (*/}
            {/*                            <svg*/}
            {/*                                xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                fill="none"*/}
            {/*                                viewBox="0 0 24 24"*/}
            {/*                                strokeWidth="1.5"*/}
            {/*                                stroke="currentColor"*/}
            {/*                                className="w-6 h-6 text-gray-300"*/}
            {/*                            >*/}
            {/*                                <path*/}
            {/*                                    strokeLinecap="round"*/}
            {/*                                    strokeLinejoin="round"*/}
            {/*                                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"*/}
            {/*                                />*/}
            {/*                            </svg>*/}
            {/*                        )}*/}
            {/*                </span>*/}

            {/*                    {passwordError && (*/}
            {/*                        <p className="mt-2 text-red-500 text-sm">{passwordError}</p>*/}
            {/*                    )}*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:py-5">*/}
            {/*                <dt className="text-sm font-medium text-gray-500 pb-2">New Password</dt>*/}
            {/*                <div className="relative flex flex-col">*/}
            {/*                  <span className="absolute left-3 top-3">*/}
            {/*                    <svg*/}
            {/*                        xmlns="http://www.w3.org/2000/svg"*/}
            {/*                        className="w-6 h-6 text-gray-300"*/}
            {/*                        fill="none"*/}
            {/*                        viewBox="0 0 24 24"*/}
            {/*                        stroke="currentColor"*/}
            {/*                        strokeWidth="2"*/}
            {/*                    >*/}
            {/*                      <path*/}
            {/*                          strokeLinecap="round"*/}
            {/*                          strokeLinejoin="round"*/}
            {/*                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"*/}
            {/*                      />*/}
            {/*                    </svg>*/}
            {/*                  </span>*/}
            {/*                    <input*/}
            {/*                        type={showNewPassword ? "text" : "password"}*/}
            {/*                        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"*/}
            {/*                        placeholder=""*/}
            {/*                        value={newPassword}*/}
            {/*                        onChange={(e) => setNewPassword(e.target.value)}*/}
            {/*                    />*/}
            {/*                    <span*/}
            {/*                        className="absolute right-3 top-3 cursor-pointer"*/}
            {/*                        onClick={handleToggleNewPassword}*/}
            {/*                    >*/}
            {/*                        {showNewPassword ? (*/}
            {/*                            <svg*/}
            {/*                                xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                fill="none"*/}
            {/*                                viewBox="0 0 24 24"*/}
            {/*                                strokeWidth="1.5"*/}
            {/*                                stroke="currentColor"*/}
            {/*                                className="w-6 h-6 text-gray-300"*/}
            {/*                            >*/}
            {/*                                <path*/}
            {/*                                    strokeLinecap="round"*/}
            {/*                                    strokeLinejoin="round"*/}
            {/*                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"*/}
            {/*                                />*/}
            {/*                                <path*/}
            {/*                                    strokeLinecap="round"*/}
            {/*                                    strokeLinejoin="round"*/}
            {/*                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"*/}
            {/*                                />*/}
            {/*                            </svg>*/}
            {/*                        ) : (*/}
            {/*                            <svg*/}
            {/*                                xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                fill="none"*/}
            {/*                                viewBox="0 0 24 24"*/}
            {/*                                strokeWidth="1.5"*/}
            {/*                                stroke="currentColor"*/}
            {/*                                className="w-6 h-6 text-gray-300"*/}
            {/*                            >*/}
            {/*                                <path*/}
            {/*                                    strokeLinecap="round"*/}
            {/*                                    strokeLinejoin="round"*/}
            {/*                                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"*/}
            {/*                                />*/}
            {/*                            </svg>*/}
            {/*                        )}*/}
            {/*                </span>*/}

            {/*                    {passwordError && (*/}
            {/*                        <p className="mt-2 text-red-500 text-sm">{passwordError}</p>*/}
            {/*                    )}*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="py-4 sm:grid sm:grid-cols-2  sm:gap-4 sm:py-5">*/}
            {/*                <dt className="text-sm font-medium text-gray-500 pb-2">Re-Type New Password</dt>*/}
            {/*                <div className="relative flex flex-col">*/}
            {/*                  <span className="absolute left-3 top-3">*/}
            {/*                    <svg*/}
            {/*                        xmlns="http://www.w3.org/2000/svg"*/}
            {/*                        className="w-6 h-6 text-gray-300"*/}
            {/*                        fill="none"*/}
            {/*                        viewBox="0 0 24 24"*/}
            {/*                        stroke="currentColor"*/}
            {/*                        strokeWidth="2"*/}
            {/*                    >*/}
            {/*                      <path*/}
            {/*                          strokeLinecap="round"*/}
            {/*                          strokeLinejoin="round"*/}
            {/*                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"*/}
            {/*                      />*/}
            {/*                    </svg>*/}
            {/*                  </span>*/}
            {/*                    <input*/}
            {/*                        type={showReEnterNewPassword ? "text" : "password"}*/}
            {/*                        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"*/}
            {/*                        placeholder=""*/}
            {/*                        value={reEnterNewPassword}*/}
            {/*                        onChange={(e) => setReEnterNewPassword(e.target.value)}*/}
            {/*                    />*/}
            {/*                    <span*/}
            {/*                        className="absolute right-3 top-3 cursor-pointer"*/}
            {/*                        onClick={handleToggleReTypeNewPassword}*/}
            {/*                    >*/}
            {/*                        {showReEnterNewPassword ? (*/}
            {/*                            <svg*/}
            {/*                                xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                fill="none"*/}
            {/*                                viewBox="0 0 24 24"*/}
            {/*                                strokeWidth="1.5"*/}
            {/*                                stroke="currentColor"*/}
            {/*                                className="w-6 h-6 text-gray-300"*/}
            {/*                            >*/}
            {/*                                <path*/}
            {/*                                    strokeLinecap="round"*/}
            {/*                                    strokeLinejoin="round"*/}
            {/*                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"*/}
            {/*                                />*/}
            {/*                                <path*/}
            {/*                                    strokeLinecap="round"*/}
            {/*                                    strokeLinejoin="round"*/}
            {/*                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"*/}
            {/*                                />*/}
            {/*                            </svg>*/}
            {/*                        ) : (*/}
            {/*                            <svg*/}
            {/*                                xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                fill="none"*/}
            {/*                                viewBox="0 0 24 24"*/}
            {/*                                strokeWidth="1.5"*/}
            {/*                                stroke="currentColor"*/}
            {/*                                className="w-6 h-6 text-gray-300"*/}
            {/*                            >*/}
            {/*                                <path*/}
            {/*                                    strokeLinecap="round"*/}
            {/*                                    strokeLinejoin="round"*/}
            {/*                                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"*/}
            {/*                                />*/}
            {/*                            </svg>*/}
            {/*                        )}*/}
            {/*                </span>*/}

            {/*                    {passwordError && (*/}
            {/*                        <p className="mt-2 text-red-500 text-sm">{passwordError}</p>*/}
            {/*                    )}*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </dl>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Profile;