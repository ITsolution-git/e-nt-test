// This is doc store, all the firebase document mutation/creation should be done by using these functions 
import db from "./../config/firebase"



const user = "user"

// Email is the key
export class UserDetails {
  constructor(username) {
    this.username = username
  }

  checkUserNameExsist = async () => {
    try {
      return await db.collection(user).doc(this.username)
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }

  // TODO: userInfo validation
  createNewUser = async (userinfo) => {
    try {
      return await db.collection(user).doc(this.username).set(userinfo);
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }
}




// How user data is stored 
// '/users/email/userInfo/'
// 'users/email