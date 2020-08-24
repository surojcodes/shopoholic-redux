import React from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const AddItem = () => {
  return (
    <div className='col-md-4 mb-5 p-4'>
      <h2 className='mb-3'>Add Shopping Item</h2>

      <form>
        <div className='form-group'>
          <label htmlFor='itemName'>Item Name</label>
          <input
            type='text'
            name='itemName'
            className='form-control'
            placeholder='Enter item Name'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='quantity'>Item Quantity</label>
          <input
            type='text'
            name='quantity'
            className='form-control'
            placeholder='Enter item Quantity'
          />
        </div>
        <div className='mt-3'>
          <input
            type='submit'
            value='Add to List'
            className='btn btn-primary'
          />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
