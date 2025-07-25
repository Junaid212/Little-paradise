  import React from 'react';
  import { Link } from 'react-router-dom/cjs/react-router-dom.min';
  import Faqs from "./Faqs";
  // import backgroundVideo from 'assets/img/allimgLP/Bay/1.mp4';

  export default function BannerVideo() {
        let publicUrl = process.env.PUBLIC_URL+'/'
    return (

      <>
    {/* <div
    style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}
    id="banner-container"
  >
    <img
      src="assets/img/allimgLP/Screenshot.png"
      alt="Background"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        top: 0,
        left: 0,
        zIndex: 0,
        
      }}
      
    />

    <div
      style={{
        position: 'relative',
        zIndex: 1,
        color: 'black',
        padding: '4rem 2rem',
        fontFamily: 'sans-serif',
      }}
      
    >
      <ul
        style={{ fontSize: '2rem', lineHeight: '1.8' }}
      
      >
        <li style={{ borderBottom: '2px solid black', display: 'inline-block' }}>
          <Link to="/">Home →</Link>
        </li>
        <br />
        <li style={{ borderBottom: '2px solid black', display: 'inline-block' }}>
          <Link to="/Interior">Project →</Link>
        </li>
        <br />
        <li style={{ borderBottom: '2px solid black', display: 'inline-block' }}>
          <Link to="/contact">Contact →</Link>
        </li>
        <br />
      </ul>
    </div>
  </div> */}
















  <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            zIndex: 0,
          }}
        >
          <source src='assets/img/allimgLP/Bay/1.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Section */}
        <div
          className="ltn__about-us-area pt-20 pb-10"
          id="responsive-text-project-bannerpage"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                  <div
                    style={{
                      color: 'white',
                      padding: '4rem 2rem',
                      fontFamily: 'sans-serif',
                    }}
                  >
                 
                    <ul style={{ fontSize: '2rem', lineHeight: '1.8' }}>
                         <div className="site-logo">
						<Link to="/"><img src={publicUrl+"assets/img/updatates/project/Logo LPI orange.png"} alt="Logo" style={{width:'150px',height:'auto'}} /></Link>
					</div>
                      <li
                        style={{
                          // borderBottom: '2px solid white',
                          display: 'inline-block',
                        }}
                      >
                        <Link to="/">Home →</Link>
                      </li>
                      <br />
                      <li
                        style={{
                          // borderBottom: '2px solid white',
                          display: 'inline-block',
                        }}
                      >
                        <Link to="/Interior">Project →</Link>
                      </li>
                      <br />
                      <li
                        style={{
                          // borderBottom: '2px solid white',
                          display: 'inline-block',
                        }}
                      >
                        <Link to="/GetQuote">Get a Quote →</Link>
                      </li>
                      <br />
                      <li
                        style={{
                          // borderBottom: '2px solid white',
                          display: 'inline-block',
                        }}
                      >
                        <Link to="/Faqs">Pages →</Link>
                      </li>
                      <br />
                      <li
                        style={{
                          // borderBottom: '2px solid white',
                          display: 'inline-block',
                        }}
                      >
                        <Link to="/contact">Contact →</Link>
                      </li>
                      <br />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  </>

    );
  }
