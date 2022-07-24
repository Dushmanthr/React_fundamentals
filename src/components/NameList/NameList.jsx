import React from 'react';
import NameListItem from './NameListItem';


function NameList(){
    return(
        <React.Fragment>
        <h1>Name List</h1>
        <hr/>
        <ul>
                <NameListItem />
  
        </ul>
        </React.Fragment>
    );
}

export default NameList;