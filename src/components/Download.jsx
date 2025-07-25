import { DownloadIcon } from 'lucide-react';
import React from 'react'

function Download() {
    const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/img/allimgLP/Brochure.pdf';
    link.download = 'assets/img/allimgLP/Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
       <button 
        onClick={handleDownload}
        className="position-fixed btn btn-link p-3"
        style={{ 
          bottom: '30px', 
          right: '30px', 
        //   zIndex: 1000,
          backgroundColor: '#CB4D29',
          border: '1px solid white',
          borderRadius: '50px',
        //   transition: 'all 0.3s ease'
        }}
        // onMouseEnter={(e) => {
        //   e.target.style.backgroundColor = 'rgba(179, 71, 217, 0.2)';
        //   e.target.style.transform = 'scale(1.05)';
        // }}
        // onMouseLeave={(e) => {
        //   e.target.style.backgroundColor = 'rgba(179, 71, 217, 0.1)';
        //   e.target.style.transform = 'scale(1)';
        // }}
      >
        <DownloadIcon size={24} color="white" />
      </button>
    </div>
  )
}

export default Download
