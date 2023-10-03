import React from 'react'
import { useUser } from '../context/Users.context'

export default function RecentTrips() {
    const {trips} = useUser();
    const firstThreeTrips = trips.slice(0, 3);
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Recent Trips</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {firstThreeTrips.map((trip, index) => (
                    <div key={index} className="bg-indigo-100 p-4 rounded-lg">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VT-eLwJBUXRHt_8ml3ue1Enfjth-t4QJSg&usqp=CAU"
                            alt={`Trip ${index + 1}`}
                            className="w-full h-40 object-cover mb-2 rounded-lg"
                        />
                        <h3 className="text-lg font-semibold">{trip.title}</h3>
                        <p className="text-gray-600">{trip.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
