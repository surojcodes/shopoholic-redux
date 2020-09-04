import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { connect } from 'react-redux';
import {
  setLoading,
  addItem,
  updateItem,
  resetCurrent,
} from '../actions/itemActions';

toast.configure();
const AddItem = ({
  setLoading,
  addItem,
  current,
  updateItem,
  resetCurrent,
}) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    if (current) {
      setName(current.name);
      setQuantity(current.quantity);
    } else {
      setName('');
      setQuantity('');
    }
  }, [current]);

  const clearForm = () => {
    setName('');
    setQuantity('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || quantity === '') {
      toast.error('Please add both item name and quantity');
      return;
    }
    setLoading();
    if (current) {
      updateItem({ id: current.id, name, quantity, bought: false });
      toast.success('Item updated.');
    } else {
      addItem({ id: v4(), name, quantity, bought: false });
      toast.success('Item added.');
    }
    clearForm();
  };
  return (
    <div className='col-lg-4 col-md-12 mb-5 p-4'>
      <h3 className='mb-3'>
        {current ? 'Update Shopping Item' : 'Add Shopping Item'}
      </h3>

      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='itemName'>Item Name</label>
          <input
            type='text'
            name='name'
            className='form-control'
            placeholder='Enter item Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='quantity'>Item Quantity</label>
          <input
            type='text'
            name='quantity'
            className='form-control'
            placeholder='Enter item Quantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className='mt-3'>
          <input
            type='submit'
            value={current ? 'Update Item' : 'Add Item'}
            className='btn btn-primary'
          />
          {current === null ? (
            ''
          ) : (
            <button
              className='btn btn-outline-dark  ml-2'
              onClick={(e) => {
                e.preventDefault();
                clearForm();
                resetCurrent();
              }}
            >
              Back to Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

AddItem.propTypes = {
  setLoading: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  current: PropTypes.object,
  updateItem: PropTypes.func.isRequired,
  resetCurrent: PropTypes.func.isRequired,
};

const mapStateToProps = ({ item: { current } }) => {
  return {
    current,
  };
};

export default connect(mapStateToProps, {
  setLoading,
  addItem,
  updateItem,
  resetCurrent,
})(AddItem);
