import React from "react";
import "./footer.css";
import {
  IconBrandGmail,
  IconBrandTelegram,
  IconBrandTwitter,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="footerSection">
      <div className="container">
        <div className="row">
          <div className="single-cta">
            <h4>Find us</h4>
            <span>Bahirdar, Ethiopia</span>
          </div>
          <div className="single-cta">
            <h4>Call us</h4>
            <span>+251947953537</span>
          </div>
          <div className="single-cta">
            <h4>Mail us</h4>
            <span>Hailemelekotmelakie1991@gmail.com</span>
          </div>
        </div>
        <div
          style={{
            margin: "20px 0px 20px 0px",

            backgroundColor: "red",
            borderBottom: "1px solid var(--white-color)",
          }}
        ></div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="next.svg" className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a>
                    <IconBrandTelegram color="#878787" />
                  </a>
                  <a>
                    <IconBrandTwitter color="#878787" />
                  </a>
                  <a>
                    <IconBrandGmail color="#878787" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>about</a>
                  </li>
                  <li>
                    <a>services</a>
                  </li>
                  <li>
                    <a>portfolio</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>Our Services</a>
                  </li>
                  <li>
                    <a>Expert Team</a>
                  </li>
                  <li>
                    <a>Contact us</a>
                  </li>
                  <li>
                    <a>Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text ">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <input type="text" placeholder="Email Address" />
                  <button>
                    <IconBrandTelegram />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2023, All Right Reserved by{" "}
                  <a href="mailto:hailemelekotmelakie1991@gmail.com">
                    Hailemelekot
                  </a>
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Terms</a>
                  </li>
                  <li>
                    <a>Privacy</a>
                  </li>
                  <li>
                    <a>Policy</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
