import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtDecode from 'jwt-decode';

const UserContext = createContext({
    user: [],
    setUser: () => Promise,
    input: [],
    setInput: () => Promise,
    handleSignup: () => null,
    handleLogin: () => null,
    handleMail: () => null,
    loaded: "",
    setLoaded: () => Promise,
    signinUser: "",
    setSigninUser: () => Promise,
    handleLogout: () => null,
    isLoggedin: Boolean,
    setIsLoggedin: () => Promise,
    open: Boolean,
    setOpen: () => Promise,
    handleUpdateUser: () => null,
    setSelectedPhoto: () => Promise,
    selectedPhoto: null,
    isSidebarOpen: Boolean,
    setSidebarOpen: () => Promise,
    isLoginModalOpen: Boolean,
    setLoginModalOpen: () => Promise,
    isRegistrationModalOpen: Boolean,
    setRegistrationModalOpen: () => Promise,
    trips: [],
    setTrips: () => Promise,
    isCreating: Boolean,
    setIsCreating: () => Promise,
    isEditing: Boolean,
    setIsEditing: () => Promise,
    selectedTrip: null,
    setSelectedTrip: () => Promise,
    imageFile: null,
    setImageFile: () => Promise,
    newTripData: {},
    setNewTripData: () => Promise,
    handleImageUpload: () => null,
    handleCreateClick: () => null,
    handleInputChange: () => null,
    handleCancelCreate: () => null,
    handleSaveCreate: () => null,
    handleCancelEdit: () => null,
    handleSaveEdit: () => null,
    handleEditTrip: () => null,
    handleDeleteTrip: () => null,
    selectedFavorites: [],
    setSelectedFavorites: () => Promise,
    handleSelectFavorite: () => null,
})

export const useUser = () => useContext(UserContext);

