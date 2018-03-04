import { takeLatest, put } from 'redux-saga';

//Example
// export function* getUserInfo(action){
//     try{
//         let response = yield spotifyApi.getUserInformation();
//         yield put({ type:meActions.GET_USER_INFO_SUCCESS, payload: response.body})
//     }catch (e){
//         yield put({ type:meActions.GET_USER_INFO_FAILURE, payload: 'Failure'})
//     }
// }


export default function* baseSaga(){
    //yield takeLatest(Action,Function);
}