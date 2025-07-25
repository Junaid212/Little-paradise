import { useState } from "react";
import { CircleArrowLeft, ChevronRight, CircleArrowRight, ArrowLeft, ArrowRight } from "lucide-react";


const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      text: "We appointed them for our house in Mangalore. They helped us out with everything. Any concerns or confusion we the colors, to the furniture design, every detail was looked at.",
      name: "-Mujeeb",  
    },
    {
      id: 2,
      text: " التعامل و العمل يتميز دائما بالاحترافية و الاهتمام بالتفاصيل العناية باهتمامات العميل مع مراعاة جوانب الجمال المتنوعة ينتج عنه تجربة رائعة بكل جوانبها و ينتج دائما عمل متميز و مشروعات غاية في الدقة و الاحترافية مع الطموح العالي و التطور المستمر سيصل بالتأكيد لأعلى مكانة ممكنة‎",
      name: "-Omar Alm Eldien",
    },
    {
      id: 3,
      text: "A group of highly enthusiastic, committed architects, who focus on delivering the idea and service based on client requirements. Always full of ideas and never back down from any challenge that might come in the way",
      name: "-Arkaan Sayed",
    },
    {
      id: 4,
      text: "Innovative team, will provide you high quality and high end design ideas, understanding and supportive",
      name: "-Rahim A",
    },
    {
      id: 5,
      text: "Contacted this company for a personal project. They delivered a wonderful house plan and design for my house. Must say the team was very understanding of my concerns and vision.",
      name: "-Muneeb Ali",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="min-vh-100 d-flex align-items-center " 
    style={{
      backgroundColor: 'white' , 
      marginTop:"-200px",
      }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-70">
          <h1 className="display-4  text-dark mb-0"
          style={{fontSize:"2.5rem",fontWeight:"500",marginTop:"200px"}}
          >What Our Clients Tell About Us </h1>
        </div>

        {/* Testimonials Container */}
        <div className="position-relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="position-absolute  d-flex align-items-center justify-content-center"
            style={{ 
              left: '-80px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              // width: '50px', 
              height: '50px',
              // backgroundColor: '#ff6b47',
              border: 'none',
              zIndex: 10,
              borderRadius:"90px"
            }}
          >
            <ArrowLeft  size={32} color="#C74B28" />
          </button>

          <button 
            onClick={nextSlide}
            className="position-absolute   d-flex align-items-center justify-content-center"
            style={{ 
              right: '-90px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              // width: '50px', 
              height: '50px',
              // backgroundColor: '#ff6b47',
              border: 'none',
              zIndex: 10,
              borderRadius:"90px",
              
            }}
          >
            <ArrowRight  size={32} color="#C74B28" />
          </button>

          {/* Testimonials Grid */}
          <div className="row g-4">
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
              <div key={testimonial.id} className="col-md-4">
                <div 
                  className="card h-100 border-0 shadow-sm"
                  style={{ backgroundColor: '#fcd1d44f' }}
                >
                  <div className="card-body p-4">
                    {/* Quote Icon */}
                    <div className="mb-3">
                      <span 
                        className="fs-1 fw-bold"
                        style={{ color: '#CB4D29' }}
                      >
                        ❝
                      </span>
                    </div>

                    {/* Testimonial Text */}
                    <p 
                      className="mb-4 lh-base"
                      style={{ 
                        color: '#6c757d',
                        fontSize: '0.95rem'
                      }}
                    >
                      {testimonial.text}
                    </p>

                    {/* Profile Section */}
                    <div className="d-flex align-items-center">
                      {/* <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      /> */}
                      <div>
                        <h6 className="mb-1 fw-bold text-dark">{testimonial.name}</h6>
                        <small 
                          className="text-uppercase fw-medium"
                          style={{ color: '#6c757d', fontSize: '0.8rem', letterSpacing: '0.5px' }}
                        >
                          {/* {testimonial.title} */}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;