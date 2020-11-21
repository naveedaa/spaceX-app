import React from 'react';
import './style.css';

export const MissionKey = () => {
  return (
    <div className="missionKey">
      <h1 className="key" >Launches</h1>
      <br />
      <p>
        <span className='success'/> =  Success
      </p>
      <br />
      <p>
        <span className="danger" /> = Failure
      </p>
      <br />
      <p>
        <span className="primary" /> = Pending
      </p>
      <br />
    </div>
  );
}