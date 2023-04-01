import { Disclosure } from "@headlessui/react";
import { UilBookMedical } from "@iconscout/react-unicons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const router = useRouter();
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem("contacts");
      setItemData(JSON.parse(item));
    }
  }, []);
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                </div>
                <Link href="/">
                  <div className="flex flex-shrink-0 cursor-pointer items-center">
                    <UilBookMedical size={50} className="text-white" />
                    <h5 className="text-white md:block hidden font-bold text-2xl ml-2">
                      Contact Book
                    </h5>
                  </div>
                </Link>
              </div>
              <div className="flex items-center">
                <div className="flex space-x-3 items-center">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-indigo-600  md:px-4 px-2 py-2 text-xs md:text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span>
                      Total Contact : {itemData != null ? itemData.length : ""}
                    </span>
                  </button>
                  {router.pathname === "/create-contact" ? (
                    ""
                  ) : (
                    <Link href="/create-contact">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 md:px-4 px-2 py-2 text-xs md:text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                      >
                        ADD Contact
                      </button>
                    </Link>
                  )}
                  <Link href={"/"}>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 md:px-4 px-2 py-2 text-xs md:text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                      Contact List
                    </button>
                  </Link>
                </div>
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center"></div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <p
                className="bg-gray-900 text-white
 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact List
              </p>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
