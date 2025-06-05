import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    updateProfile, //로그인한 유저의 프로필 업데이트를 하는 함수
} from "firebase/auth";
import config from '../../firebase.json'
import { 
    getStorage, //firebase와 연결된 Storage객체를 불러온다.
    ref, //Storage에 있는 파일이나 경로를 참조하는 객체
    uploadBytes, //Storage에 파일을 업로드해주는 함수
    getDownloadURL, //Storage에 업로드된 파일의 다운로드 URL을 가져온다.
} from "firebase/storage";

//initializeApp()
//Firebase SDK를 내 프로젝트에 연결해주는 함수
//config에 들어있는 정보로 firebase랑 연결해줘
const app = initializeApp(config);

//getAuth
//현재 프로젝트에 대한 인증 서비스 객체를 만든다.
//이 객체를 통해 인증과 관련된 모든 작업(로그인,회원가입,로그아웃 등)을 하게된다.

const auth = getAuth(app);

export const login = async({email, password}) => {
    // try {
    //     //signInWithEmailAndPassword()
    //     //이메일과 비밀번호로 로그인을 시도하는 함수
    //     const userCredential = await signInWithEmailAndPassword(auth,email,password);
        
    //     return userCredential.user;
    // } catch (error) {
    //     console.error("Login error : ",error);
    // }
    const userCredential = await signInWithEmailAndPassword(auth,email,password);
        
    return userCredential.user;
}

export const signup = async({email,password,name,photoURL}) => {
    console.log('f_url:',photoURL);
    //이메일, 비밀번호를 기반으로 firebase의 auth에 사용자 등록
    //createUserWithEmailAndPassword 함수는 이메일과 비밀번호만 인자로 받는데
    //어떻게 이름과 사진을 같이 저장할 수 있을까?
    //사용자 이름은 문자열로 입력할 수 있지만, 사진을 선택해서 받은 경로는 'file://...'로 시작하는
    //값을 가지고 있어 바로 사용할 수 없다.
    //사용자에 의해 선택한 사진을 firebase의 스토리지에 업로드해서 해결할 수 있다.
    const {user} = await createUserWithEmailAndPassword(auth,email,password)

    //프로필 사진 URL 처리
    //https로 시작하면 그대로 사용, 아니면 Storage에 업로드 후 URL을 획득해서 사용
    const photoUrl = await uploadImage(photoURL);

    //현재 로그인한 유저의 이름과 프로필 사진을 업데이트 한다.
    await updateProfile(auth.currentUser, {displayName: name, photoURL: photoUrl})

    return user;
}

//이미지를 업로드하는 함수
const uploadImage = async (uri) => {
    //이미 https로 시작하는 경우 바로 반환을 해라
    if(uri.startsWith('https')){
        return uri;
    }

    //로컬 파일을 fetch해서 blob데이터로 변환
    const response = await fetch(uri);
    const blob = await response.blob(); //blob() : binaryLargeObject의 약자
    const {uid} = auth.currentUser; //현재 로그인한 유저의 uid를 가져온다.
    const storage = getStorage(app); //Storage에 저장할 파일 경로를 설정
    const storageRef = ref(storage, `profile/${uid}/photo.png`);

    //파일을 Storage에 업로드, 타입은 image/png로 명시
    await uploadBytes(storageRef, blob, {
        contentType: 'image/png'
    })

    return await getDownloadURL(storageRef);
}


// - signInWithEmailAndPassword() : 이메일과 비밀번호로 로그인 시도를 하는 함수
//     - Promise를 반환하고, 성공하면 userCredential 객체를, 실패하면 error를 반환한다.
// const credential = {
//     user: {
//         uid: “사용자의 고유한 ID”,
//         email: “로그인한 이메일”,
//         displayName: “설정된 닉네임”(없을수도 있음),
//         photoURL: “프로필 사진 URL”(없을수도 있음),
//         emailVerified: false, → 이메일 인증  여부
//     }
// }

// createUserWithEmailAndPassword()
// 반환값
//{
//  user: {
//      "uid": "uid값",
//      "email": "이메일값",
//      "emailverified": false,
//      "displayName": null,
//      photoURL: null,
// }, 
//}