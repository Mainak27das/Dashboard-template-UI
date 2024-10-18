import React, { useState } from 'react';

export default function AccountDetails() {
  const [editMode, setEditMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false); // State to control profile visibility

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p">
      <div className="bg-gray-200 rounded-lg w-full h-full flex flex-col lg:flex-row lg:h-[90vh] gap-12"> {/* Adjust height here */}
        
        {/* Main Content Section */}
        <div className="shadow-md lg:flex-grow p-8 rounded-lg bg-white bg-[url('/src/assets/image2.svg')] bg-cover bg-center">
          <h1 className="text-black text-5xl font-bold mb-6">Account Details</h1>

          <section className="mb-6">
            <div className="text-blue-400 flex justify-between items-center mb-2 border-b border-black">
              <h2 className="text-2xl font-semibold text-blue-400">Personal Details</h2>
              <button
                onClick={() => setEditMode(!editMode)}
                className="text-gray-500 hover:text-gray-800 flex items-center"
              >
                <span>Edit</span>
                <img src="/src/assets/edit.jpeg" alt="Edit" className="ml-1" />
              </button>
            </div>
            <div className="flex flex-col gap-2 text-black">
              <p><strong>Name:</strong> Kartik Dubey</p>
              <p><strong>Address:</strong> Biswa Bangla Sarani, Rajarhat, Action Area III, Kolkata, 700159</p>
            </div>
          </section>

          <section className="mb-6">
            <div className="text-blue-400 flex justify-between items-center mb-2 border-b border-black">
              <h2 className="text-2xl font-semibold text-blue-400">Contact Details</h2>
              <button
                onClick={() => setEditMode(!editMode)}
                className="text-gray-500 hover:text-gray-800 flex items-center"
              >
                <span>Edit</span>
                <img src="/src/assets/edit.jpeg" alt="Edit" className="ml-1" />
              </button>
            </div>
            <div className="flex flex-col gap-2 text-black">
              <p><strong>Phone No.:</strong> 9123456789 <span className="bg-blue-100 text-blue-400 text-xs px-1 rounded">Primary</span></p>
              <p><strong>Email:</strong> Kartikdubey11234@gmail.com <span className="bg-blue-100 text-blue-400 text-xs px-1 rounded">Primary</span></p>
              <p><strong>Secondary Phone No.:</strong> 9123456789</p>
              <p><strong>Secondary Email:</strong> -</p>
            </div>
          </section>

          {editMode && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold text-blue-400">Personal Details</h2>
              <div className="flex flex-col gap-2 text-black">
                <p><strong>Name:</strong> Kartik Dubey</p>
                <p><strong>Address:</strong> Biswa Bangla Sarani, Rajarhat, Action Area III, Kolkata, 700159</p>
              </div>
            </section>
          )}

          <div className="flex justify-end gap-10 mt-8">
            <button className="py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-md font-medium">
              Cancel
            </button>
            <button className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md font-medium">
              Apply Changes
            </button>
          </div>
        </div>

        {/* Profile Section - Toggle for Mobile */}
        <div className="lg:hidden flex justify-between items-center mt-4">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="w-full py-2 mb-2 bg-blue-500 text-white rounded-lg"
          >
            {showProfile ? 'Hide Profile' : 'Show Profile'}
          </button>
        </div>

        <div className={`shadow-md w-full lg:w-64 rounded-lg bg-gray-50 p-6 flex flex-col items-center h-full transition-all ${showProfile ? 'block' : 'hidden'} lg:block`}>
          <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-4">
            <img src="/src/assets/dp.jpeg" alt="Profile" className="object-cover w-full h-full" />
          </div>
          <button className="w-full py-2 mb-2 bg-gray-100 hover:text-blue-500 flex items-center justify-center">
            <img src="/src/assets/edit.jpeg" alt="Edit" className="mr-2" />
            Change Profile Picture
          </button>
          <button className="w-full py-2 mb-2 text-red-500 border-b border-gray-800 hover:text-red-600">
            Remove Profile Picture
          </button>
          <button className="w-full py-2 mt-6 bg-gray-200 hover:bg-gray-300">
            Change Account Password
          </button>
          <button className="w-full py-2 mt-4 bg-red-100 text-red-500 hover:bg-red-200">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
