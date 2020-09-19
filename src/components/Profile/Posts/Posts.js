import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";


let posts = [
    {text:"post 1 ", id:1, like:12},
    {text:"post 2 ", id:2, like:13},
    {text:"post 3 ", id:3, like:15},
    {text:"post 4 ", id:4, like:2},
]
// let postsElements = posts.map(p=> <Post message={p.text} id={p.id} like={p.like}/>);


const Posts =(props)=>{
    let addNewPost = React.createRef();
    let addPost = ()=>{
        let text = addNewPost.current.value;
        let action ={type:"ADD-POST", postText:text, postLike:2}
        props.dispatch(action)
    }
    let postChanged =()=>{
        let postValue  = addNewPost.current.value;
        debugger;
        let action = {type:"POST-CHANGED", value:postValue};
        props.dispatch(action);

    }

    debugger;
    let postsElements = props.posts.map(p=> <Post message={p.text} id={p.id} like={p.like}/>);

    return(
        <div>
            <div className={s.postCreator}>
                <textarea onChange={postChanged} ref={addNewPost} value={props.postCurrentValue}/>

                <br/>
                <button onClick={addPost}> post</button>
            </div>
            {postsElements}
        </div>

    )
}
export default Posts;