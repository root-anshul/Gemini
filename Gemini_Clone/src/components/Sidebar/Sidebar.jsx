import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent,prevPrompts,setRecentPrompt} = useContext(Context)
  function handleSidebar() {
    setExtended(!extended)
  }
const loadprompt = async(prompt) => {
  setRecentPrompt(prompt)
  await onSent(prompt)
}
  return (
    <div>
      <div className="sidebar">
        <div className="top">
          <img onClick={handleSidebar} className="menu" src={assets.menu_icon} alt="" />
          <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extended ? <p>New chat</p> : null}
          </div>
          {extended ? (
            <dev className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompts.map((item,index)=>{
                  return (

                  
              <div onClick={()=>loadprompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0,18)} ...</p>
              </div>
                  )
              })}
            </dev>
          ) : null}
        </div>

        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
