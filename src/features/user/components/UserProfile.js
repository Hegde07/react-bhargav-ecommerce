import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectLoggedInUser } from "../../auth/authSlice";

export function UserProfile() {
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();
  const handleEdit = (e) => {};
  const handleRemove = (e) => {};
  return (
    <div>
      <div className="mx-auto mt-12 bg-white max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Name:{user.name ? user.name : "Guest"}
        </h1>
        <h3 className="text-xl font-bold tracking-tight text-gray-900">
          email address : {user.email}
        </h3>
        <div className="border-t border-gray-200 p-4 py-6 sm:px-6">
          <p className="mt-0.5 text-sm text-gray-500">Your Address :</p>
          {user.addresses.map((address) => (
            <div className="flex justify-between gap-x-6 py-5 px-5 border-solid border-2 border-gray-200">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {address.name}
                  </p>
                  <p className="text-sm leading-6 text-gray-900">
                    {address.street}
                  </p>
                  <p className="text-sm leading-6 text-gray-900">
                    {address.pincode}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  Phone : {address.phone}
                </p>
                <p className="text-sm leading-6 text-gray-900">
                  {address.city}
                </p>
                <p className="text-sm leading-6 text-gray-900">
                  {address.state}
                </p>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <button
                type="button"
                onClick={(e) => handleEdit(e,address.id)}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={(e) => handleRemove(e,address.id)}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
