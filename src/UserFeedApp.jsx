import React,{Component} from 'react';
import './user-feed-app.css';
import axios from 'axios';
import UserList from './UserList';

class UserFeedApp extends Component{
    constructor(){
        super();
this.state = {data:[],
title:"UserList"
}
    }
componentDidMount(){
    axios.get("https://randomuser.me/api/?results=50") 
    .then(
        (response)=>{
const data = response.data.results;
console.log(data)
this.setState({data})
        }
    )
    .catch( error => {
        console.log(error)
} )
}

    render()  {
        const{title,data}=this.state;
        return(
            <>
<div className="app-container">
    <div className="app-head">
        <h1>{title}</h1>
    </div>
    <div className="app-body">
        
            {data.map((item,index)=>(
<UserList key={index} item={item}/>
)
                
                )
            }
           
        
        
    </div>
</div>
            </>
        );
    }
}

export default UserFeedApp;