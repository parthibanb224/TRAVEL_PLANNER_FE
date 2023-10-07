import React, { useState } from 'react';
import { useUser } from '../context/Users.context';

const sampleDestinations = [
    {
        name: 'Goa',
        vicinity: 'Dabolim International Airport is the major airport in Goa',
        rating: '4.3',
        place_id: 'place-id-1',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Goa.png',
    },
    {
        name: 'Mcleodganj',
        vicinity: 'Gaggal Airport (18 km away) is the nearest airport',
        rating: '4.7',
        place_id: 'place-id-2',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Mcleodganj.jpg',
    },
    {
        name: 'Srinagar',
        vicinity: 'Srinagar has its own airport',
        rating: '4.5',
        place_id: 'place-id-3',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Srinagar.jpg',
    },
    {
        name: 'Andaman',
        vicinity: 'Vir Savarkar Airport in Port Blair is the archipelago’s major airport',
        rating: '4.2',
        place_id: 'place-id-4',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Andaman.jpg',
    },
    {
        name: 'Leh-Ladakh',
        vicinity: 'Kushok Bakula Rimpochee Airport in Leh is the airport connecting the region to other places by air',
        rating: '4.8',
        place_id: 'place-id-5',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Leh-Ladakh.jpg',
    },
    {
        name: 'Binsar',
        vicinity: 'There’s a domestic airport in Pantnagar, 152 km from Binsar',
        rating: '4.4',
        place_id: 'place-id-6',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Binsar1.jpg',
    },
    {
        name: 'Coorg',
        vicinity: 'The nearest domestic airport is in Mangalore, 156 km away. The nearest international airport is the Kempegowda International Airport in Bengaluru, 285 kilometres away',
        rating: '4.6',
        place_id: 'place-id-7',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Coorg2.jpg',
    },
    {
        name: 'Kerala',
        vicinity: 'Kerala has three main airports – Calicut International Airport, Cochin International Airport, and Trivandrum International Airport. These airports connect Kerala with different cities across the world, such as Delhi, Mumbai, Chennai, Muscat, and Dubai',
        rating: '4.9',
        place_id: 'place-id-8',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/kerala.jpg',
    },
    {
        name: 'Kanatal',
        vicinity: 'Located at a distance of 92 km, Jolly Grant Airport is the nearest airstrip to Kanatal',
        rating: '4.0',
        place_id: 'place-id-9',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Kanatal1.jpg',
    },
    {
        name: 'Kasol',
        vicinity: 'Bhuntar Domestic Airport (31 km away) is the nearest flight connection',
        rating: '4.7',
        place_id: 'place-id-10',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Kasol1.jpg',
    },
    {
        name: 'Kutch',
        vicinity: 'Bhuj Airport, 69 km away, is the nearest air connection',
        rating: '4.2',
        place_id: 'place-id-11',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Kutch.jpg',
    },
    {
        name: 'Bir Billing',
        vicinity: 'Kangra airport in Gaggal happens to be the nearest airport located at a distance of about 67 kilometers from Bir',
        rating: '4.5',
        place_id: 'place-id-12',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Bir-Billing.jpg',
    },
    {
        name: 'Assam',
        vicinity: 'Mohanbari in Dibrugarh, 40 km away, is the nearest domestic airport. Lokpriya Gopinath Bordoloi International Airport at Guwahati is 510 km away',
        rating: '4.8',
        place_id: 'place-id-13',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Assam.jpg',
    },
    {
        name: 'Rishikesh',
        vicinity: 'Jolly Grant Airport in Dehradun, 20 km from Rishikesh, is the nearest air connection',
        rating: '4.4',
        place_id: 'place-id-14',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Rishikesh1.jpg',
    },
    {
        name: 'Shimla',
        vicinity: 'Located at a distance of 25 km, Jubbarhatti is the nearest airport from Shimla',
        rating: '4.6',
        place_id: 'place-id-15',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Shimla.jpg',
    },
    {
        name: 'Auli',
        vicinity: 'Jolly Grant Airport of Dehradun is the nearest airport from Jolly Grant Airport',
        rating: '4.3',
        place_id: 'place-id-16',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Auli.jpg',
    },
    {
        name: 'Tirthan Valley',
        vicinity: 'Bhuntar airport is the nearest airport to Tirthan Valley at a distance of about 48 km',
        rating: '4.9',
        place_id: 'place-id-17',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Tirthan-Valley.jpg',
    },
    {
        name: 'Jim Corbett',
        vicinity: 'Pantnagar Airport is the nearest airport to Jim Corbett National Park',
        rating: '4.5',
        place_id: 'place-id-18',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Jim-Corbett.jpg',
    },
    {
        name: 'Manali',
        vicinity: 'Located at a distance of about 52 km, Kullu-Manali airport is the nearest airport to Manali',
        rating: '4.1',
        place_id: 'place-id-19',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Manali.jpg',
    },
    {
        name: 'Udaipur',
        vicinity: 'Udaipur has its own airport, which indeed is well connected to different parts of the country',
        rating: '4.7',
        place_id: 'place-id-20',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Udaipur1.jpg',
    },
    {
        name: 'Mysore',
        vicinity: 'Mysore city has its own domestic airport that is well connected to the metropolitan cities of New Delhi, Mumbai, Chennai, Bengaluru, and Kolkata',
        rating: '4.3',
        place_id: 'place-id-21',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Mysore1.jpg',
    },
    {
        name: 'Valley Of Flowers',
        vicinity: 'Nearest Airport to Valley of Flowers is Jolly Grant Airport, Dehradun This airport is connected to major cities like Delhi',
        rating: '4.8',
        place_id: 'place-id-22',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Valley-Of-Flowers.jpg',
    },
    {
        name: 'Jaisalmer',
        vicinity: 'Jodhpur Airport is the nearest airport from Jaisalmer. Cities like Delhi, Mumbai, and Udaipur are connected to this airport',
        rating: '4.4',
        place_id: 'place-id-23',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Jaisalmer1.jpg',
    },
    {
        name: 'Jodhpur',
        vicinity: 'The city has its own domestic airport, which is connected to major cities like Udaipur, Delhi, Jaipur and Mumbai',
        rating: '4.6',
        place_id: 'place-id-24',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Jodhpur.jpg',
    },
    {
        name: 'Prashar Lake',
        vicinity: 'Kullu Manali airport is the nearest airstrip which is 73 km away from Mandi which further happens to be the closest city to Prashar Lake located at a distance of about 49 km',
        rating: '4.5',
        place_id: 'place-id-25',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Prashar-Lake.jpg',
    },
    {
        name: 'Mukteshwar',
        vicinity: 'Dehradun airport is the nearest airstrip located at a distance of 183 km from Mukteshwar',
        rating: '4.2',
        place_id: 'place-id-26',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Mukteshwar.jpg',
    },
    {
        name: 'Dhanaulti',
        vicinity: 'Jolly Grant Airport in Dehradun is the nearest airstrip to Dhanaulti located just 82 km away',
        rating: '4.7',
        place_id: 'place-id-27',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Dhanaulti.jpg',
    },
    {
        name: 'Varanasi',
        vicinity: 'Lal Bahadur Shastri Airport of Varanasi is well-connected to Delhi and Mumbai',
        rating: '4.9',
        place_id: 'place-id-28',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Varanasi1.jpg',
    },
    {
        name: 'Mumbai',
        vicinity: 'Chhatrapati Shivaji International Airport lies 30 km north of the city. Santa Cruz Domestic Airport lies 26 km north of the city',
        rating: '4.8',
        place_id: 'place-id-29',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Mumbai.jpg',
    },
    {
        name: 'Delhi',
        vicinity: 'Delhi’s Indira Gandhi International airport is very well connected to cities across India and the world',
        rating: '4.3',
        place_id: 'place-id-30',
        imageURL: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Delhi.jpg',
    },
];

function DestinationPage() {
    const { isSidebarOpen, selectedFavorites, handleSelectFavorite } = useUser();
    const [places, setPlaces] = useState(sampleDestinations);

    return (
        <div className={`mt-8 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <h1 className="text-3xl font-semibold mb-4">Nearby Destinations</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {places.map((place) => (
                    <div key={place.id} className="bg-white rounded-lg shadow p-6">
                        <img
                            src={place.imageURL}
                            alt={place.name}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-semibold mb-2">{place.name}</h2>
                        <p className="text-gray-600">{place.vicinity}</p>
                        <p className="text-gray-600">Rating: {place.rating}</p>
                        <button
                            onClick={(e) => handleSelectFavorite(place,e)}
                            className={`${selectedFavorites.some((favorite) => favorite.place_id === place.place_id)
                                ? 'bg-indigo-500 text-white'
                                : 'bg-gray-300 text-gray-700'
                                } px-4 py-2 rounded-lg mt-4 hover:bg-indigo-600`}
                        >
                            {selectedFavorites.some((favorite) => favorite.place_id === place.place_id)
                                ? 'Remove from Favorites'
                                : 'Select as Favorite'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DestinationPage;
