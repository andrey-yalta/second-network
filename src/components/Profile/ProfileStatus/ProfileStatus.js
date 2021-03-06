import React from "react";
import s from "../Profile.module.css"


class ProfileStatus extends React.Component{
    debugger;
     state ={
        editMode:false,
         localStatus:this.props.status,
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
         if(prevState.localStatus !== this.state.localStatus){
             this.props.changeStatus(this.state.localStatus);
         }
    }

    activatedMode =()=>{
         this.setState({editMode:true})
    }
    deactivatedMode =()=>{
        this.setState({editMode:false})
    }
    changeStatus =(e)=>{
         this.setState({localStatus:e.target.value})
    }
    render() {
        if(!this.state.editMode)return <div><span  onClick={this.activatedMode}> <b>"status: "</b>{this.props.status}</span></div>
        else return <div><input autoFocus={true} onBlur={this.deactivatedMode} onChange={this.changeStatus} value={this.state.localStatus} type="text" /></div>
    }
}
export default ProfileStatus;