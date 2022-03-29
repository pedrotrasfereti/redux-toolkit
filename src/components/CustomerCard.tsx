import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../app/features/customerSlice';

interface CustomerCardTypes {
  id: string;
  name: string;
  food: string[];
}

function CustomerCard({ id, name, food }: CustomerCardTypes) {
  const [foodName, setFoodName] = useState('');

  const dispatch = useDispatch();

  const handleAddFoodToCustomer = () => {
    dispatch(addFoodToCustomer({ food: foodName, id }));

    setFoodName('');
  };

  return (
    <div
      key={ id }
      className="customer-food-card-container"
    >
      <p>{ name }</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {
            food.map((foodName) => (
              <p>{ foodName }</p>
            ))
          }
        </div>
        <div className="customer-food-input-container">
          <input
            value={ foodName }
            onChange={ (e) => setFoodName(e.target.value) }
          />
          <button
            onClick={ () => handleAddFoodToCustomer() }
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
