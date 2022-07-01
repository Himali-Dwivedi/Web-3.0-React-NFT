import React from 'react'
import ethImage from "../assests/weth.png"
import "./AvatarCard.css"

const AvatarCard = (props) => {
  return (
    <div className='avatarCard'>
        <img src={props.avatarImage} alt="Avatar.png"/>
        <div className='details'>
            <div className='name'>
                {props.name}
                <div className='id'>.#{props.id}</div>
            </div>
            <div className='priceContainer'>
                <img src={ethImage} className="ethImage" alt=""/>
                <div className='price'>{props.price}</div>
            </div>
        </div>
    </div>
  )
}

export default AvatarCard