const postStart = () => {
    return {
        type : 'POST_START'
    }
}

const postError = (err) => {
    return  {
        type : 'POST_ERROR',
        payload : err
    }
}

const postSuccess = (post) => {
    return  {
        type : 'POST_SUCCESS',
        payload : post
    }
}

const removeError = () => {
    return {
        type : 'REMOVE_ERROR'
    }
}

export const addPost = (title, pic_url) => {
    return async (dispatch) => {

    }
}