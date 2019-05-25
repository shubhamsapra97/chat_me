import React, {Component} from 'react';

class MessageTab extends Component {
    
    constructor(props) {
        super(props);
        
    }
    
    onMessageTabClick  = () => {
        
    }
    
    render() {
        return(
        
            <div className="message_tab" onClick={this.onMessageTabClick()}>
                
                <div>
                    <img className="message_pic" src="../me.jpg" alt="message" width="50" height="50" />
                    <span className="user_status"></span>
                </div>
                <div className="message_info">
                    <div className="message_info__detail message_user">{"Shubham Sapra"}</div>
                    <div className="message_info__detail">{"Hey! How are you? I hope you are fine and in good condition"}</div>
                </div>
                <span className="unread_message_count">155</span>
                
            </div>
        
        );
    }
    
}

export default MessageTab;