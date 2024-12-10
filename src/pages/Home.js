import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

const Home = () => {
  const handleClick = () => {
    alert('Button Clicked!');
  };

  return (
    <div>
      <Header />
      <h2>Welcome to the Home Page</h2>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}

export default Home;
