import React from "react";
import PostReduxForm from "./PostForm";

// функция memo работает примерно как PureComponent в классовых компонентах т.е она содержит свой
// shouldComponentUpdate и она проверяет какой приходит state и props и если они не отлчаются от старых
//то перерендера страницы не получается и как следствие - приложение работает быстрее и расходует меньше памяти
const  Posts = React.memo(props=> {
    let addPost = (state) => {
        props.addPost(state.post);
    }
    return (
        <div>
            <PostReduxForm onSubmit={addPost}/>
            {props.postsElements}
        </div>
    )
});
export default Posts;


