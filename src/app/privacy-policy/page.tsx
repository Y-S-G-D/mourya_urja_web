import Navbar from '@/components/home-page/navbar';
import React from 'react';
import { Shield, Lock, Share2, RefreshCw, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <Navbar bgColor="bg-primary" />
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24 flex flex-col items-center">
        <h1 className="text-4xl font-playfair md:text-5xl font-bold text-primary mb-12 text-center">
          Privacy Policy
        </h1>
        <p className="text-lg md:text-xl text-gray-700 text-center mb-8 max-w-3xl">
          Maurya Urja Matrimony places a high value on protecting your data and privacy. Our privacy policy includes the following:
        </p>
        <div className="w-full md:w-3/4 lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
          {/* Information Collection */}
          <div className="flex items-start mb-6">
            <Shield className="text-primary text-4xl mr-6" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Information Collection</h2>
              <p className="mt-2 text-base md:text-lg text-gray-600">
                We collect only the necessary information during registration to provide the service.
              </p>
            </div>
          </div>
          {/* Use of Information */}
          <div className="flex items-start mb-6">
            <Lock className="text-primary text-4xl mr-6" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Use of Information</h2>
              <p className="mt-2 text-base md:text-lg text-gray-600">
                Your information will only be used to help you find a suitable match. Your data will not be used for any other purpose without your consent.
              </p>
            </div>
          </div>
          {/* Information Security */}
          <div className="flex items-start mb-6">
            <Lock className="text-primary text-4xl mr-6" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Information Security</h2>
              <p className="mt-2 text-base md:text-lg text-gray-600">
                We use the latest security measures to keep your data safe. Only authorized personnel have access to your information.
              </p>
            </div>
          </div>
          {/* Data Sharing */}
          <div className="flex items-start mb-6">
            <Share2 className="text-primary text-4xl mr-6" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Data Sharing</h2>
              <p className="mt-2 text-base md:text-lg text-gray-600">
                Your personal information will not be shared with any third party. If necessary, your consent will be obtained.
              </p>
            </div>
          </div>
          {/* Policy Updates */}
          <div className="flex items-start mb-6">
            <RefreshCw className="text-primary text-4xl mr-6" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Policy Updates</h2>
              <p className="mt-2 text-base md:text-lg text-gray-600">
                Maurya Urja Matrimony reserves the right to update its privacy policy periodically.
              </p>
            </div>
          </div>
          {/* Your Consent */}
          <div className="flex items-start mb-6">
            <CheckCircle className="text-primary text-4xl mr-6" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Your Consent</h2>
              <p className="mt-2 text-base md:text-lg text-gray-600">
                By using our website, you agree to our privacy policy.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-12 text-lg md:text-xl text-center text-gray-700 max-w-2xl">
          Thank you for using our services. Maurya Urja Matrimony is dedicated to contributing to your happiness and a successful future.
        </p>
      </section>
      <Footer/>
    </main>
  );
};

export default PrivacyPolicy;
