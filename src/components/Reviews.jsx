import { useState, useEffect } from "react";

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      text: "We appointed them for our house in Mangalore. They helped us out with everything. Any concerns or confusion we had was immediately cleared by them. The biggest plus point was that the result was exactly like the plan. From the colors, to the furniture design, every detail was looked at.",
      name: "-Mujeeb",
    },
    {
      id: 2,
      text: "التعامل و العمل يتميز دائما بالاحترافية و الاهتمام بالتفاصيل العناية باهتمامات العميل مع مراعاة جوانب الجمال المتنوعة ينتج عنه تجربة رائعة بكل جوانبها و ينتج دائما عمل متميز و مشروعات غاية في الدقة و الاحترافية مع الطموح العالي و التطور المستمر سيصل بالتأكيد لأعلى مكانة ممكنة‎",
      name: "-Omar Alm Eldien",
    },
    {
      id: 3,
      text: "AA group of highly enthusiastic, committed architects, who focus on delivering the idea and service based on client requirements. Always full of ideas and never back down from any challenge that might come in the way",
      name: "-Arkaan Sayed",
    },
    {
      id: 4,
      text: "Innovative team, will provide you high quality and high end design ideas, understanding and supportive.",
      name: "-Rahim A",
    },
    {
      id: 5,
      text: "Contacted this company for a personal project. They delivered a wonderful house plan and design for my house. Must say the team was very understanding of my concerns and vision.",
      name: "-Muneeb Ali",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Adjust items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 576) setItemsPerView(1);
      else if (width < 992) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, 3000); // change slide every 5 seconds
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div
      className="py-5"
      style={{
        backgroundColor: "white",
        marginTop: "-150px",
      }}
    >
      <div className="container position-relative">
        {/* Header */}
        <div className="text-center mb-5">
          <h1
            className="text-dark"
            style={{ fontSize: "2.2rem", fontWeight: "500", marginTop: "200px" }}
          >
            What Our Clients Tell About Us
          </h1>
        </div>

        {/* Testimonials Grid */}
        <div className="row g-4">
          {testimonials
            .slice(currentIndex, currentIndex + itemsPerView)
            .map((testimonial) => (
              <div key={testimonial.id} className="col-12 col-sm-6 col-md-4">
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{ backgroundColor: "#fcd1d44f" }}
                >
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <span className="fs-1 fw-bold" style={{ color: "#CB4D29" }}>
                        ❝
                      </span>
                    </div>
                    <p
                      className="mb-4 lh-base"
                      style={{
                        color: "#6c757d",
                        fontSize: "0.95rem",
                      }}
                    >
                      {testimonial.text}
                    </p>
                    <div>
                      <h6 className="mb-1 fw-bold text-dark">{testimonial.name}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
