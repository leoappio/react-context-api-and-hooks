import * as actionTypes from './action-types';

export const buildActions = (dispatch) => {
    return {
        increase: () => dispatch({type: actionTypes.INCREASE}),
        decrease: () => dispatch({type: actionTypes.DECREASE}),
        reset: () => dispatch({type: actionTypes.RESET}),
        setCounter: (payload) => dispatch({type: actionTypes.SET_COUNTER, payload}),
        asyncIncrease: () => asyncIncreaseFn(dispatch),
    };
};


const asyncIncreaseFn = async (dispatch) => {
    dispatch({type: actionTypes.ASYNC_INCREASE_START})

    return await new Promise (r => {
        setTimeout(() => {
            dispatch({type: actionTypes.ASYNC_INCREASE_END})
            r('RESOLVED!');
        }, 1500);
    })

}

const asyncErrorFn = async (dispatch) => {
    dispatch({type: actionTypes.ASYNC_INCREASE_START})

    return await new Promise ((resolve, reject) => {
        setTimeout(() => {
            dispatch({type: actionTypes.ASYNC_INCREASE_ERROR})
            reject('RESOLVED!');
        }, 1500);
    })

}
