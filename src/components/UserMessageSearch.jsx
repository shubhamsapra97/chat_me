import React, {Component} from 'react';
import { FaSearch } from 'react-icons/fa'; 

class UserMessageSearch extends Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
        
            <React.Fragment>
            
                <input type="text" className="user-message-search" />
                
            </React.Fragment>
            
        );
    }
    
}

export default UserMessageSearch;