import './App.css';

import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {NabBar} from './Components/NabBar';
import {Footer} from './Components/Footer';
import {HotDealsPage} from './Pages/HotDealsPage';
import {CouresNearMepage} from './Pages/CoursesNearMePage';
import {MyGolfPunksPage} from './Pages/MyGolfPunksPage';
import {NftMarketPlacePage} from './Pages/NftMarketPlacePage';
import {TeeTimePage} from './Pages/TeeTimePage';
import {ConnetWalletPage} from './Pages/ConnectWalletPage';

function App() {
  return (
  <Router>
    <NabBar/>
    <Routes>
      <Route exact path="/" element={<HotDealsPage/>} />
      <Route exact path="/couresenearme" element={<CouresNearMepage />} />
      <Route exact path="/mygolfpunks" element={<MyGolfPunksPage />} />
      <Route exact path="/nftmarketplace" element={<NftMarketPlacePage/>} />
      <Route exact path="/teetime" element={<TeeTimePage/>} />
      <Route exact path="/connectwallet" element={<ConnetWalletPage/>} />
    </Routes>
    <Footer />
  </Router>
  );
}
export default App;
