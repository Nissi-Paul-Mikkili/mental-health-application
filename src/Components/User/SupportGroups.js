import React, { useState } from 'react';
import './SupportGroups.css';

function SupportGroups() {
  const [supportGroups] = useState([
    {
      id: 1,
      name: 'Anxiety Support Group',
      description: 'A group for individuals dealing with anxiety to share experiences and coping strategies.',

      link: 'https://t.me/+y4FDKgkmB9FhYzM1',
    },
    {
      id: 2,
      name: 'Depression Support Group',
      description: 'A safe space to discuss challenges and progress for individuals battling depression.',

      link: 'https://t.me/+o5kV2zlMZ4pkNTFl',
    },
    {
      id: 3,
      name: 'Student Stress Relief Group',
      description: 'Focused on students managing academic stress and finding balance.',
  
      link: 'https://t.me/+6l0ZpGiFEzI1MjBl',
    },
  ]);

  return (
    <div className="support-groups-container">
      <h1>Support Groups</h1>
      <p>Join one of our support groups to connect with others and find encouragement.</p>
      <div className="groups-list">
        {supportGroups.map((group) => (
          <div key={group.id} className="group-card">
            <h2>{group.name}</h2>
            <p>{group.description}</p>

            <a
              href={group.link}
              target="_blank"
              rel="noopener noreferrer"
              className="join-btn"
            >
              Join Group
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupportGroups;
