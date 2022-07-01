import React from 'react'
import "./HighlightedAvatarContainer.css"
import instagramLogo from "../assests/owner/instagram.png"
import twitterLogo from "../assests/owner/twitter.png"
import moreIcon from "../assests/owner/more.png"

const HighlightedAvatarContainer = (props) => {

    const [activeAvatar, setActiveAvatar] = React.useState(props.avatarListData[0]);

    React.useEffect(()=>{
        setActiveAvatar(props.avatarListData[props.selectedAvatar])
    }, [props.avatarListData, props.selectedAvatar])

  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='avatarHighlight'>
                <div className='avatarContainer'>
                    <img className="selectedAvatar" src={activeAvatar.image_original_url} alt=""/>
                </div>
            </div>

            <div className='avatarAndOwnerDetails'>
            <div className='avatarDetails' style={{color:"#fff"}}>
                <div className='title'>{activeAvatar.name}</div>
                <span className='itemNumber'>.#{activeAvatar.token_id}</span>
            </div>
            <div className='owner'>
                <div className="ownerImageContainer">
                    <img src="https://gateway.thirdweb.dev/ipfs/Qmds88DvVyc6qaXitEAd64TudmZexvCiajADtumDzejukd/0.png" alt=""/>
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandles'>
                        <div className='ownerWalletAddress'>
                        0x396E5fDC2128aab06508860f59E075e8eC7FE74A
                        </div>
                        <div className='ownerHandle'>
                            @Himali-Dwivedi
                        </div>
                    </div>

                    <div className='ownerLink'>
                        <img src={instagramLogo} alt=""/>
                    </div>

                    <div className='ownerLink'>
                        <img src={twitterLogo} alt=""/>
                    </div>

                    <div className='ownerLink'>
                        <img src={moreIcon} alt=""/>
                    </div>

                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HighlightedAvatarContainer