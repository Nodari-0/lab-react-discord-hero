import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App: React.FC = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;