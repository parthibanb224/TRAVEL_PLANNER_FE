import React from 'react'
import { useUser } from '../context/Users.context'

export default function TripCreate() {
    const {handleImageUpload,handleInputChange,handleCancelCreate,handleSaveCreate,newTripData} = useUser();
    return (
        <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                Create a New Trip
            </h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">
                    Title:
                </label>
                <input
                    type="text"
                    name="title"
                    value={newTripData.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">
                    Location:
                </label>
                <input
                    type="text"
                    name="location"
                    value={newTripData.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">
                    Date:
                </label>
                <input
                    type="text"
                    name="date"
                    value={newTripData.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm mb-2">
                    Description:
                </label>
                <textarea
                    name="description"
                    value={newTripData.description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm mb-2">Image:</label>
                <input
                    type="file"
                    accept="image/*"
                    name='image'
                    onChange={handleImageUpload}
                    className="w-full"
                />
            </div>

            <div className="flex justify-end">
                <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-indigo-600"
                    onClick={handleSaveCreate}
                >
                    Save
                </button>
                <button
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                    onClick={handleCancelCreate}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}
