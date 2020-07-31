import React from 'react';

// import '../src/style.css';
import { Route } from "react-router-dom";
import Signin from './Signin';
import Signup from './Signup';
import Products from './Products';
import Single from './Single';
function App() {
  return (
    <main>
        <switch>
                <Route path="/" component={Signin} exact/>
                <Route path="/signup" component={Signup} />
                <Route path="/products" component={Products} />
                <Route path="/single-product" component={Single} />
        </switch>
    </main>
  );
}

export default App;
