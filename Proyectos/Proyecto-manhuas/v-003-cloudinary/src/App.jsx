import { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';

import CloudinaryUploadWidget  from './components/CloudinaryUploadWidget';

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

  return (
    <div className="App">
      <h3>Cloudinary Upload Widget Example</h3>

      <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />

      {/* <div className="documentation-links">
        <p>
          <a
            href="https://cloudinary.com/documentation/upload_widget"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upload Widget User Guide
          </a>
        </p>
        <p>
          <a
            href="https://cloudinary.com/documentation/upload_widget_reference"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upload Widget Reference
          </a>
        </p>
      </div> */}

      {publicId && (
        <div
          className="image-preview"
          style={{ width: '800px', margin: '20px auto' }}
        >
          <AdvancedImage
            style={{ maxWidth: '50%' }}
            cldImg={cld.image(publicId)}
            plugins={[responsive(), placeholder()]}
          />
        </div>
      )}
    </div>
  );
};

export default App;