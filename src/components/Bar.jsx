import React from 'react';
import PropTypes from 'prop-types';

const Bar = props => {
  const barStyles = {
    width: '100px',
  }

  const barFilledStyles = {
    width: props.level * 10 + 'px',
    height: '20px',
    backgroundColor: 'green'
  }

  let meterColor = 'green';
  if (props.level < 5) {
    meterColor = 'red';
  }
  const meterStyles = {
    backgroundColor: meterColor
  }
  return(
    // <div style={barStyles} className='Bar'>
    //   <div style={barFilledStyles} className='Bar-filled'></div>
    // </div>
    <meter style={meterStyles} low={5} value={props.level + ''} min='0' max='100'></meter>
  )
}

Bar.propTypes ={
  level: PropTypes.number.isRequired,
}

export default Bar;
