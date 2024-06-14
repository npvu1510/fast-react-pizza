import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';

import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form className="text-right" method="PATCH">
      <Button type="primary">Mark as priority order</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  await updateOrder(params.orderId, { priority: true });
  return null;
}

export default UpdateOrder;
