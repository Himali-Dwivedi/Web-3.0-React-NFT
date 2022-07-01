import React from "react"
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AvatarCard from './components/AvatarCard';
import axios from "axios";
import AvatarList from "./components/AvatarList";
import HighlightedAvatarContainer from "./components/HighlightedAvatarContainer";

function App() {

  const [avatarData, setAvatarData] = React.useState([]);
  React.useEffect(() => {
    const getMyNfts = async() =>{
      const openSeaData = await axios.get("https://testnets-api.opensea.io/assets?asset_contract_address=0xC36d211Da64a4cDD727F722196545Ec8799BeD9e&order_direction=asc")
      setAvatarData(openSeaData.data.assets);
    }
    getMyNfts();
  }, []);

  const [selectedAvatar, setSelectedAvatar] = React.useState(0);

  return (
    <div className="app">
      < Header/>
      {
        avatarData.length > 0 &&  (
          <>
            <HighlightedAvatarContainer avatarListData={avatarData} selectedAvatar={selectedAvatar} />
            <AvatarList assets={avatarData} settingSelectedAvatar={setSelectedAvatar}/> 
          </>
        )
      }
    </div>
  );
}

export default App;
