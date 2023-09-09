import './App.css';
import Navbar from './components/Navbar/Navbar';
import Producer from './components/Producer/Producer';
import SearchBox from './components/SearchBox/SearchBox';
import NewAlbumPopup from './components/NewAlbumPopup/NewAlbumPopup';
import { useState } from 'react';
import ImageInformations from './components/ImageInformaitions/ImageInformations';

function App() {
const [openNewAlbumPopup, setOpenNewAlbumPopup]=useState(false);
  return (
    <>
    <Navbar/>
    <div className='searchbox-container'>
    <SearchBox/>
    </div>
    <Producer setOpenNewAlbumPopup={setOpenNewAlbumPopup} />
    {openNewAlbumPopup && <NewAlbumPopup setOpenNewAlbumPopup={setOpenNewAlbumPopup} />}
    {/* <ImageInformations/> */}
    </>
  )
}

export default App
