import * as ActionTypes from "./ActionTypes";

export const comments = (state = { errMess: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, errMess: null, comments: action.payload };

        case ActionTypes.COMMENTS_FAILED:
            return { ...state, errMess: action.payload };

        case ActionTypes.ADD_COMMENT:
            console.log("reducer ran");
            const oldComments = state.comments;
            const newComment = action.payload;
            const id = oldComments.length;
            newComment.id = id;
            const newComments = [...oldComments, newComment];
            return { ...state, comments: newComments };

        default:
            return state;
    }
};
