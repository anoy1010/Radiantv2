// components/ShowCookie.js
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const ShowCookie = () => {
  const [cookieValue, setCookieValue] = useState('');

  useEffect(() => {
    const cookie = Cookies.get('clientCookie');
    setCookieValue(cookie);
  }, []);

  return (
    <div>
      <h1>Client Cookie Value: {cookieValue}</h1>
    </div>
  );
};

export default ShowCookie;
