import React, { useState } from "react";
import "./Accordion.css"
import { FormattedMessage } from "react-intl";

interface AccordionItem {
  title: string;
  content: string;
  linkText: string;
  linkHref: string;
}

const accordionData: AccordionItem[] = [
  {
    title: "Avion Blog",
    content:
      "Get all the marketing and business strategy tips you need to help you run an online business.",
    linkText: "Read",
    linkHref: "#",
  },
  {
    title: "Our Community",
    content:
      "Connect with a community of brands, partners, and fellow merchants who understand Avion.",
    linkText: "Connect",
    linkHref: "#",
  },
  {
    title: "Online Courses",
    content:
      "Learn from the best with instant access to lessons from successful entrepreneurs around the world.",
    linkText: "Learn",
    linkHref: "#",
  },
  {
    title: "Help Center",
    content:
      "Find answers in a flash with your dedicated resource for articles and videos from our Support team.",
    linkText: "Get Help",
    linkHref: "#",
  },
  {
    title: "Business Toolkit",
    content:
      "Access step-by-step marketing advice and business strategies to make your online store thrive.",
    linkText: "Get Started",
    linkHref: "#",
  },
  {
    title: "Success Stories",
    content:
      "Uncover expert insights and fresh strategies to inspire your journey in the e-commerce world.",
    linkText: "Explore Now",
    linkHref: "#",
  },
];

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="accordion-section text-center py-5">
      <div className="container">
        <h2 className="fs-3 text-white py-md-4 text-center py-5" style={{textAlign:"center"}}>
        <FormattedMessage id='acardiontitle'/>  
        </h2>

        <div className="row">
   
          <div className="col-12 col-md-6">
            <div className="accordion-left">
              {accordionData.slice(0, 3).map((item, index) => (
                <div className="ac" key={index}>
                  <h2 className="ac-header">
                    <button
                      type="button"
                      className="ac-trigger"
                      onClick={() => toggleAccordion(index)}
                    >
                          {item.title}
                    </button>
                  </h2>
                  <div
                    className={`ac-panel ${
                      activeIndex === index ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="ac-text">{item.content}</p>
                    <a href={item.linkHref} style={{paddingBottom:"30px"}}>{item.linkText}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-6">
            <div className="accordion-right">
              {accordionData.slice(3).map((item, index) => (
                <div className="ac" key={index + 3}>
                  <h2 className="ac-header">
                    <button
                      type="button"
                      className="ac-trigger"
                      onClick={() => toggleAccordion(index + 3)}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    className={`ac-panel ${
                      activeIndex === index + 3 ? "d-block" : "d-none"
                    }`}
                    
                  >
                    <p className="ac-text">{item.content}</p>
                    <a href={item.linkHref} style={{paddingBottom:"30px"}}>{item.linkText}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
