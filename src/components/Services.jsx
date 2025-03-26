import React, { useState } from "react";
import "./Services.css";
import DesignCollage from "../images/design-develop.png";
import DevelopmentCollage from "../images/development-collage.png";
import Dots from "../images/dots-svg.png";
import ParallaxSquares from "../images/parallax-squares.png";
import { Link, useNavigate } from "react-router";
import Image9 from "../images/image-8.png";

export default function Services() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = (event, path) => {
    event.preventDefault(); // Prevent immediate navigation
    setIsLoading(true);
    setProgress(0);

    let counter = 0;
    const interval = setInterval(() => {
      counter += 10;
      setProgress(counter);
      if (counter >= 100) clearInterval(interval);
    }, 200); // Updates every 200ms

    setTimeout(() => {
      clearInterval(interval);
      setIsLoading(false);
      navigate(path);
    }, 2000); // Show loading for 2 seconds
  };

  return (
    <section className="services-section">
      <span>
        We offer a specialist range of web & digital solutions, find what suits
        you and your business and let's chat!
      </span>
      <div className="services-squares">
        <div className="service-square s-s1">
          <h4>Web Design & Development</h4>
          <p>
            At ProKreatives, we craft high-performance websites that blend
            stunning design with cutting-edge development. Our web design &
            development services ensure your brand stands out with a
            user-friendly, responsive, and fast-loading website tailored to your
            business needs. Whether you need a sleek corporate site, an
            e-commerce platform, or a custom web solution, we deliver seamless
            digital experiences that drive engagement and growth.
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing. <br />
            <br />
            <span>
              {/* <Link
                to="/services/web-design"
                className="contact-link"
                onClick={(e) => handleClick(e, "/services/web-design")}
              >
                Learn more..
              </Link>{" "} */}
            </span>
          </p>
        </div>
        <div className="service-square s-s2">
          <h4>UI/UX Solutions</h4>
          <p>
            ProKreatives’ UI/UX solutions are designed to create intuitive,
            visually engaging, and user-centric digital experiences. From
            in-depth UI/UX audits to designing seamless interfaces, wireframing,
            prototyping, and rigorous usability testing, we ensure every
            interaction is smooth and impactful. Our approach focuses on
            enhancing user satisfaction, boosting engagement, and optimizing
            conversions through thoughtful design and strategic user experience
            improvements.
          </p>
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="service-square s-s2 moblie-color-change1">
          <h4>Digital Marketing</h4>
          <p>
            ProKreatives’ digital marketing services help businesses grow by
            maximizing their online presence across platforms like Instagram,
            TikTok, Google, Gmail, and more. We create data-driven marketing
            strategies, engaging content, and targeted campaigns to boost brand
            awareness, drive traffic, and generate leads. Whether it’s social
            media marketing, paid ads, or email campaigns, we ensure your
            business reaches the right audience and achieves measurable results.
          </p>
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="service-square s-s1 moblie-color-change2">
          <h4>Analytics & Reporting</h4>
          <p>
            ProKreatives’ Analytics & Reporting services provide valuable
            insights to help businesses make data-driven decisions. We analyze
            website performance, user behavior, traffic sources, and competition
            to identify opportunities for growth. Our detailed reports and
            actionable recommendations ensure you stay ahead of the competition,
            optimize marketing efforts, and enhance overall digital strategy for
            maximum impact.
          </p>
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>

      <div className="services-wrapper-row">
        <div className="service-div">
          <img src={DesignCollage} alt="Design collage" />
          <div className="service-text">
            <h1>Web Design & Development</h1>
            <p>
              At ProKreatives, we craft high-performance websites that blend
              stunning design with cutting-edge development. Our web design &
              development services ensure your brand stands out with a
              user-friendly, responsive, and fast-loading website tailored to
              your business needs. Whether you need a sleek corporate site, an
              e-commerce platform, or a custom web solution, we deliver seamless
              digital experiences that drive engagement and growth <br />
            </p>
            <div className="offerings">
              <ul>
                <li>Website design</li>
                <li>Development</li>
              </ul>
              <ul>
                <li>Branding</li>
                <li>Offering 4</li>
              </ul>
            </div>
            {/* <br /> Whether you need a sleek business website or a complex web
                  application, our team ensures that design meets strategy for maximum
                  impact. We follow a user-first approach, conducting in-depth
                  research, wireframing, and prototyping to create designs that
                  enhance usability and accessibility. Our web design process combines
                  modern aesthetics with performance optimization, ensuring
                  fast-loading, responsive, and conversion-driven websites. With a
                  keen focus on branding, typography, and interaction design, we
                  create digital experiences that not only attract visitors but turn
                  them into loyal customers. */}
            <div className="view-service">
              <Link
                to="/contact"
                className="contact-link"
                onClick={(e) => handleClick(e, "/contact")}
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>

        <div className="service-div">
          <img src={Image9} alt="Design collage" />
          <div className="service-text">
            <h1>UI/UX Solutions</h1>
            <p>
              ProKreatives’ UI/UX solutions are designed to create intuitive,
              visually engaging, and user-centric digital experiences. From
              in-depth UI/UX audits to designing seamless interfaces,
              wireframing, prototyping, and rigorous usability testing, we
              ensure every interaction is smooth and impactful. Our approach
              focuses on enhancing user satisfaction, boosting engagement, and
              optimizing conversions through thoughtful design and strategic
              user experience improvements. <br />
            </p>
            <div className="offerings">
              <ul>
                <li>UI & UX designing</li>
                <li>UI/UX Auditing</li>
              </ul>
              <ul>
                <li>Wireframing</li>
                <li>Prototyping</li>
              </ul>
            </div>
            {/* <br /> Whether you need a sleek business website or a complex web
                  application, our team ensures that design meets strategy for maximum
                  impact. We follow a user-first approach, conducting in-depth
                  research, wireframing, and prototyping to create designs that
                  enhance usability and accessibility. Our web design process combines
                  modern aesthetics with performance optimization, ensuring
                  fast-loading, responsive, and conversion-driven websites. With a
                  keen focus on branding, typography, and interaction design, we
                  create digital experiences that not only attract visitors but turn
                  them into loyal customers. */}
            <div className="view-service">
              <Link
                to="/contact"
                className="contact-link"
                onClick={(e) => handleClick(e, "/contact")}
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="services-wrapper-row">
        <div className="service-div">
          <img src={DesignCollage} alt="Design collage" />
          <div className="service-text">
            <h1>Digital Marketing</h1>
            <p>
              ProKreatives’ digital marketing services help businesses grow by
              maximizing their online presence across platforms like Instagram,
              TikTok, Google, Gmail, and more. We create data-driven marketing
              strategies, engaging content, and targeted campaigns to boost
              brand awareness, drive traffic, and generate leads. Whether it’s
              social media marketing, paid ads, or email campaigns, we ensure
              your business reaches the right audience and achieves measurable
              results.
              <br />
              {/* <br /> Our expert team transforms pixel-perfect designs into fully
                  functional static websites using clean HTML, CSS, and JavaScript.
                  Every site we build is responsive, SEO-friendly, and optimized for
                  speed, ensuring an outstanding experience across all devices.
                  Whether you're launching a portfolio, company website, or landing
                  page, we craft static solutions that are both visually stunning and
                  technically robust. */}
            </p>
            <div className="offerings">
              <ul>
                <li>Google Ads</li>
                <li>
                  Social Media <br /> Marketing
                </li>
              </ul>
              <ul>
                <li>Email Advertising</li>
                <li>Offering 4</li>
              </ul>
            </div>
            <div className="view-service">
              <Link
                to="/contact"
                className="contact-link"
                onClick={(e) => handleClick(e, "/contact")}
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>

        <div className="service-div">
          <img src={DesignCollage} alt="Design collage" />
          <div className="service-text">
            <h1>Analytics & Reporting</h1>
            <p>
              ProKreatives’ Analytics & Reporting services provide valuable
              insights to help businesses make data-driven decisions. We analyze
              website performance, user behavior, traffic sources, and
              competition to identify opportunities for growth. Our detailed
              reports and actionable recommendations ensure you stay ahead of
              the competition, optimize marketing efforts, and enhance overall
              digital strategy for maximum impact for online presence.
              <br />
              {/* <br /> Our expert team transforms pixel-perfect designs into fully
                  functional static websites using clean HTML, CSS, and JavaScript.
                  Every site we build is responsive, SEO-friendly, and optimized for
                  speed, ensuring an outstanding experience across all devices.
                  Whether you're launching a portfolio, company website, or landing
                  page, we craft static solutions that are both visually stunning and
                  technically robust. */}
            </p>
            <div className="offerings">
              <ul>
                <li>Website traffic</li>
                <li>
                  Competition <br /> analysis
                </li>
              </ul>
              <ul>
                <li>User behavior</li>
                <li>Industry trends</li>
              </ul>
            </div>
            <div className="view-service">
              <Link
                to="/contact"
                className="contact-link"
                onClick={(e) => handleClick(e, "/contact")}
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </div>

      <img
        src={ParallaxSquares}
        alt="Parallax squares"
        data-speed="-3"
        className="layer"
        id="parallax-squares3"
      />
      <img
        src={Dots}
        alt="Parallax dots"
        data-speed="1"
        className="layer"
        id="parallax-dots3"
      />

      <img
        src={Dots}
        alt="Parallax dots"
        data-speed="-3"
        className="layer"
        id="parallax-dots4"
      />
      <img
        src={ParallaxSquares}
        alt="Parallax squares"
        data-speed="3"
        className="layer"
        id="parallax-squares4"
      />
      <img
        src={ParallaxSquares}
        alt="Parallax squares"
        data-speed="1"
        className="layer"
        id="parallax-squares5"
      />

      <img
        src={Dots}
        alt="Parallax dots"
        data-speed="1"
        className="layer"
        id="parallax-dots5"
      />
      <img
        src={ParallaxSquares}
        alt="Parallax squares"
        data-speed="3"
        className="layer"
        id="parallax-squares6"
      />

      <div className={`loading-screen ${isLoading ? "show" : ""}`}>
        <h1>Loading... {progress}%</h1>
      </div>
    </section>
  );
}
