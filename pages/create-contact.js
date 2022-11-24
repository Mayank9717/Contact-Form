import Header from "../components/Header";
import { UilUserCircle } from "@iconscout/react-unicons";
import React, { useEffect, useState } from "react";
import { Router } from "next/router";
import { useRouter } from "next/router";
import Link from "next/link";
import Footer from "../components/Footer";

export default function CreateContact() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [type, SetType] = useState("");
  const [whatsapp, SetWhatsapp] = useState(false);
  const router = useRouter();
  const [items, setItems] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("contacts"))
      : ""
  );
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(items));
  }, [items]);
  const onSubmit = (e) => {
    if (name === "" || email === "" || phone === "") {
      alert("Please fill all the fields");
    } else {
      e.preventDefault();
      const id = Math.floor(Math.random() * 100000000);
      let data = { id: id, name, email, phone, type, whatsapp };
      const dataSend = items ? [...items, data] : [data];
      setItems(dataSend);
      router.push("/");
    }
  };

  return (
    <>
      <Header />

      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center text-blue-300">
            <UilUserCircle size={100} />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create Contact
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link href={"/"}>
              <button className="font-medium text-indigo-600 hover:text-indigo-500">
                Contact View
              </button>
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="Full Name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    onChange={(e) => SetName(e.target.value)}
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    onChange={(e) => SetEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="Phone Number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    onChange={(e) => SetPhone(e.target.value)}
                    type="phone"
                    autoComplete="current-phone"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="Type"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Type
                </label>
                <div className="mt-1">
                  <select
                    id="type"
                    name="type"
                    onChange={(e) => SetType(e.target.value)}
                    autoComplete="country-name"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm bg-white focus:outline-none  sm:text-sm"
                  >
                    <option value="personal">Personal</option>
                    <option value="office">Office</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="Type"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Whatsapp Enable
                </label>
                <div className="mt-1 flex justify-start gap-3 items-center">
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    onChange={(e) => SetWhatsapp(e.target.checked)}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Yes</span>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
