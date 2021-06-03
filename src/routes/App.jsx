import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout.jsx';
import Home from '../container/Home';
import Checkout from '../container/Checkout.jsx';
import Info from '../container/Info';
import Payment from '../container/Payment';
import Success from '../container/Success';
import NotFound from '../container/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/checkout/info" component={Info} />
          <Route exact path="/checkout/payment" component={Payment} />
          <Route exact path="/checkout/success" component={Success} />
          <Route component={NotFound} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
