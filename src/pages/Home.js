import React from 'react';

import ItemForm from '../components/ItemForm';
import ShoppingList from '../components/ShoppingList';

const Home = () => {
  return (
    <div className='container mt-5'>
      <div className='row justify-content-between align-items-center'>
        <ItemForm />
        <ShoppingList />
      </div>
    </div>
  );
};

export default Home;
