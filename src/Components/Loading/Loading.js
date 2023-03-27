import React from 'react'
import loadingPudgie from './pudgie002.png';
import './loading.css';

const Loading = () => {
  return (
    <div className='loading'>
        <image src={loadingPudgie} alt='loading pic'/>
        <h1 className='loadingText'>LOADING...</h1>
    </div>
  )
}

export default Loading
