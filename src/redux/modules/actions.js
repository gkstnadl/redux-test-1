export const ADD = 'ADD';
export const SUB = 'SUB';

export const add = (value) => {
    return {
        type: ADD,
        payload: value
    }
};


export const sub = (value) => {
    return {
        type: SUB,
        payload: value
    }
};
