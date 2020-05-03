import React, {useContext, useState, useEffect} from 'react'

import Context from '../../../0 Control/0-1 Context/Context';

import Profile from '../../../1 Presentation/1-1 Cross-Page/Profile/Profile';

import {PageContainer} from './Styled Components/PageContainer';

export default function EditProfilePage(props) {

  const {userAccount} = useContext(Context);
  const [profileLinks, setProfileLinks] = useState(null);
  const [nameFont, setNameFont] = useState(null);
  const [statsFont, setStatsFont] = useState(null);
  const [descriptionFont, setDescriptionFont] = useState(null);
  const [linksFont, setLinksFont] = useState(null);

  // Set up a list of profile links. 
  useEffect(()=> {
    if(userAccount) {
      const profileLinks = [];
      for(let i = 0; i < userAccount.profileLinks.length; i++) {
        profileLinks[i] = (
          <div key={i}>
            <input 
              type="text" 
              id="profile link" 
              name="profile link" 
              value={`${userAccount.profileLinks[i]}`}
              style={{width: "300px"}}>
            </input>
            <br/>
            <br/>
          </div>
        )
      }
      setProfileLinks(profileLinks);
    }
  },[userAccount]);

  function handleClick(e) {
    if (e.target.id === "addProfile") {
      const newLink = (
        <div key={profileLinks.length}>
          <input           
            type="text"
            id="profile link"
            style={{width: "300px"}} 
          />
          <br/>
          <br/>
        </div>
      )
      setProfileLinks(profileLinks.concat(newLink));
    }
  }

  return (
    <div>
    { userAccount ?
      <PageContainer>
        <form style={{border: "3px solid green"}}>

          <div>
            <input style={{fontSize: "25px", cursor: "pointer"}} type="button" id="save" name="save" value="SAVE PROFILE CHANGES" />
          </div>
          <br/>

          <div>
            <label>First Name: </label>
            <input type="text" id="firstName" name="firstName" value={`${userAccount.firstName}`}></input>
          </div>
          <br/>

          <div>
            <label>Last Name: </label>
            <input type="text" id="lastName" name="lastName" value={`${userAccount.lastName}`}></input>
          </div>
          <br/>

          <div>
            <label>Pronouns: </label>
            <input type="text" id="pronouns" name="pronouns" value={`${userAccount.pronouns}`}></input>
          </div>
          <br/>

          <div>
            <label>RC Batch: </label>
            <input type="text" id="rc batch" name="rc batch" value={`${userAccount.batch}`}></input>
          </div>
          <br/>

          <div>
            <label>Pic: </label>
            <input style={{cursor: "pointer"}} type="file" id="img" name="img" accept="image/*"></input>
          </div>
          <br/>

          <div>
            <label>Audio: </label>
            <input style={{cursor: "pointer"}} type="file" id="audio" name="audio" accept="audio/*"></input>
          </div>
          <br/>

          <div>
            <label>Self-Description: </label>
            <br/>
            <textarea rows="25" cols="37" id="description" name="description" value={`${userAccount.description}`}></textarea>
          </div>
          <br/>

          <div>
            <div>Profile Links: This is to link to other profiles, like Github,</div> 
            <div>LinkedIn, a personal website, Instagram, your email, etc.</div>
            <br/>
            {profileLinks}
            <input
              onClick={handleClick} 
              style={{cursor: "pointer"}} 
              type="button" 
              id="addProfile" 
              name="addProfile" 
              value="+ Add a profile link" />
          </div>
          <br/>
          <br/>

          <div>
            <label for="nameFont">Name Font: </label>
            <select id="nameFont" name="nameFont" value={`${userAccount.fonts[0]}`}>
              <option value="Arial">Arial</option>
              <option value="Dr+Sugiyama">Dr. Sugiyama</option>
              <option value="Fascinate">Fascinate</option>
              <option value="Fredoka One">Fredoka One</option>
              <option value="Josefin Slab">Josefin Slab</option>
              <option value="Poiret One">Poiret One</option>
              <option value="Monoton">Monoton</option>
              <option value="Righteous">Righteous</option>
              {/* <option value=""></option> */}
              {/* <option value=""></option> */}             
            </select>
            <br/>
            <br/>
            <label for="nameFont">Stats Font: </label>
            <select id="nameFont" name="nameFont" value={`${userAccount.fonts[1]}`}>
              <option value="Arial">Arial</option>
              <option value="Dr+Sugiyama">Dr. Sugiyama</option>
              <option value="Fascinate">Fascinate</option>
              <option value="Fredoka One">Fredoka One</option>
              <option value="Josefin Slab">Josefin Slab</option>
              <option value="Poiret One">Poiret One</option>
              <option value="Monoton">Monoton</option>
              <option value="Righteous">Righteous</option>
              {/* <option value=""></option> */}
              {/* <option value=""></option> */}             
            </select>
            <br/>
            <br/>
            <label for="nameFont">Description Font: </label>
            <select id="nameFont" name="nameFont" value={`${userAccount.fonts[2]}`}>
              <option value="Arial">Arial</option>
              <option value="Dr+Sugiyama">Dr. Sugiyama</option>
              <option value="Fascinate">Fascinate</option>
              <option value="Fredoka One">Fredoka One</option>
              <option value="Josefin Slab">Josefin Slab</option>
              <option value="Poiret One">Poiret One</option>
              <option value="Monoton">Monoton</option>
              <option value="Righteous">Righteous</option>
              {/* <option value=""></option> */}
              {/* <option value=""></option> */}             
            </select>
            <br/>
            <br/>
            <label for="nameFont">Links Font: </label>
            <select id="nameFont" name="nameFont" value={`${userAccount.fonts[3]}`}>
              <option value="Arial">Arial</option>
              <option value="Dr+Sugiyama">Dr. Sugiyama</option>
              <option value="Fascinate">Fascinate</option>
              <option value="Fredoka One">Fredoka One</option>
              <option value="Josefin Slab">Josefin Slab</option>
              <option value="Poiret One">Poiret One</option>
              <option value="Monoton">Monoton</option>
              <option value="Righteous">Righteous</option>
              {/* <option value=""></option> */}
              {/* <option value=""></option> */}             
            </select>
            <br/>
            <br/>
            <label for="nameFont">Color Theme: </label>
            <select id="nameFont" name="nameFont" value={`${userAccount.theme}`}>
              <option value="Fruit Basket">Fruit Basket</option> 
              <option value="Lazy Summer Day">Lazy Summer Day</option>
            </select>
          </div>
          <br/>
          <br/>

          <div>
            <input style={{fontSize: "25px", cursor: "pointer"}} type="button" id="save" name="save" value="SAVE PROFILE CHANGES" />
          </div>

        </form>
        <Profile profile={userAccount}/>
      </PageContainer>
      :null
    }
    </div>


  )
}