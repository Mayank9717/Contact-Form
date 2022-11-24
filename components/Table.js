import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Router } from "next/router";
import { useRouter } from "next/router";
import { UilSadSquint } from "@iconscout/react-unicons";
const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

const Table = () => {
  const [itemData, setItemData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem("contacts");
      setItemData(JSON.parse(item));
    }
  }, []);
  const deleteData = (person) => {
    const deleted = itemData.filter((t) => t.id !== person.id);
    setItemData(deleted);
    if (typeof window !== "undefined") {
      localStorage.setItem("contacts", JSON.stringify(deleted));
    }
  };

  itemData &&
    itemData.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 shadow-lg m-5 border border-gray-200">
      <div className="sm:flex sm:items-center sm:justify-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Contact List</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your Contact including their Name, Phone,
            Email.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link href="/create-contact">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Create Contact
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {itemData !== null ? (
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Whatsapp
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {itemData.map((person) => (
                      <tr key={person.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-50 text-xs font-normal capitalize text-sky-700 dark:border dark:border-sky-400 dark:bg-transparent">
                                {person.name
                                  .match(/\b(\w)/g)
                                  .slice(0, 2)
                                  .join("")
                                  .toUpperCase()}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">
                                {person.name}
                              </div>
                              <div className="text-gray-500">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">{person.title}</div>
                          <div className="text-gray-500">{person.phone}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span
                            className={`inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ${
                              person.whatsapp == true
                                ? "text-green-800 bg-green-100"
                                : "text-red-800 bg-red-100"
                            }`}
                          >
                            {person.whatsapp == true ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 capitalize text-sm text-gray-500">
                          {person.type}
                        </td>
                        <td className="relative whitespace-nowrap py-4 text-center pl-5 text-sm font-medium sm:pr-6">
                          <button
                            onClick={() =>
                              router.push(`/update?id=${person.id}`)
                            }
                            type="button"
                            className="text-indigo-600 hover:text-indigo-900 px-4"
                          >
                            Edit
                            <span className="sr-only">, {person.name}</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteData(person)}
                            className="text-indigo-600 hover:text-indigo-900 px-4"
                          >
                            Delete
                            <span className="sr-only">, {person.name}</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="flex justify-center  gap-3 text-red-400 p-10">
                  <UilSadSquint />
                  No Data
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
