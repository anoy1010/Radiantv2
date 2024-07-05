// components/SetCookieButton.js
import Cookies from 'js-cookie';

const SetCookieButton = () => {
  const handleClick = () => {
    Cookies.set('clientCookie', 'clientCookieValue', { expires: 30 });
    alert('Cookie has been set!');
  };

  return (
    <button onClick={handleClick}>Set Cookie</button>
  );
};

export default SetCookieButton;
