import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCartQuantity, getCartTotal } from './cartSlice';

function CartOverview() {
  const quantity = useSelector(getCartQuantity);
  const total = useSelector(getCartTotal);

  if (quantity === 0) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>
          {quantity} {quantity > 1 ? 'pizzas' : 'pizza'}
        </span>
        <span>${total}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
