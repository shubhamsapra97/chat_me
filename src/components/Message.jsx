import React, {Component} from 'react';

class Message extends Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return(
            <React.Fragment>
                <div className="message_inner_container__left">
                    <div className="message__left">

                        <div className="message_content__left">
                            Hi there! How are you? Hope you are fine. I am so worried about you. Please keep me updated. Hope to see you soon. With Regards. Your Ex-G.
                            <span className="message_time__left">10:11PM</span>
                        </div>

                    </div>
                </div>

                <div className="message_inner_container__right">
                    <div className="message__right">

                        <div className="message_content__right">
                            Hi there! How are you? Hope you are fine. I am so worried about you. Please keep me updated. Hope to see you soon. With Regards. Your Ex-G. Your Ex-G.Your Ex-G Your Ex-GYour
                            <div><span className="message_time__right">10:11PM</span></div>
                        </div>

                    </div>
                </div>
                
                <div className="message_inner_container__left">
                    <div className="message__left">

                        <div className="message_content__left">
                            Hi there! How are you? Hope you are fine. I am so worried about you. Please keep me updated. Hope to see you soon. With Regards. Your Ex-G.
                            <span className="message_time__left">10:11PM</span>
                        </div>

                    </div>
                </div>

                <div className="message_inner_container__right">
                    <div className="message__right">

                        <div className="message_content__right">
                            Hi there! How are you? Hope you are fine. I am so worried about you. Please keep me updated. Hope to see you soon. With Regards. Your Ex-G. Your Ex-G.Your Ex-G Your Ex-GYour
                            <div><span className="message_time__right">10:11PM</span></div>
                        </div>

                    </div>
                </div>
                
            </React.Fragment>
        );
    }
    
}

export default Message;