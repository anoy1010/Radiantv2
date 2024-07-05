
import React, { useState, useEffect } from 'react';
import { setCookie } from 'nookies';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookiesAccepted = document.cookie.includes('cookies-accepted=true');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie(null, 'cookies-accepted', 'true', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    setShowBanner(false);
  };

  const handleReject = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 w-full bg-black text-white p-4 z-50">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-y-4">
        <p className="text-center lg:text-left">
          We use cookies to improve your experience on our site. By accepting, you agree to our use of cookies.
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="bg-[#F7941D] text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl hover:bg-white hover:text-[#F7941D] transition duration-300"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="bg-gray-700 text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl hover:bg-gray-600 transition duration-300"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;