import { Route, Routes } from "react-router-dom";
import CardsWithUsers from "./CardsWithUsers.jsx";
import Admins from "./user/Admins.jsx";
import Users from "./user/Users.jsx";
import UserQuestionnaires from "./questionnaire/UserQuestionnaires.jsx";
import PrivateQuestionnaire from "./questionnaire/PrivateQuestionnaire.jsx";
import Tarifs from "../layout/tarifs/main/Main.jsx";
import Questionnaires from "./questionnaire/Questionnaires.jsx";
import GoogleUsers from "./user/GoogleUsers.jsx";
import Profile from "./user/Profile.jsx";

const Main = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<CardsWithUsers />} />
      <Route path="/questionnaires" element={<Questionnaires />} />
      <Route path="/:idUser/questionnaires" element={<UserQuestionnaires />} />
      <Route
        path="/admins"
        element={
          <main className="flex-1">
              <div className="space-y-2 pt-6">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                      <h1 className="text-2xl font-semibold text-gray-900">Admins</h1>
                  </div>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead>
                          <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                              <th className="px-4 py-3">Number</th>
                              <th className="px-4 py-3">User Name</th>
                              <th className="px-4 py-3">Role</th>
                              <th className="px-4 py-3">Date</th>
                              <th className="px-4 py-3">Mail</th>
                              <th className="px-4 py-3">Info</th>
                          </tr>
                          </thead>
                          <Admins/>
                      </table>
                  </div>
              </div>
          </main>
        }
      />
        <Route
            path="/users"
            element={
                <main className="flex-1">
                    <div className="space-y-2 pt-6">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                            <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
                        </div>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                                    <th className="px-4 py-3">Number</th>
                                    <th className="px-4 py-3">User Name</th>
                                    <th className="px-4 py-3">Role</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Mail</th>
                                    <th className="px-4 py-3">Info</th>
                                </tr>
                                </thead>
                                <Users/>
                            </table>
                        </div>
                    </div>
                </main>
            }
        />
        <Route
            path="/google-users"
            element={
                <main className="flex-1">
                    <div className="space-y-2 pt-6">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                            <h1 className="text-2xl font-semibold text-gray-900">Google Users</h1>
                        </div>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                                    <th className="px-4 py-3">Number</th>
                                    <th className="px-4 py-3">User Name</th>
                                    <th className="px-4 py-3">Role</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Mail</th>
                                    <th className="px-4 py-3">Info</th>
                                </tr>
                                </thead>
                                <GoogleUsers/>
                            </table>
                        </div>
                    </div>
                </main>
            }
        />
        <Route path="/:idUser/questionnaire" element={<PrivateQuestionnaire/>}/>
        <Route path="/:idUser/settings" element={<Profile/>}/>
        <Route path="/:idUser/tarif" element={<Tarifs/>}/>
    </Routes>
  );
};
export default Main;
