
export const createAlert = (msg) => {
    return {
        type : 'ALERT_CREATED',
        payload : msg
    }
}

export const deleteAlert = () => {
    return {
        type : 'DELETE_ALERT'
    }
}