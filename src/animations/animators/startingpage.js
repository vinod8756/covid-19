import React from 'react'
import Lottie from 'react-lottie'
import animationdata from '../animation/lf30_editor_cyowsj4u.json'

const startingpage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationdata,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height = {700}

        />
      </div>
    );
  }

export default startingpage;