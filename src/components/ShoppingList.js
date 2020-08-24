import React from 'react';
import { toast } from 'react-toastify';

const ShoppingList = () => {
  return (
    <div className='col-md-7 mb-5 p-4'>
      <div className='mb-5'>
        <h2> Shopping List</h2>
        <button className='btn btn-sm btn-outline-dark d-inline float-right ml-3'>
          Clear Bought
        </button>
        <button className='btn btn-sm btn-primary d-inline float-right'>
          Clear List
        </button>
      </div>
      <table className='table'>
        <thead className='bg-primary'>
          <tr className='text-white'>
            <th scope='col'>Item</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Status</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default ShoppingList;
