import React from 'react';
import { useUser } from '../context/Users.context';

function RecommendedDestinations() {

    const {selectedFavorites} = useUser();
    const firstThreeSelectedFavorite = selectedFavorites.slice(0, 3);

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-2xl font-semibold mb-4">Favourite Destinations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {firstThreeSelectedFavorite.map((destination, index) => (
                    <div key={index} className="bg-indigo-100 p-4 rounded-lg">
                        <img
                            src={destination.imageURL}
                            alt={destination.name}
                            className="w-full h-40 object-cover mb-2 rounded-lg"
                        />
                        <h3 className="text-lg font-semibold">{destination.name}</h3>
                        <p className="text-gray-600">{destination.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecommendedDestinations;
