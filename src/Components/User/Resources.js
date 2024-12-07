import React from 'react';
import './Resources.css';

function Resources() {
  return (
    <div className="resources-container">
      <h1>Mental Health Resources</h1>
      <p>Here are some resources to help you with your mental well-being:</p>

      <div className="resource-box">
        <a
          href="https://www.youtube.com/watch?v=cMulQrRnwtc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Relaxing Music for Mental Health</h3>
          <p>Listen to soothing music to relax and improve mental clarity.</p>
        </a>
      </div>

      <div className="resource-box">
        <a
          href="https://www.nimh.nih.gov/health"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>National Institute of Mental Health (NIMH)</h3>
          <p>Explore resources and information on mental health.</p>
        </a>
      </div>

      <div className="resource-box">
        <a
          href="https://www.mentalhealth.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>MentalHealth.gov</h3>
          <p>Your guide to mental health resources and information.</p>
        </a>
      </div>
    </div>
  );
}

export default Resources;
