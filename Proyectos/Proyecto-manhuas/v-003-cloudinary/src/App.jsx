import { useState, useRef, useEffect } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';

import CloudinaryUploadWidget from './components/CloudinaryUploadWidget';
import  ProductGallery  from './components/ProductGallery';

//import './App.css';

const App = () => {
  // Configuration
  const CLOUD_NAME = "dgddunrtu"; //'hzxyensd5';
  const UPLOAD_PRESET = "g23-semana11";//'aoh4fpwm';

  // State
  const [publicId, setPublicId] = useState('');

  // Cloudinary configuration
  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD_NAME,
    },
  });

  // Upload Widget Configuration
  const uwConfig = {
    cloudName: CLOUD_NAME,
    uploadPreset: UPLOAD_PRESET
  };


  // const ProductGallery = () => {
  //   const containerRef = useRef(null);
  //     useEffect (() => {
  //         if (window && containerRef.current) {
             
  //             window.cloudinary.galleryWidget (
  //             {
  //                 container: containerRef.current,
  //                 cloudname: 'dgddunrtu',
  //                 AspectRatio: '16:9',
  //                 mediaAssets: [{tag: 'MI-GALERIA'}],
  //                 carouselStyle: 'indicators',
  //                 carouselLocation:'bottom'
  
  //             }).render();
  //         }
  //     },[]);
  
  //     return containerRef
  // }

  return (
    <>
      <main>

      <h1>Carga de Archivos...</h1>

      <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
       
      {/* <h1>Galeria de productos - React</h1>
      <ProductGallery
        galleryConfig={{
          mediaAssets: [
            { tag: 'g23-semana11' },
          ],
          aspectRatio: '4:3',
        }} uwConfig={uwConfig} /> */}
      
 
      </main>

    </>
  );
};

export default App;