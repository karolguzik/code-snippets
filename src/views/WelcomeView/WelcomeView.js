import React from 'react';
import bgcImage from '../../assets/images/bgc.png';

const headingStyle = {
  color: '#aaa',
  fontSize: 35,
  'text-align': 'center',
  marginTop: '20rem',
  marginBottom: '2rem'
}

const paragraphStyle = {
  color: '#aaa',
  textAlign: 'center'
}

const imageWrapperStyle = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  width: '600px',
}

const imageStyle = {
  width: '100%',
  // opacity: '.7'
}

const WelcomeView = () => {
  return (
    <>
      <h2 style={headingStyle}>Welcome in Code Snippets!</h2> 
      <p style={paragraphStyle}>Create your own snippets for each technologies. It's realy simple!</p>
      <div style={imageWrapperStyle}>
        <img style={imageStyle} src={bgcImage} alt="Welcome background"/>
      </div>
    </>
  )
}

export default WelcomeView;