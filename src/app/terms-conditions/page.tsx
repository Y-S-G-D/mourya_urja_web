import Footer from '@/components/Footer'
import Navbar from '@/components/home-page/navbar'
import React from 'react'

const TermsNdConditions = () => {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <Navbar bgColor={"bg-primary"} />
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Terms & Conditions
        </h1>
        <div className="w-full bg-secondary p-6 sm:p-8 rounded-lg shadow-lg ">
          <div className="mb-8 animate-fadeIn">
            <h2 className="text-xl  font-semibold mb-4 text-primary border-b-2 border-gray-300">
              Purpose of Service
            </h2>
            <p className="text-base md:text-lg">
              Maurya Urja Matrimony is a non-profit organization aimed at helping individuals working in the electricity sector find suitable life partners for marriage. This service is entirely free of charge.
            </p>
          </div>
          <div className="mb-8 animate-fadeIn">
            <h2 className="text-xl  font-semibold mb-4 text-primary border-b-2 border-gray-300">
              Registration and Accuracy of Information
            </h2>
            <p className="text-base md:text-lg">
              Users are responsible for providing accurate and truthful information during registration. Accounts with false or misleading information may be terminated.
            </p>
          </div>
          <div className="mb-8 animate-fadeIn">
            <h2 className="text-xl  font-semibold mb-4 text-primary border-b-2 border-gray-300">
              Privacy and Data Security
            </h2>
            <p className="text-base md:text-lg">
              Your information will be kept confidential and will not be shared with any third party without your consent. Ensuring the security of the personal information shared by users is our priority.
            </p>
          </div>
          <div className="mb-8 animate-fadeIn">
            <h2 className="text-xl font-semibold mb-4 text-primary border-b-2 border-gray-300">
              Prohibition of Inappropriate Conduct
            </h2>
            <p className="text-base md:text-lg">
              Any inappropriate behavior, such as abuse, offensive language, or deception, will not be tolerated. Such actions may result in immediate suspension or termination of the account.
            </p>
          </div>
          <div className="mb-8 animate-fadeIn">
            <h2 className="text-xl  font-semibold mb-4 text-primary border-b-2 border-gray-300">
              Limitation of Liability
            </h2>
            <p className="text-base md:text-lg">
              Maurya Urja Matrimony is only a platform. We are not responsible for user interactions, marital outcomes, or any disputes arising between users.
            </p>
          </div>
          <div className="mb-8 animate-fadeIn">
            <h2 className="text-xl  font-semibold mb-4 text-primary border-b-2 border-gray-300">
              Modification of Service
            </h2>
            <p className="text-base md:text-lg">
              Maurya Urja Matrimony reserves the right to modify its services, terms, and conditions at any time.
            </p>
          </div>
          <div className="mb-8 animate-fadeIn">
            <h2 className="text-xl  font-semibold mb-4 text-primary border-b-2 border-gray-300">
              About Us
            </h2>
            <p className="text-base md:text-lg">
              Maurya Urja Matrimony is a social initiative dedicated to helping employees of the electricity sector and their families find suitable life partners for marriage. Our mission is:
            </p>
            <ul className="list-disc list-inside text-base md:text-lg mb-4">
              <li>To assist those in need.</li>
              <li>To provide a trustworthy platform for matchmaking.</li>
              <li>To promote equality, transparency, and ethics.</li>
            </ul>
            <p className="text-base md:text-lg">
              This platform is completely free and motivated by the spirit of service. We are committed to helping you build a better future.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}

export default TermsNdConditions
