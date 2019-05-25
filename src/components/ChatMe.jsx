import React,{Component} from 'react';
import { FaPlusCircle, FaEllipsisV, FaRegClock, FaUserFriends, FaAddressBook, FaSmile } from 'react-icons/fa';
import UserMessageSearch from './UserMessageSearch.jsx';
import MessageTab from './MessageTab.jsx';
import Message from './Message.jsx';
import MessageInput from './MessageInput.jsx';

class ChatMe extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
        <div className="container"> 
            <div className="user-sidebar-panel">
                <div className="top-div">

                    <span className="first-title">chat</span>
                    <span className="second-title">me</span>

                    <FaEllipsisV size="1.1em" color="white" className="add-contact more-options"/>
                    <FaPlusCircle size="1.5em" color="white" className="add-contact" />

                </div>

                <UserMessageSearch />

                <div className="contact-option-bar">
                    <FaRegClock size="1.5em" className="contact-option contact-option__recents" />
                    <FaUserFriends size="1.5em" className="contact-option contact-option__groups" />
                    <FaAddressBook size="1.5em" className="contact-option contact-option__contacts" />
                </div>
                
                <div className="message_tab_container">
                    <MessageTab />
                    <MessageTab />
                    <MessageTab />
                    <MessageTab />
                    <MessageTab />
                    <MessageTab />
                    <MessageTab />
                    <MessageTab />
                    <MessageTab />
                    <MessageTab />
                    <MessageTab />
                    <MessageTab />
                    <MessageTab />
                </div>

            </div>
            <div className="message-div">
                <div className="header">
                    <div className="header_user_info">
                        <span className="user_status header_user_status"></span>
                        <span>Shubham Sapra</span>
                    </div>
                </div>
                <div className="message_container">
                    <Message />
                </div>
                <div className="message_input_container">
                    <MessageInput />
                </div>
            </div>
        </div>
      );
  }
}

export default ChatMe;
