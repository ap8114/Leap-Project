// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Website.css';

// const FooterSection = () => {
//   return (
//     <div>
//       <footer className="footer">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-3 col-md-6">
//               <h5>COMPANY</h5>
//               <Link to="/company">Leadership</Link>
//               <Link to="/company">Media</Link>
//               <Link to="/company">Careers</Link>
//               <Link to="/company">Innovation timeline</Link>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <h5>FEATURES</h5>
//               <Link to="/client-and-matter-management">Client and matter management</Link>
//               <Link to="/document-automation">Document automation</Link>
//               <Link to="/timerecordingbilling">Time recording and billing</Link>
//               <Link to="/reporting">Legal accounting</Link>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <h5>RESOURCES</h5>
//               <Link to="/resources">Brochures & guides</Link>
//               <Link to="/resources">White papers</Link>
//               <Link to="/resources">Testimonials</Link>
//               <Link to="/resources">Blog</Link>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <h5>CONTACT US</h5>
//               <p className="footer-address">
//                 Fastrack Software Ltd<br />
//                 633 Halifax Road<br />
//                 Liversedge<br />
//                 WF15 8HG
//               </p>
//               <a href="tel:+44 7977 317760">Tel: +44 7977 317760</a>
//               <a href="mailto:sales@fastracksoftware.co.uk">Email: sales@fastracksoftware.co.uk</a>
//               <Link to="/contactus">Contact Form</Link>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <div className="row align-items-center">
//               <div className="col-md-6">
//                 <small>
//                   Copyright © 2025 Fastrack Software Ltd. All rights reserved.
//                 </small>
//               </div>
//               <div className="col-md-6">
//                 <div className="d-flex justify-content-md-end gap-3">
//                   <Link to="/terms" className="small">Terms</Link>
//                   <Link to="/privacy-policy" className="small">Privacy Policy</Link>
//                   {/* <Link to="/cookie-policy" className="small">Cookie Policy</Link> */}
//                   {/* <Link to="/security" className="small">Security Statement</Link>
//                   <Link to="/sitemap" className="small">Sitemap</Link> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FooterSection;
import React from 'react';
import { Link } from 'react-router-dom';
import './Website.css';
import logoFastTrack from "../../../assets/logoFastTrack.png";

const FooterSection = () => {
  return (
    <footer className="footer">

      {/* Main Footer Content */}
      <div className="p-5">
        <div className="row g-4">
          {/* COMPANY Column */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase mb-3 footer-heading">COMPANY</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/company" className="text-decoration-none hover-accent">Leadership</Link></li>
              <li className="mb-2"><Link to="/company" className="text-decoration-none hover-accent">Media</Link></li>
              <li className="mb-2"><Link to="/company" className="text-decoration-none hover-accent">Careers</Link></li>
              <li className="mb-2"><Link to="/company" className="text-decoration-none hover-accent">Innovation timeline</Link></li>
            </ul>
          </div>

          {/* FEATURES Column */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase mb-3 footer-heading">FEATURES</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/client-and-matter-management" className="text-decoration-none hover-accent">Client and matter management</Link></li>
              <li className="mb-2"><Link to="/document-automation" className="text-decoration-none hover-accent">Document automation</Link></li>
              <li className="mb-2"><Link to="/timerecordingbilling" className="text-decoration-none hover-accent">Time recording and billing</Link></li>
              <li className="mb-2"><Link to="/reporting" className="text-decoration-none hover-accent">Legal accounting</Link></li>
            </ul>
          </div>

          {/* RESOURCES Column */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase mb-3 footer-heading">RESOURCES</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/resources" className="text-decoration-none hover-accent">Brochures & guides</Link></li>
              <li className="mb-2"><Link to="/resources" className="text-decoration-none hover-accent">White papers</Link></li>
              <li className="mb-2"><Link to="/resources" className="text-decoration-none hover-accent">Testimonials</Link></li>
              <li className="mb-2"><Link to="/resources" className="text-decoration-none hover-accent">Blog</Link></li>
            </ul>
          </div>

          {/* CONTACT US Column */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase mb-3 footer-heading">CONTACT US</h5>
            <address className="mb-3">
              Fastrack Software Ltd<br />
              633 Halifax Road<br />
              Liversedge<br />
              WF15 8HG
            </address>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="tel:+447977317760" className="text-decoration-none hover-accent">Tel: +44 7977 317760</a></li>
              <li className="mb-2"><a href="mailto:sales@fastracksoftware.co.uk" className="text-decoration-none hover-accent">Email: sales@fastracksoftware.co.uk</a></li>
              <li className="mb-2"><Link to="/contactus" className="text-decoration-none hover-accent">Contact Form</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-5 border-secondary" />

        {/* App Download Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <h5 className="text-uppercase mb-4">Get FastTrack on mobile</h5>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="#" className="btn btn-outline-light px-4 py-2 rounded-1">
                <i className="fab fa-google-play me-2"></i> Google Play
              </a>
              <a href="#" className="btn btn-outline-light px-4 py-2 rounded-1">
                <i className="fab fa-apple me-2"></i> App Store
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-secondary" />

        {/* Logo and Mission Section */}
        <div className="row align-items-center mb-4">
         <div className="col-md-6 mb-4 mb-md-0">
  <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center text-center text-md-start">
    <img
      src={logoFastTrack}
      alt="FastTrack Software Logo"
      className="img-fluid mb-2 mb-md-0"
      style={{
        height: "70px",
        width: "auto",
        maxWidth: "170px",
        marginRight: "20px"
      }}
    />
    <h5 className="text-uppercase mb-0 mission-text">
      INNOVATING THE LEGAL PROCESS FOR EVERYONE
    </h5>
  </div>
</div>

          <div className="col-md-6">
            <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3">
              <Link to="/terms" className="text-decoration-none small hover-accent">Terms of Service</Link>
              {/* <Link to="/legal" className="text-decoration-none small hover-accent">Legal Service</Link> */}
              {/* <Link to="/trust" className="text-decoration-none small hover-accent">Trust Centre</Link> */}
              <Link to="/privacy" className="text-decoration-none small hover-accent">Privacy Policy</Link>
              {/* <Link to="/cookies" className="text-decoration-none small hover-accent">Cookies</Link> */}
              {/* <Link to="/gdpr" className="text-decoration-none small hover-accent">GDPR</Link> */}
              {/* <Link to="/accessibility" className="text-decoration-none small hover-accent">Accessibility</Link> */}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-3 border-secondary" />

        {/* Copyright Section */}
        <div className="row">
          <div className="col-12 text-center">
            <small className="">
              © 2008 - {new Date().getFullYear()} FastTrack Software Ltd | 633 Halifax Road, Liversedge, WF15 8HG
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;