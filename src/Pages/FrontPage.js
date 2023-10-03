import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import Modal from '../components/Modal';
import LoginForm from '../components/LoginForm'
import RegistrationForm from '../components/RegistrationForm'
import ForgotPasswordForm from '../components/ForgotPasswordForm'
import ResetPasswordForm from '../components/ResetPasswordForm'
import { useUser } from '../context/Users.context';

function FrontPage() {
    const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
    const [isResetPasswordModalOpen, setResetPasswordModalOpen] = useState(false);
    const {isLoginModalOpen,setLoginModalOpen,isRegistrationModalOpen,setRegistrationModalOpen} = useUser();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
            <header className="text-center mb-8 flex items-center justify-between">
                <FontAwesomeIcon icon={faPlane} className="text-blue-500 text-3xl ml-2" />
                <div className='mt-4'>
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        Welcome to Travel Planner
                    </h1>
                    <p className="text-lg text-gray-600">
                        Your Ultimate Trip Planning Companion
                    </p>
                </div>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setLoginModalOpen(true);
                    }}
                    className="flex items-center text-gray-600 hover:text-gray-900 text-lg font-semibold mr-4"
                >
                    <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                    Login
                </button>
            </header>
            <main className="flex-grow flex flex-col items-center justify-center">
                <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">
                            Plan Your Dream Vacation
                        </h2>
                        <p className="mt-4 text-xl">
                            Discover, explore, and create memorable travel experiences with our app.
                        </p>
                        <button
                            onClick={() => setLoginModalOpen(true)}
                            className="mt-6 inline-block bg-indigo-500 hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
                        >
                            Get Started
                        </button>
                    </div>
                </section>
                <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900">Explore Destinations</h3>
                                <p className="mt-2 text-gray-600">
                                    Find exciting destinations to visit with detailed information and beautiful photos.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900">Create Itineraries</h3>
                                <p className="mt-2 text-gray-600">
                                    Plan your trip day by day, adding activities, accommodations, and more.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900">Collaborate with Friends</h3>
                                <p className="mt-2 text-gray-600">
                                    Share your travel plans with friends and family for a group adventure.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Modal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)}>
                <LoginForm
                    onRegisterClick={() => {
                        setLoginModalOpen(false);
                        setRegistrationModalOpen(true);
                    }}
                    onForgotPasswordClick={() => {
                        setLoginModalOpen(false);
                        setForgotPasswordModalOpen(true);
                    }}
                />
            </Modal>
            <Modal isOpen={isRegistrationModalOpen} onClose={() => setRegistrationModalOpen(false)}>
                <RegistrationForm />
            </Modal>
            <Modal isOpen={isForgotPasswordModalOpen} onClose={() => setForgotPasswordModalOpen(false)}>
                <ForgotPasswordForm
                    onResetPasswordClick={() => {
                        setForgotPasswordModalOpen(false);
                        setResetPasswordModalOpen(true);
                    }}
                />
            </Modal>
            <Modal isOpen={isResetPasswordModalOpen} onClose={() => setResetPasswordModalOpen(false)}>
                <ResetPasswordForm />
            </Modal>

        </div>
    );
}

export default FrontPage;
