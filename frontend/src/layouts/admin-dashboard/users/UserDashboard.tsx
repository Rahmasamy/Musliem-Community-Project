import React from "react";
import { useUsers, useMakeAdmin } from "@/hooks/useUsers";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const UserDashboard: React.FC = () => {
  const { data: users, isLoading } = useUsers();
  const { mutate: makeAdmin, isPending } = useMakeAdmin();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin w-8 h-8 text-gray-500" />
      </div>
    );
  }

  return (
    <div className="p-3 sm:p-4 md:p-5 lg:p-6 bg-gray-50 min-h-screen">
      <Card className="shadow-lg">
        <CardContent className="p-3 sm:p-4 md:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">👥 User Management</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-700 uppercase text-xs sm:text-sm">
                  <th className="p-2 sm:p-3 border-b">#</th>
                  <th className="p-2 sm:p-3 border-b">Full Name</th>
                  <th className="p-2 sm:p-3 border-b hidden sm:table-cell">Email</th>
                  <th className="p-2 sm:p-3 border-b">Role</th>
                  <th className="p-2 sm:p-3 border-b text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user: any, index: number) => (
                  <tr
                    key={user._id}
                    className="hover:bg-gray-50 transition-colors border-b"
                  >
                    <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm">{index + 1}</td>
                    <td className="p-2 sm:p-3 font-medium text-gray-800 text-xs sm:text-sm">{user.fullName}</td>
                    <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm hidden sm:table-cell break-all">{user.email}</td>
                    <td className="p-2 sm:p-3">
                      <span
                        className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full ${
                          user.role === "admin"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="p-2 sm:p-3 text-center">
                      {user.role !== "admin" ? (
                        <button
                          className="bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm rounded-full px-2 sm:px-4 py-1 whitespace-nowrap"
                          onClick={() => makeAdmin(user._id)}
                          disabled={isPending}
                        >
                          {isPending ? (
                            <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin inline" />
                          ) : (
                            <span className="hidden sm:inline">Make Admin</span>
                          )}
                          {!isPending && <span className="sm:hidden">Admin</span>}
                        </button>
                      ) : (
                        <span className="text-gray-400 text-xs sm:text-sm italic">
                          Already Admin
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;
