'use client';

import React from 'react';
import Link from 'next/link';
import { buttonStyle } from './styles';

function handleKeyPress(event, href) {
  if (event.key === 'Enter' || event.key === ' ') {
    window.location.href = href;
  }
}

function ClientNavBar() {
  return (
    <nav>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <Link href="/" legacyBehavior>
            <a 
              style={buttonStyle} 
              tabIndex="0" 
              onKeyPress={(e) => handleKeyPress(e, '/')}
            >
              Home
            </a>
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link href="/things-to-read" legacyBehavior>
            <a 
              style={buttonStyle} 
              tabIndex="0" 
              onKeyPress={(e) => handleKeyPress(e, '/things-to-read')}
            >
              Things to Read
            </a>
          </Link>
        </li>
        <li>
          <Link href="/meet-my-cats" legacyBehavior>
            <a 
              style={buttonStyle} 
              tabIndex="0" 
              onKeyPress={(e) => handleKeyPress(e, '/meet-my-cats')}
            >
              Meet my cats
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default ClientNavBar;
