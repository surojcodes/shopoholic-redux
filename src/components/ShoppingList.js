import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  setCurrent,
  deleteItem,
  toggleBought,
  resetCurrent,
  clearList,
  clearBought,
} from '../actions/itemActions';
import { toast } from 'react-toastify';

const ShoppingList = ({
  items,
  setCurrent,
  deleteItem,
  toggleBought,
  resetCurrent,
  clearList,
  clearBought,
}) => {
  return (
    <div className='col-lg-7 col-md-12  mb-5 p-4'>
      <div className='mb-5'>
        <h3> Shopping List</h3>
        <button
          className='btn btn-sm btn-outline-dark d-inline float-right ml-3'
          onClick={() => clearBought()}
        >
          Clear Bought
        </button>
        <button
          className='btn btn-sm btn-primary d-inline float-right'
          onClick={() => clearList()}
        >
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
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td className='text-center' colSpan='4'>
                No items in list!
              </td>
            </tr>
          ) : (
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>
                  {' '}
                  <div className='custom-control custom-switch'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id={`customSwitch${item.id}`}
                      onClick={() => {
                        toggleBought(item.id);
                        toast.info(
                          `Item marked ${item.bought ? 'not-bought' : 'bought'}`
                        );
                        resetCurrent();
                      }}
                    />
                    <label
                      className='custom-control-label'
                      htmlFor={`customSwitch${item.id}`}
                    ></label>
                    {item.bought ? (
                      <small className='text-success'>
                        <strong>Bought</strong>
                      </small>
                    ) : (
                      <small className='text-danger'>
                        <strong>Not Bought</strong>
                      </small>
                    )}
                  </div>
                </td>
                <td>
                  {item.bought ? (
                    ''
                  ) : (
                    <button
                      className='btn btn-sm btn-outline-dark mr-2'
                      onClick={() => setCurrent(item)}
                    >
                      Edit
                    </button>
                  )}

                  <button
                    className='btn btn-sm btn-outline-danger'
                    onClick={() => {
                      deleteItem(item.id);
                      toast.success('Item deleted');
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ item: { items } }) => {
  return { items };
};

ShoppingList.propTypes = {
  items: PropTypes.array.isRequired,
  setCurrent: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  toggleBought: PropTypes.func.isRequired,
  resetCurrent: PropTypes.func.isRequired,
  clearList: PropTypes.func.isRequired,
  clearBought: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  setCurrent,
  deleteItem,
  toggleBought,
  resetCurrent,
  clearList,
  clearBought,
})(ShoppingList);
