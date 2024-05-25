
import {SHOW_BLOG_PAGE, USER_INFO} from './Constant'


export function blogPageContent(item){
      // console.log("in action file:",item)
      return {
            type:SHOW_BLOG_PAGE,
            data:item
      }
}
export function userInfoUpdate(item){
      console.log("user info in action: ",item)
      return {
            type:USER_INFO,
            data:item
      }

}