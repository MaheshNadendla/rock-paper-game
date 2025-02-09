import React, { useState } from 'react';
import Player from './Player';


function Game() {
  const [input, setInput] = useState("paper");
  const [animate, setAnimate] = useState(false);

  const shaking = (option) => {
    setInput(option);
    
    
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 10);
  };

  return (
    <div>
      <div className='main1'>
        <div className='body1'>
          <div className='player1'>
            <div className='top1'>
              <button className='userdetail'></button>
              <div className='performance'>      
                <div className='power'></div>
                <div className='power'></div>
                <div className='power'></div>
              </div>
            </div>
            <div className='bottom1'>
              <div className={`hand ${animate ? 'shake-wave' : ''}`}>
                <Player option={input} />
              </div>
              <button className='select' onClick={() => shaking("rock")}>rock</button>
              <button className='select' onClick={() => shaking("paper")}>paper</button>
              <button className='select' onClick={() => shaking("scissor")}>scissor</button>
            </div>
          </div>
          <div className='player2'>
            <div className='top2'>
              <div className='performance'>      
                <div className='power'></div>
                <div className='power'></div>
                <div className='power'></div>
              </div>
              <button className='userdetail'></button>
            </div>
            <div className='bottom2'>
              <div className='hand'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
