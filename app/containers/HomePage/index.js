/* eslint-disable no-constant-condition */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Count from './../../components/Counts';

export default function HomePage() {
  const [count, setCount] = useState(0);
  // eslint-disable-next-line no-undef
  const onDown = () => {
    if(count >0 ){
      setCount(count - 1);
    } 
  };
  const onUp = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={onDown}>
        -
      </button>
      <Count count={count} />
      <button type="button" className="btn btn-primary" onClick={onUp}>
        +
      </button>
      <br />
      <button type="button" className="btn btn-primary" onClick={reset}>
        reset
      </button>
    </div>
  );
}
