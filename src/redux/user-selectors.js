export const getUserPage =(state)=>{
    return state.usersPage;
}

export const getTotalCount = (state)=>{
    return state.usersPage.totalCount;
}

export const getPageSize =(state)=>{
    return state.usersPage.pageSize;
}

export const getCurrentPage = (state)=>{
    return state.usersPage.currentPage;
}

export const getIsFetching =(state)=>{
    return state.usersPage.isFetching;
}

export const getFollowingInProgress =(state)=>{
    return state.usersPage.followingInProgress;
}
