import React from 'react';

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  textAlign: 'center',
  fontFamily: "Poppins, sans-serif"
};

const textStyle = {
  fontSize: '24px',
};

class Kreatif extends React.Component {
  render() {
    return (
      <div style={containerStyle}>
        <p style={textStyle}>Mohon maaf, halaman ini sedang dalam tahap maintenance.</p>
      </div>
    );
  }
}

export default Kreatif;
