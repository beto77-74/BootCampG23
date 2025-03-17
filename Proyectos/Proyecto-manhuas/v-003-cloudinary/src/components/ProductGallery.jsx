import { useEffect, useRef } from 'react';


const ProductGallery = ({ galleryConfig, uwConfig }) => {
  const galleryRef = useRef(null);
  //const cloudName = "dgddunrtu";

  useEffect(() => {
    if (window && galleryRef.current) {
        const miGaleria = cloudinary.galleryWidget({
          container: galleryRef.current,
          cloudName: uwConfig.cloudName,
          ...galleryConfig,
        })
        miGaleria.render();
    }
  }, [galleryConfig]);

  return (
   
    <div id="miGaleria" style={{ width: '80%', margin: 'auto' }}>
      
      <div>Cargando...</div>
    </div>
  );
};

export default ProductGallery;



