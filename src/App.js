import React from 'react';
import Greeting from './components/Greeting';
import Message from './components/Message';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    console.log("Кнопку натиснули!");
  };

  return (
    <div>
      <Greeting name="Semma" />
      <Message text="Це довільне повідомлення для користувача." />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
