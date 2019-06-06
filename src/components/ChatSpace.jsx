import React, {Component} from 'react';
import Message from './Message.jsx';
import MessageInput from './MessageInput.jsx';

class ChatSpace extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        
            <React.Fragment>
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
            </React.Fragment>
        
        );
    }
    
}

export default ChatSpace;