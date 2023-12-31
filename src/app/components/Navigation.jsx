import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => (
  <div>
    <Link to="/dashboard">
      <h1>
        Eze's App
      </h1>
    </Link>
  </div>
);

export const ConnectedNavigation = connect(state => state) (Navigation);