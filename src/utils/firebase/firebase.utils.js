import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAicJXIL2hHeriO5idhbAuLcvNrvQyqYOY",
  authDomain: "crwn-clothing-ce55e.firebaseapp.com",
  projectId: "crwn-clothing-ce55e",
  storageBucket: "crwn-clothing-ce55e.appspot.com",
  messagingSenderId: "389823009014",
  appId: "1:389823009014:web:c7b1bb181191f8db2e9cd7"
};

const firebaseApp = initializeApp(firebaseConfig);

// 使用google provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

// 可以实现跟踪
export const auth = getAuth();
// 通过google的两种登录方式（弹窗或者重定向）
export const signInWithGooglePopup = () => signInWithPopup(auth,provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth.provider)


// 创建数据库实例
export const db = getFirestore()

// 创建新的集合 ==> for category
export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
  // 创建collection
  const collectionRef = collection(db,collectionKey)
  // 使用batch处理事务
  const batch = writeBatch(db);

  objectsToAdd.forEach(element => {
    const docRef = doc(collectionRef,element.title.toLowerCase())
    batch.set(docRef,element)
  });

  // 提交事务
  await batch.commit()
  console.log("done")
}

// 使用集合中的数据
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db,'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
  // const categoryMap = querySnapshot.docs
  // .reduce((acc,docSnapshot) => {
  //   const {title, items} = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc
  // },{})

  // return categoryMap
}


// 创建collection ==> for users
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userSnapshot;
};

// 通过账号密码创建用户
export const createAuthUserWithEmailAndPassword = async (email,password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password);
}

// 账号密码登录
export const signInAuthUserWithEmailAndPassword = async (email,password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth,email,password);
}

// 退出登录
export const signOutUser = async () => await signOut(auth)


// 添加监听
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth,callback)
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth)
      },
      reject
    )
  })
}





