import React from 'react';
import { useUser } from '../context/Users.context';
import TripEdit from '../components/TripEdit';
import TripCreate from '../components/TripCreate';

function TripDetailPage() {
    const { isSidebarOpen,trips,isCreating,isEditing } = useUser();
    const {handleCreateClick,handleEditTrip,handleDeleteTrip} = useUser();

    return (
        <div className={`bg-gray-100 min-h-screen py-12 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <div className="container mx-auto px-4">
                {trips.length === 0 ? (
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
                {isCreating ? (

                    <TripCreate/>

                ) : isEditing ? (

                    <TripEdit/>

                ) : (
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
