import React from 'react';
import cert1 from '../image/cert1.jpg';
import cert2 from '../image/cert2.jpg';
import cert3 from '../image/cert3.jpg';
import cert4 from '../image/cert4.jpg';
import cert5 from '../image/cert5.jpg';
import cert6 from '../image/cert6.jpg';
import cert7 from '../image/cert7.jpg';
import cert8 from '../image/cert8.jpg';
import cert9 from '../image/cert9.jpg';
import cert10 from '../image/cert10.jpg';
import cert11 from '../image/cert11.jpg';

import Cert from "../components/certs.js";

function CertificatesPage() {
    const certificates = [
      cert1,
      cert2,
      cert3,
      cert4,
      cert5,
      cert6,
      cert7,
      cert8,
      cert9,
      cert10,
      cert11
    ];
  
    return (
      <div className="container my-4">
        <div>
            <h1 className='text-center'>Badges</h1>
            <div style={{ textAlign: 'center' }}>
                <hr
                    style={{
                    height: '3px',
                    width: '80%',
                    margin: '20px auto',
                    border: 'none',
                    borderTop: '2px dashed #1c2e4a',
                    }}
                />
            </div>
            <Cert/>
        </div>
        <h1 className='text-center'>Certificates</h1>
        {certificates.map((certificate, index) => (
          <div key={index} className="my-3">
            <div style={{ textAlign: 'center' }}>
                <hr
                    style={{
                    height: '3px',
                    width: '100%',
                    margin: '20px auto',
                    border: 'none',
                    borderTop: '2px dashed #1c2e4a',
                    }}
                />
            </div>
            <img src={certificate} alt={`Certificate ${index + 1}`} style={{ width: '100%', maxHeight: '600px' }} />
          </div>
        ))}
      </div>
    );
  }
  
  export default CertificatesPage;
  
