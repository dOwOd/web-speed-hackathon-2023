import type { FC } from 'react';
import { lazy } from 'react'
import * as Router from 'react-router-dom';

import { useScrollToTop } from './hooks';

const Top = lazy(() =>
  import('../../../pages/Top').then(({ Top }) => ({ default: Top }))
)
const ProductDetail = lazy(() =>
  import('../../../pages/ProductDetail').then(({ ProductDetail }) => ({ default: ProductDetail }))
)
const Order = lazy(() =>
  import('../../../pages/Order').then(({ Order }) => ({ default: Order }))
)
const OrderComplete = lazy(() =>
  import('../../../pages/OrderComplete').then(({ OrderComplete }) => ({ default: OrderComplete }))
)
const NotFound = lazy(() =>
  import('../../../pages/NotFound').then(({ NotFound }) => ({ default: NotFound }))
)

export const Routes: FC = () => {
  useScrollToTop();

  return (
    <Router.Routes>
      <Router.Route element={<Top />} path="/" />
      <Router.Route element={<ProductDetail />} path="/product/:productId" />
      <Router.Route element={<Order />} path="/order" />
      <Router.Route element={<OrderComplete />} path="/order/complete" />
      <Router.Route element={<NotFound />} path="*" />
    </Router.Routes>
  );
};
