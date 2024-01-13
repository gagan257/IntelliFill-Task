import React from 'react'
import { IoPeople } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

export default function Card(props){
    return(
            <div key = {props.id} className='examCard'>
                <div className='card-row-1'>
                    <div className='card-head'>
                    <div className='card-image'>
                        <img className='card-imgtag' src={props.image} width="50px" height="50px" alt="img"/>
                    </div>
                    <div className='card-heading'>
                        <div className='head1'>{props.title}</div>
                        <div className='head2'>{props.subtitle}</div>
                    </div>
                    </div>
                    <div className='bookmark'>
                        <FaRegBookmark size="20px"/>
                    </div>
                </div>
                <div className='line'></div>
                <div className='card-row2'>
                    <div className='member'>
                        <span className='member-logo'><IoPeople size="20px"/></span>
                        <span>{props.member}</span>
                    </div>
                    <div className='member'>
                        <span className='member-logo'><IoWallet size="20px"/></span>
                        <span>{props.price}</span>
                    </div>
                    <div className='tags'>
                        <span className='eng'>{props.tag1}</span>
                        <span className='eng'>{props.tag2}</span>
                    </div>
                    <div className='view'>
                        <span className='view-details'>View details</span>
                        <span><FaChevronRight/></span>
                    </div>
                </div>
            </div>
    )
}