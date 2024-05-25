import {SHOW_BLOG_PAGE, USER_INFO} from './Constant'


const initialState=[];

export const reducer=(state=initialState,action)=>{
      switch(action.type){
            case SHOW_BLOG_PAGE:
                  // console.log("me in reducer page run",action,state);
                  return [action.data]
            default:
                  // console.log("default run");
                  return [
                        ...state
                  ]
      }
}

const userInitialInfo=[]
export const reducerUserInfo=(state=userInitialInfo,action)=>{
      console.log("reducerUserInfo",action.data)
      console.log("state info ",state)
      switch(action.type){
            case USER_INFO:
                  return [
                        action.data
                  ]
            default :
            return state
      }
}