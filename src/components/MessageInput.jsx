import React, {Component} from 'react';
import { FaSmile, FaPaperclip, FaRegPaperPlane } from 'react-icons/fa';

class MessageInput extends Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return(
            <React.Fragment>
                <div className="message_input_inner_container">
                    <input type="text" className="message-input_class" placeholder="Type your message here ..." autoFocus />
                </div>
                <div className="message_input_options">
                    <div className="send_option_container">
                        <FaRegPaperPlane className="send_option" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
    
}

export default MessageInput;