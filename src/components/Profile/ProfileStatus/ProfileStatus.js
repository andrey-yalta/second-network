import React from "react";
import s from "../Profile.module.css"


class ProfileStatus extends React.Component{

     state ={
        editMode:false
    }
    activatedMode =()=>{
         this.setState({editMode:true})
    }
    deactivatedMode =()=>{
        this.setState({editMode:false})
    }
    render() {
        if(!this.state.editMode)return <div><span  onClick={this.activatedMode}> {this.props.status}</span></div>
        else return <div><input autoFocus={true} onBlur={this.deactivatedMode} value={"status"} type="text" /></div>
    }
}
export default ProfileStatus;