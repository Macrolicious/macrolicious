import React, { useState } from 'react';
import UserProfile from './UserProfile';



function Home() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = () => {
    setIsRegistered(true);
  };
 

  return (
    <div className="Home">
      <h1>Welcome Home</h1>
      {!isRegistered && <UserProfile />}
      {isRegistered && <button onClick={handleRegistration}></button>}
    </div>
  );
};

export default Home;