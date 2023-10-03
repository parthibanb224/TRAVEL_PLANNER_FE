import React from 'react';
import {useUser} from '../context/Users.context'

export default function UserProfieCard() {
    const {trips,selectedFavorites} = useUser(); 

    const currentDate = new Date();
    const upcomingTrips = trips.filter(trip => {
        const tripStartDate = new Date(trip.date);
        return tripStartDate > currentDate;
    });

    return (
        <div className="bg-gradient-to-r from-indigo-400 to-purple-600 text-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-4">
                <div className="w-20 h-20 bg-white rounded-full mx-auto mb-2 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-indigo-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 1a9 9 0 100 18 9 9 0 000-18zM4.293 9.293a1 1 0 011.414-1.414L10 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <p className="text-lg font-semibold">Traveller</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                    <p className="text-lg font-semibold text-white">{trips.length}</p>
                    <p className="text-gray-300">Total Trips</p>
                </div>
                <div className="text-center">
                    <p className="text-lg font-semibold text-white">{upcomingTrips.length}</p>
                    <p className="text-gray-300">Upcoming Trips</p>
                </div>
                <div className="text-center">
                    <p className="text-lg font-semibold text-white">
                        {selectedFavorites.length}
                    </p>
                    <p className="text-gray-300">Favorite Destinations</p>
                </div>
            </div>
        </div>
    );
}
