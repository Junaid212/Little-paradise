import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function OurServices() {
  // Service data with titles, ids, and images
  const services = [
    {
      id: "faq-item-2-1",
      title: "Feasibility and Site Analysis",
      text:'Our feasibility and site analysis services lay the groundwork for your project with precision and care. We’ll thoroughly assess site conditions and overall project viability to identify challenges and opportunities, paving the way for a smooth, informed, and successful process.',
      image: "https://d33om22pidobo4.cloudfront.net/pages/blocks/items/images/inter-y-arch-op5-jpeg-9922f7c6-f30e-49c6-a941-f4e1766f03dd.jpeg?d=1024x1024&f=webp"
    },
    {
      id: "faq-item-2-2",
      title: "Interior Design & Detail",
      text:'We craft beautiful and functional interior architecture and design solutions that resonate with your brand’s identity and commitment to sustainability. By collaborating closely with you, we’ll transform your vision into reality with interiors that go beyond your expectations.',
      image: "https://d33om22pidobo4.cloudfront.net/pages/blocks/items/images/240726_la-mer-villa_general-draft-4jpg-cd68fd36-fd6e-4043-85c9-f0fd2fcf6ade.jpg?d=1024x1024&f=webp"
    },
    {
      id: "faq-item-2-3",
      title: "Interior Construction & Fit-Out",
      text:'From inception to the final touches, our construction and fit-out specialists bring your space to life with exceptional craftsmanship. We’ll manage all aspects of the process with minimal disruptions, while incorporating environmentally conscious practices every step of the way.',
      image: "https://d33om22pidobo4.cloudfront.net/pages/blocks/items/images/photo1677063003-1jpeg-25617637-4517-4633-a26f-e22a37f621f7.jpeg?d=1024x1024&f=webp"
    },
    {
      id: "faq-item-2-4",
      title: "FF&E (Furniture, Fixtures & Equipment)",
      text:'Our FF&E services seamlessly balance style, functionality, and sustainability. From design and selection to procurement and installation, we believe that every element should contribute to creating a space that’s as durable as it is distinctive.',
      image: "https://d33om22pidobo4.cloudfront.net/pages/blocks/items/images/dsc04203jpg-eca44566-9e72-4c7a-941f-f6b66b96e8e3.jpg?d=1024x1024&f=webp"
    },
    {
      id: "faq-item-2-5",
      title: "Lighting Design",
      text:'We design bespoke lighting solutions that elevate your environment, crafting an ambiance that’s both captivating and functional to create the perfect atmosphere for your space and enhance its aesthetic appeal.',
      image: "https://d33om22pidobo4.cloudfront.net/pages/blocks/items/images/electrical-designjpg-b99b136b-e170-4df3-9d52-d742569dab7e.jpg?d=1024x1024&f=webp"
    },
    {
      id: "faq-item-2-6",
      title: "MEP Design",
      text:'Combining creativity with technical expertise, we develop mechanical, electrical, and plumbing solutions with efficiency at their cores. All our designs are engineered to optimise energy use and ensure a smooth, efficient fit-out process.',
      image: "https://d33om22pidobo4.cloudfront.net/pages/blocks/images/join-us-imagejpeg-dca8f3c4-3339-48f2-9eda-ec138e672b7d5f13d3ef-c185-442b-a9ed-1fc4bcc99275.jpeg?d=1024x1024&f=webp"
    },
  ];

  // State to hold the selected image
  const [selectedImage, setSelectedImage] = useState(services[0].image);

  return (
    <div className="ltn__faq-area" id='ltn__faq-area'>
      <h1 className='h1-txt text-center pb-4'>Our Services</h1>
      <div className="container">
        <div className="row">
          {/* Left Side - Accordion */}
          <div className="col-lg-6">
            <div className="ltn__faq-inner ltn__faq-inner-2">
              <div id="accordion_2">
                {services.map((service, index) => (
                  <div
                    className="card"
                    key={service.id}
                    style={{
                      borderRadius:
                        index === 0
                          ? '1rem 1rem 0 0'
                          : index === services.length - 1
                          ? '0 0 1rem 1rem'
                          : '0'
                    }}
                  >
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${service.id}`}
                      aria-expanded="false"
                      onClick={() => setSelectedImage(service.image)}
                      style={{ cursor: "pointer" }}
                    >
                      {service.title}
                    </h6>
                    <div
                      id={service.id}
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                         {service.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6">
            <aside className="sidebar-area ltn__right-sidebar">
              <div className="widget ltn__banner-widget go-top" id="imageChange">
                <img
                  src={selectedImage}
                  alt="Selected Service"
                  style={{
                    width: '100%',
                    borderRadius: '0.5rem',
                    objectFit: 'cover',
                    maxHeight: '400px'
                  }}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
