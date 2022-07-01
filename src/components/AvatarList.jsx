import React from 'react'
import AvatarCard from './AvatarCard';
import "./AvatarList.css";

const AvatarList = (props) => {
  return (
    <div className='avatarList'>
        {
            props.assets.map((asset)=>{
                return (
                  <div onClick={()=>{
                          props.settingSelectedAvatar(asset.token_id);
                        }}>
                    <AvatarCard key= {asset.token_id}
                        avatarImage= {asset.image_original_url}
                        name={asset.name}
                        id={asset.token_id}
                        price={asset.traits[0].value}
                    />
                  </div>
                );
            })
        }
    </div>
  )
}

export default AvatarList