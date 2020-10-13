import React, {Suspense} from "react";




export const WithSuspenceComponent = (Component) =>{
    return (props)=> {
        return <div>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Component {...props}/>
            </Suspense>
        </div>
    }
}
