import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';






/*
  회원가입 또는 로그인 폼을 보여 줍니다.
 */

const AuthFormBlock = styled.div`
 
  h2 {


    color: ${palette.blue[1]};
    margin-top :0rem;
    margin-bottom: 2rem;
    font-family: sans-serif;
    text-align: center;

  }
`;


const StyledInput = styled.input`
  font-size: 1rem;
  border: 1px;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  border-radius: 6px;
  &:focus {
    color: $oc-teal-1;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 10px;
`;


const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      content: "\f005";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${Item} {
    background: yellowgreen;
    border: 2px solid yellowgreen;
  }
  &:checked + ${RadioButtonLabel} {
    background: yellowgreen;
    border: 1px solid yellowgreen;
    &::after {
      content: "\f005";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[1]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[1]};
    }
  }
`;
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
    login: '로그인',
    register: '회원가입',
    registerupdate: '회원정보수정'
};

/**
 * 에러를 보여줍니다
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;





const AuthForm = ({type,form, onChange, onSubmit,error,actionButtons}) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>

                <h2>{text}</h2>



            <form onSubmit={onSubmit}>

                {type !== 'registerupdate' && (
                <StyledInput autoComplete="userId"
                             name="userId"
                             placeholder="아이디"
                             onChange={onChange}
                             value={form.userId}
                />
                )}
                {type !== 'registerupdate' && (
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                    onChange={onChange}
                    value={form.password}
                />
                )}
                {type === 'register' && (
                    <StyledInput
                        autoComplete="new-password"
                        name="passwordConfirm"
                        placeholder="비밀번호 확인"
                        type="password"
                        onChange={onChange}
                        value={form.passwordConfirm}
                    />
                )}

                {type === 'register' && (
                    <StyledInput
                        autoComplete="email"
                        name="email"
                        placeholder="E-mail 입력해주세요"
                        onChange={onChange}
                        value={form.email}
                    />
                )}

                {type === 'register' && (
                    <StyledInput
                        autoComplete="username"
                        name="username"
                        placeholder="이름을 입력해주세요"
                        onChange={onChange}
                        value={form.username}
                    />
                )}
                {type === 'register' && (
                    <StyledInput
                    autoComplete="nickname"
                    name="nickname"
                    placeholder="nickname 입력해주세요"
                    onChange={onChange}
                    value={form.nickname}
                    />
                )}
                {type === 'register' && (
                    <div>성별을 선택하세요
                    <Item>
                        <RadioButton
                            type="radio"
                            name="gender"
                            value="mele"
                            onChange={onChange}
                        />
                        <RadioButtonLabel />
                        <div>남성</div>
                    </Item>
                    <Item>
                        <RadioButton
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={onChange}
                        />
                        <RadioButtonLabel />
                    <div>여성</div>
                    </Item>
                    </div>
                )}

                {type === 'register' && (
                    <StyledInput
                        autoComplete="add"
                        name="add"
                        placeholder="주소 입력해주세요"
                        onChange={onChange}
                        value={form.add}
                    />
                )}
                {type === 'register' && (
                    <StyledInput
                        autoComplete="tel"
                        name="tel"
                        placeholder="전화번호 입력해주세요"
                        onChange={onChange}
                        value={form.tel}
                    />
                )}

                {type === 'registerupdate' && (
                    <StyledInput
                        autoComplete="old-password"
                        name="old-password"
                        placeholder="기존 비밀번호"
                        type="password"
                        onChange={onChange}
                        value={form.password}
                    />
                )}
                {type === 'registerupdate' && (
                    <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="변경 비밀번호"
                    type="password"
                    onChange={onChange}
                    value={form.password}
                    />
                )}
                {type === 'registerupdate' && (
                    <StyledInput
                    autoComplete="new-password"
                    name="passwordConfirm"
                    placeholder="변경 비밀번호 확인"
                    type="password"
                    onChange={onChange}
                    value={form.passwordConfirm}
                    />
                )}
                {type === 'registerupdate' && (
                    <StyledInput
                    autoComplete="email"
                    name="email"
                    placeholder="변경 E-mail 입력해주세요"
                    onChange={onChange}
                    value={form.email}
                    />
                )}

                {type === 'registerupdate' && (
                    <StyledInput
                    autoComplete="nickname"
                    name="nickname"
                    placeholder="변경 nickname 입력해주세요"
                    onChange={onChange}
                    value={form.nickname}
                    />
                )}
                {type === 'registerupdate' && (
                    <StyledInput
                    autoComplete="add"
                    name="add"
                    placeholder="변경 주소 입력해주세요"
                    onChange={onChange}
                    value={form.add}
                    />
                )}
                {type === 'registerupdate' && (
                    <StyledInput
                    autoComplete="tel"
                    name="tel"
                    placeholder="변경 전화번호 입력해주세요"
                    onChange={onChange}
                    value={form.tel}
                    />
                    )}









                <ButtonWithMarginTop cyan fullWidth>
                    {text}
                </ButtonWithMarginTop>


            </form>
            {actionButtons}
            {error && <ErrorMessage>{error}</ErrorMessage>}




            {type !== 'registerupdate' && (
            <Footer>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
                ) : (
                    <Link to="/login">로그인</Link>
                )
                }
            </Footer>
            )}



        </AuthFormBlock>
    );
};

export default AuthForm;