export default function UsersContextProvider({ children }) {

    const [user, setUser] = useState([]);
    const [input, setInput] = useState(null);
    const [loaded, setLoaded] = useState("");
    const [signinUser, setSigninUser] = useState("");
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);
    const [selectedFavorites, setSelectedFavorites] = useState([]);
    const [trips, setTrips] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedTrip, setSelectedTrip] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [newTripData, setNewTripData] = useState({
        title: '',
        location: '',
        date: '',
        description: '',
        image: '',
    });

    useEffect(() => {
        const URL = process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/users/${signinUser}` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/users/${signinUser}`;
        axios.get(URL)
            .then(res => {
                // console.log(res.data.result);
                setUser(res.data.result);
            })
            .catch(err => {
                console.log(err);
            })
    }, [signinUser])

    const navigat = useNavigate();
    const handleSignup = (event) => {
        event.preventDefault();
        const SIGNUP_URL = process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/signup/createUser` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/signup/createUser`;
        axios.post(SIGNUP_URL, input)
            .then(res => {
                // navigat('/')
                setRegistrationModalOpen(false);
                setLoginModalOpen(true);
            })
            .catch(err => {
                alert("Something Went Wrong")
                console.log("Account Created Failed", err);
            })
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const axiosConfig = {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, private',
            },
        };
        const LOGIN_URL = process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/login` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/login`;
        axios.post(LOGIN_URL, input, axiosConfig)
            .then(res => {
                if (res.data.success) {
                    if (res.data.message === "Login Successful!!") {
                        sessionStorage.setItem("Authorization", res.data.token);
                        var decoded = jwtDecode(res.data.token);
                        // sessionStorage.setItem("Token", JSON.stringify(decoded))
                        setSigninUser(decoded.name);
                        setIsLoggedin(true);
                        navigat('/Layout/dashboard', { replace: true });
                    }
                    else {
                        alert("Password is wrong, Try Again!!");
                    }
                }
                else {
                    alert("Account Does not Exists, Please create your account to continue!!");
                }
            })
            .catch(err => {
                alert("Something Went Wrong");
                console.log(err);
            })
    }


    const handleMail = (event) => {
        event.preventDefault();
        // toast("Email Sending.....",{autoClose: 2000,pauseOnHover: false});
        setLoaded("true");
        const FORGOT_URL = process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/forgot` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/forgot`;
        axios.put(FORGOT_URL, input)
            .then(response => {
                if (response.data.success) {
                    setLoaded("false");
                    toast("Email Sending Successfully");
                    // alert(`${response.data.message} => Go to Mail`)
                }
            })
            .catch(err => {
                setLoaded("false");
                toast("Enter Valid Email");
            })
    }

    const handleLogout = async (event) => {
        const axiosConfigs = {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, private',
            },
        };
        const LOGOUT_URL = process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/login/logout` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/login/logout`;
        await axios.post(LOGOUT_URL, axiosConfigs)
            .then(res => {
                if (res.data === "Logged out successfully") {
                    setIsLoggedin(false);
                    sessionStorage.removeItem('Authorization');
                    navigat('/', { replace: true });
                    setLoginModalOpen(false);
                }
            })
            .catch(err => console.log(err))
    }

    const handleUpdateUser = (event) => {
        event.preventDefault();
        setUser({ ...user, ...input })
        const URL = process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/updateUser/${signinUser}` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/updateUser/${signinUser}`;
        axios.patch(URL, input)
            .then(response => {
                if (response.data.success) {
                    toast("Updated Successfully", { className: "update-toast-message" });
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        const URL = process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/trips/${signinUser}` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/trips/${signinUser}`;
        axios.get(URL)
            .then(res => {
                setTrips(res.data.result);
            })
            .catch(err => {
                console.log(err)
            })
    }, [signinUser])

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImageFile(URL.createObjectURL(file));
        if (file) {
            setNewTripData({ ...newTripData, imageURL: URL.createObjectURL(file) });
        }
    };

    const handleCreateClick = () => {
        setIsCreating(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTripData({ ...newTripData, [name]: value });
    };

    const handleSaveCreate = () => {
        const URL = process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/trips/add/${signinUser}` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/trips/add/${signinUser}`;
        axios.post(URL, newTripData)
            .then(res => {
            })
            .catch(err => {
                console.log("Error", err)
            })
        setTrips([...trips, newTripData]);
        setIsCreating(false);
        setNewTripData({
            title: '',
            location: '',
            date: '',
            description: '',
            image: '',
        });
    };

    const handleCancelCreate = () => {
        setIsCreating(false);
        setNewTripData({
            title: '',
            location: '',
            date: '',
            description: '',
            image: '',
        });
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setNewTripData({ ...selectedTrip });
    };

    const handleSaveEdit = () => {
        const URL = process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/trips/edit/${signinUser}/${selectedTrip.title}` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/trips/edit/${signinUser}/${selectedTrip.title}`;
        axios.patch(URL, newTripData)
            .then(res => {
            })
            .catch(err => {
                console.log(err)
            })
        if (imageFile) {
            setNewTripData({ ...newTripData, imageURL: URL.createObjectURL(imageFile) });
        }
        const updatedTrips = trips.map((trip) =>
            trip.id === selectedTrip.id ? newTripData : trip
        );
        setTrips(updatedTrips);
        setIsEditing(false);
    };

    const handleEditTrip = (trip) => {
        setSelectedTrip(trip);
        setNewTripData({ ...trip });
        setIsEditing(true);
    };

    const handleDeleteTrip = (title, index) => {
        const URL = process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/trips/delete/${signinUser}/${title}` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/trips/delete/${signinUser}/${title}`;
        axios.delete(URL)
            .then(res => {
            })
            .catch(err => {
                console.log(err);
            })
        const updatedTrips = [...trips];
        updatedTrips.splice(index, 1);
        setTrips(updatedTrips);
    };

    useEffect(() => {
        const URL = process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/destination/${signinUser}` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/destination/${signinUser}`;
        axios.get(URL)
            .then(res => {
                setSelectedFavorites(res.data.result);
            })
            .catch(err => {
                console.log(err)
            })
    }, [signinUser])

    const handleSelectFavorite = async (place, e) => {
        if (selectedFavorites.some((favorite) => favorite.place_id === place.place_id)) {
            const matched = selectedFavorites.filter((favorite) => favorite.place_id !== place.place_id);
            setSelectedFavorites(matched);
            const URL = process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/destination/delete/${signinUser}/${place.name}` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/destination/delete/${signinUser}/${place.name}`;
            axios.delete(URL)
                .then(res => {
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            setSelectedFavorites([...selectedFavorites, place]);
            const URL = process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/destination/add/${signinUser}` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/destination/add/${signinUser}`;
            axios.post(URL, place)
                .then(res => {
                })
                .catch(err => {
                    console.log("Error", err)
                })
        }
    };

    const value = {
        user,
        setUser,
        input,
        setInput,
        handleSignup,
        handleLogin,
        handleMail,
        loaded,
        signinUser,
        setSigninUser,
        isLoggedin,
        handleLogout,
        setIsLoggedin,
        open,
        setOpen,
        handleUpdateUser,
        selectedPhoto,
        setSelectedPhoto,
        isSidebarOpen,
        setSidebarOpen,
        isLoginModalOpen,
        setLoginModalOpen,
        isRegistrationModalOpen,
        setRegistrationModalOpen,
        trips,
        setTrips,
        isCreating,
        setIsCreating,
        isEditing,
        setIsEditing,
        imageFile,
        setImageFile,
        selectedTrip,
        setSelectedTrip,
        newTripData,
        setNewTripData,
        handleImageUpload,
        handleCreateClick,
        handleInputChange,
        handleCancelCreate,
        handleSaveCreate,
        handleSaveEdit,
        handleCancelEdit,
        handleEditTrip,
        handleDeleteTrip,
        selectedFavorites,
        setSelectedFavorites,
        handleSelectFavorite,
    }

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}
