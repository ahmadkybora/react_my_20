import { Route, Switch } from "react-router-dom";
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from "./components/layouts/home";
import Navbar from "./components/layouts/navbar";
import { LogoutRoute } from './middlewares/isLogout';
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import { routes } from "./routes/index";
import Footer from "./components/layouts/footer";

function App() {
    return (
        <React.Fragment>
          <ToastContainer />
          <Navbar />
          <main className="rounded">

          {routes.map(route => (
            <Route key={route.path} exact path={route.path} component={route.component} />
          ))}

          </main>
          <div className="col">
            <Footer />
          </div>
        </React.Fragment>
      );
}

export default App;
