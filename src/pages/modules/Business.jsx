
import './Business.css'; // We'll create this CSS file

import React from 'react';


const BusinessSolutions = () => {
  return (
    <div className="business-solutions">
      <div className="container">
        <div className="content-section">
          <div className="breadcrumb">
            <span>For Business</span>
          </div>
          
          <div className="logo-section">
            <h1 className="main-logo">Exam-dec</h1>
            <div className="learning-hub">
              <span className="hub-badge">Learning Hub+</span>
            </div>
          </div>
          
          <div className="description">
            <p>
              Get a learning library with unlimited live and interactive classes for your organisation, 
              offering 700+ monthly classes across AI, technology, data, cloud, and other digital skills.
            </p>
          </div>
          
          <div className="cta-section">
            <button className="cta-button">
              Explore Our Solutions
            </button>
          </div>
          
          <div className="stat-section">
            <div className="stat-item">
              <div className="stat-value">30%+</div>
              <div className="stat-label">increase growth during performance</div>
            </div>
          </div>
        </div>
        
        <div className="clients-section">
          <div className="clients-header">
            <h3>Trusted by Digital Leaders and Practitioners from 100+ Fortune 500 Companies</h3>
          </div>
          
          <div className="clients-grid">
            {/* Actual company logos with proper styling */}
            <div className="client-logo">
              <div className="logo-box bcg">BCG</div>
            </div>
            <div className="client-logo">
              <div className="logo-box dll">DLL</div>
            </div>
            <div className="client-logo">
              <div className="logo-box amazon">amazon</div>
            </div>
            <div className="client-logo">
              <div className="logo-box vodafone">vodafone</div>
            </div>
            <div className="client-logo">
              <div className="logo-box bosch">BOSCH</div>
            </div>
            <div className="client-logo">
              <div className="logo-box mphasis">Mphasis</div>
            </div>
            <div className="client-logo">
              <div className="logo-box airbus">AIRBUS</div>
            </div>
            <div className="client-logo">
              <div className="logo-box world-bank">THE WORLD BANK</div>
            </div>
            <div className="client-logo">
              <div className="logo-box cisco">CISCO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutions;