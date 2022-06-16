import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Appartement from './admin/Appartement';
import AppartementForm from './admin/AppartementForm';
import ConnexionAdmin from './admin/ConnexionAdmin';
import HomeAdmin from './admin/HomeAdmin';
import Appartements from './pages/Appartements';
import Connexion from './pages/Connexion';
import Deconnexion from './pages/Deconnexion';
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Reservation from './pages/Reservation';
import Room from './pages/Room';
import Rooms from './pages/Rooms';
import './Scss/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/admin" exact element={<HomeAdmin />} />
      <Route path="/sign" exact element={<Inscription />} />
      <Route path="/login" exact element={<Connexion />} />
      <Route path="/logout" element={<Deconnexion />} />
      <Route path="/admin/login" element={<ConnexionAdmin />} />
      <Route path="/admin/appartements" element={<Appartement />} />
      <Route path="/admin/appartements/add" element={<AppartementForm />} />
      <Route path="/chambres" element={< Rooms/>} />
      <Route path="/appartements" element={< Appartements/>} />
      <Route path="/chambres/:id" element={< Room/>} />
      <Route path="/chambres/reservation/:id" element={< Reservation/>} />
    </Routes>
  </BrowserRouter>
);

