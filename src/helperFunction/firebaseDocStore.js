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
      return await db.collection(user).doc(this.username).get()
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }

  // TODO: userInfo validation
  // Note: Do not use it to update user data, use a seperate function below 
  createNewUser = async (userinfo) => {
    try {
      return await db.collection(user).doc(this.username).set(userinfo);
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }
  // TODO: userInfo validation
  updateUserData = async (data) => {
    try {
      return await db.collection(user).doc(this.username).update(data)
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }
}




// How user data is stored 
// '/users/email/userInfo/'
// 'users/email