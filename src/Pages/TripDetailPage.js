import React from 'react';
import { useUser } from '../context/Users.context';

function TripDetailPage() {
    const { isSidebarOpen,trips,isCreating,isEditing,newTripData } = useUser();
    const {handleImageUpload,handleCreateClick,handleInputChange,handleCancelCreate,handleSaveCreate,handleSaveEdit,handleCancelEdit,handleEditTrip,handleDeleteTrip} = useUser();

    return (
        <div className={`bg-gray-100 min-h-screen py-12 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <div className="container mx-auto px-4">
                {trips.length === 0 ? (
                    // Display a message or button to create a new trip when no trips are available
                    <div className="text-center">
                        <p className="text-2xl font-semibold text-gray-800">
                            No trips available.
                        </p>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-600"
                            onClick={handleCreateClick}
                        >
                            Create New Trip
                        </button>
                    </div>
                ) : (
                    // Display existing trips
                    <>
                        {trips.map((trip, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow p-6 mb-6 transition-transform transform hover:scale-105"
                            >
                                {trip.imageURL && (
                                    <img
                                        src={trip.image}
                                        alt={trip.title}
                                        className="w-full h-40 object-cover rounded-lg mb-2"
                                    />
                                )}
                                {/* Trip details and edit button */}
                                <h1 className="text-3xl font-semibold text-gray-800 mb-2">{trip.title}</h1>
                                <p className="text-gray-600">{trip.location}</p>
                                <p className="text-gray-600">{trip.date}</p>
                                <p className="text-gray-700 mt-2">{trip.description}</p>
                                {!isEditing && (
                                    <>
                                        <button
                                            className="bg-indigo-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-indigo-600"
                                            onClick={() => handleEditTrip(trip)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                            onClick={() => handleDeleteTrip(trip.title,index)}
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </div>
                        ))}
                    </>


                )}
                {/* Create or edit trip form */}
                {isCreating ? (
                    // Create Trip Form
                    <div>
                        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                            Create a New Trip
                        </h1>
                        {/* Create Trip Form Fields */}
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
                                // value={newTripData.imageURL}
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
                ) : isEditing ? (
                    // Edit Trip Form
                    <div>
                        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                            Edit Trip
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
                                disabled
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
                                value={newTripData.image}
                                onChange={handleImageUpload}
                                className="w-full"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                className="bg-indigo-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-indigo-600"
                                onClick={handleSaveEdit}
                            >
                                Save
                            </button>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                                onClick={handleCancelEdit}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    // Display a button to create a new trip when not creating or editing
                    <div className="mt-6">
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                            onClick={handleCreateClick}
                        >
                            Create New Trip
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TripDetailPage;
