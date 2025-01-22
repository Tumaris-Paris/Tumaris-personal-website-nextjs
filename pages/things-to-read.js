import React from 'react';
import ClientNavBar from '../components/ClientNavBar';
import { buttonStyle } from '../components/styles';

const readingLinks = [
  {
    url: 'https://en.wikipedia.org/wiki/The_Three-Body_Problem_(novel)',
    title: 'The Three-Body Problem (novel)',
  },
  {
    url: 'https://www.goodreads.com/book/show/8686068-the-devotion-of-suspect-x',
    title: 'The Devotion of Suspect X',
  },
  {
    url: 'https://www.comptia.org/content/articles/what-is-ethical-hacking',
    title: 'What is Ethical Hacking?',
  },
  {
    url: 'https://www.thetarimnetwork.com/who-are-uyghurs',
    title: 'Who Are Uyghurs?',
  },
  {
    url: 'https://www.tuftandpaw.com/blogs/cat-guides/the-definitive-guide-to-cat-behavior-and-body-language',
    title: 'The Definitive Guide to Cat Behavior and Body Language',
  },
  {
    url: 'https://cleobuttera.com/cakes/the-most-amazing-russian-honey-cake/',
    title: 'The Most Amazing Russian Honey Cake',
  },
  {
    url: 'https://www.mabeyski.com/news/the-history-of-skiing/',
    title: 'The History of Skiing',
  },
  {
    url: 'https://www.britannica.com/biography/Frederic-Chopin',
    title: 'Frederic Chopin',
  },
  {
    url: 'https://www.webmd.com/mental-health/mental-benefits-of-dance',
    title: 'Mental Benefits of Dance',
  },
  {
    url: 'https://builtin.com/artificial-intelligence/artificial-intelligence-future',
    title: 'Artificial Intelligence Future',
  },
];

function handleKeyPress(event, url) {
  if (event.key === 'Enter' || event.key === ' ') {
    window.open(url, '_blank');
  }
}

function ThingsToRead() {
  return (
    <div style={{
      backgroundColor: '#DFF0FF', 
      color: '#543512', 
      width: '100%', 
      height: '100vh', 
      margin: '0', 
      padding: '0', 
      display: 'flex',       
      flexDirection: 'row',  
      boxSizing: 'border-box',
    }}>
      <div style={{
        backgroundColor: '#92C9FB', 
        padding: '10px',
        width: '170px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'start',
        height: '100vh', 
        boxSizing: 'border-box',
      }}>
        <ClientNavBar />
      </div>
      <div style={{
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        height: '100%',
        boxSizing: 'border-box',
      }}>
        <h1 style={{ textAlign: 'center', fontSize: '60px', fontWeight: 'bold' }}>Things to Read</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {readingLinks.map((link, index) => (
            <li key={index} style={{ marginBottom: '10px', textAlign: 'center' }}>
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={buttonStyle} 
                tabIndex="0" 
                onKeyPress={(e) => handleKeyPress(e, link.url)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ThingsToRead;
