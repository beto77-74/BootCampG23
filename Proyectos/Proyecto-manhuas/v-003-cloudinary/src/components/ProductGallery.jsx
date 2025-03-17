import { useEffect, useRef } from 'react';


const ProductGallery = ({ galleryConfig, uwConfig }) => {
  const galleryRef = useRef(null);
  //const cloudName = "dgddunrtu";

  useEffect(() => {
    if (window && galleryRef.current) {
        cloudinary.galleryWidget({
          container: galleryRef.current,
          cloudName: uwConfig.cloudName,
          ...galleryConfig,
        })
        .render();
    }
  }, [galleryConfig]);

  return (
   
    <div ref={galleryRef} style={{ width: '80%', margin: 'auto' }}>
      <div>Cargando...</div>
    </div>
  );
};

export default ProductGallery;



