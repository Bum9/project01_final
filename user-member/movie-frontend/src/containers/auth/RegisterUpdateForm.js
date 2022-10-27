import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm,registerupdate } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';
import UserActionButtons from '../../components/common/UserActionButtons';
import {removeUser} from '../../lib/api/auth'


const RegisterUpdateForm = ({ history }) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.registerupdate,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));
    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
        const { value, name } = e.target;

        dispatch(
            changeField({
                form: 'registerupdate',
                key: name,
                value
            })
        );
    };

    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
        e.preventDefault();
        const {password, passwordConfirm, nickname,add,tel,email } = form;
        // 하나라도 비어있다면
        if ([password, passwordConfirm, nickname,add,tel,email].includes('')) {
            setError('빈 칸을 모두 입력하세요.');
            return;
        }
        // 비밀번호가 일치하지 않는다면
        if (password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다.');
            changeField({ form: 'registerupdate', key: 'password', value: '' });
            changeField({ form: 'registerupdate', key: 'passwordConfirm', value: '' });
            return;
        }
        dispatch(registerupdate({ password, passwordConfirm, nickname,add,tel,email }));
    };

    // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
    useEffect(() => {
        dispatch(initializeForm('registerupdate'));
    }, [dispatch]);

    // 회원가입 성공 / 실패 처리
    useEffect(() => {
        if (authError) {
            // 계정명이 이미 존재할 때
            if (authError.response.status === 409) {
                setError('이미 존재하는 계정명입니다.');
                return;
            }
            // 기타 이유
            setError('회원가입 실패');
            console.log('오류발생');
            console.log(authError);

            return;
        }

        if (auth) {
            console.log('회원가입 성공');
            console.log(auth);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    /*const navigate = useNavigate();*/

  /*  useEffect(() => {
        if (user) {
            navigate('/');
            try {
                localStorage.setItem('user', JSON.stringify(user));
            }
            catch(e){
                console.log('localStorage is not working');
            }
        }
    }, [navigate, user]);*/

    const onRemove = async ()=>{
        try {
            await removeUser();

        }catch(e){
            console.log(e);
        }
    };


    return (
        <AuthForm
            type="registerupdate"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            actionButtons={<UserActionButtons onRemove={onRemove}/>}
            error={error}
        />
    );
};

export default RegisterUpdateForm;