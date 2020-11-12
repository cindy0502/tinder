import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Lee Min Ho"
        message="Hey! How are you"
        timestamp="35 minutes ago"
        profilePic="https://i.pinimg.com/564x/ea/43/b5/ea43b5528dc8987e7d2703f0770ae380.jpg"
      />
      <Chat
        name="Lee Min Ho"
        message="Hey! How are you"
        timestamp="35 minutes ago"
        profilePic="https://i.pinimg.com/564x/ea/43/b5/ea43b5528dc8987e7d2703f0770ae380.jpg"
      />
    </div>
  );
}

export default Chats;
