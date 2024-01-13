import React from 'react'
import Image from '../Images/image1.png'
import '../App.css';
import {BsChevronCompactLeft} from 'react-icons/bs';
import {BsChevronCompactRight} from 'react-icons/bs';




const Banner = () => {

  return (
    <>
    <div className='Banner'>
      <div className='banner-div'>
        <img src={Image} alt= 'img' className='banner-child'/>
        <div className='left'>
          <BsChevronCompactLeft size={33}/>
        </div>
        <div className='right'>
          <BsChevronCompactRight size={33}/>
        </div>
      </div>
    </div>
    <div className="heading">
      <div className="Recommended">Recomended exams</div>
      <div className="see-all">See All</div>
    </div>
    </>
  );
}

export default Banner