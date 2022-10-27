import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const SET_ORIGINAL_USER= 'auth/SET_ORIGINAL_USER';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
    'auth/REGISTER'
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
    'auth/LOGIN'
);
const [USERUPDATE, UPDATE_SUCCESS, UPDATE_FAILURE] = createRequestActionTypes(
    'auth/USERUPDATE'
);



export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form, // register , login ,registerupdate
        key, // username, password, passwordConfirm
        value // 실제 바꾸려는 값
    })
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login /registerupdate
export const register = createAction(REGISTER, ({ userId,username, password, nickname,gender,add,tel,email }) => ({
    userId,
    username,
    password,
    email,
    gender,
    nickname,
    add,
    tel
}));
export const login = createAction(LOGIN, ({ userId, password }) => ({
    userId,
    password
}));

export const registerupdate = createAction(USERUPDATE, ({ userId,password, nickname,add,tel,email }) => ({
    userId,
    password,
    email,
    nickname,
    add,
    tel
}));

// saga 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const updateSaga = createRequestSaga(USERUPDATE, authAPI.registerupdate);
export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(USERUPDATE, updateSaga);
}

const initialState = {
    register: {
        userId:'',
        username: '',
        password: '',
        passwordConfirm: '',
        email :'',
        gender : '',
        tel:'',
        nickname:'',
        add:''

    },
    login: {
        userId: '',
        password: ''
    },

    registerupdate:{
        userId: '',
        password: '',
        nickname: '',
        add: '',
        tel: '',
        email: ''

    },
    auth: null,
    authError: null
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
            produce(state, draft => {
                draft[form][key] = value; // 예: state.register.username을 바꾼다
            }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
            authError: null // 폼 전환 시 회원 인증 에러 초기화
        }),
        // 회원가입 성공
        [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth
        }),
        // 회원가입 실패
        [REGISTER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error
        }),
        // 회원정보 수정 성공
        [UPDATE_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth
        }),
        // 회원정보 수정 실패
        [UPDATE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error
        }),
        // 로그인 성공
        [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth
        }),
        // 로그인 실패
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error
        })
    },
    initialState
);

export default auth;