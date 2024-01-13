import React from "react";
import logo from "../Images/logo.png";
import playstore from "../Images/get-it-on.png";

export default function Footer() {
  return (
    <div>
      <footer class="text-center text-lg-start text-muted pt-5">
        <section className="footer-sec1">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 mb-4">
                <h6 class="mb-4">
                  <img src={logo} alt="" className="footer-logo" />
                </h6>
                <div>
                  <a href="/" class="p-2 text-reset">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="/" class="p-2 text-reset">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="/" class="p-2 text-reset">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="/" class="p-2 text-reset">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
                <div className="pt-5 copyright">
                  All trademarks are the property of their respective owners All
                  rights reserved © 2024 intelliFill Tech Pvt Ltd.
                </div>
              </div>

              <div class="col-md-2 mx-auto mb-4">
                <p>
                  <a href="/" class="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="/" class="text-reset">
                    Sitemap
                  </a>
                </p>
                <p>
                  <a href="/" class="text-reset">
                    Credits
                  </a>
                </p>
                <p>
                  <a href="/" class="text-reset">
                    Help Center
                  </a>
                </p>
                <p>
                  <a href="/" class="text-reset">
                    Community Guidelines
                  </a>
                </p>
              </div>

              <div class="col-md-2 mx-auto mb-4">
                <p>
                  <a href="/" class="text-reset">
                    Accessibility
                  </a>
                </p>
                <p>
                  <a href="/" class="text-reset">
                    Mobile
                  </a>
                </p>
                <p>
                  <a href="/" class="text-reset">
                    Marketing
                  </a>
                </p>
                <p>
                  <a href="/" class="text-reset">
                    Advertising
                  </a>
                </p>
                <p>
                  <a href="/" class="text-reset">
                    Report Issue
                  </a>
                </p>
              </div>

              <div class="col-md-2 mx-auto mb-md-0 mb-4">
                <p>
                  <a href="/" class="text-reset">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="/" class="text-reset">
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a href="/" class="text-reset">
                    Trust & Safety
                  </a>
                </p>
              </div>
              <div class="col-md-3 mx-auto mb-md-0 mb-4">
                <img src={playstore} alt="" className="footer-playstore" />
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
