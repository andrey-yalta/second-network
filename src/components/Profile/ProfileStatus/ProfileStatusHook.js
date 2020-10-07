import React, {useState} from "react";
import s from "../Profile.module.css"




const ProfileStatus= (props)=>{
    // хуки
    let[editMode,setEditMode] = useState(false);
    let[status, setStatus]=useState(props.status);
    const activatedEditMode=()=>{
        setEditMode(true);
    }
    const deactivatedMode =()=>{
        setEditMode(false);
        props.changeStatus(status);
    }
    const onStatusChange =(e)=>{
        setStatus(e.target.value);
    }

    return(
        <div>
            {!editMode && <span onDoubleClick={activatedEditMode}> <b>status: </b>{props.status}</span>}
            {editMode && <div><input autoFocus={true} onChange={onStatusChange} onBlur={deactivatedMode}  value={status} type="text" /></div>}
        </div>
    )
            }

export default ProfileStatus;