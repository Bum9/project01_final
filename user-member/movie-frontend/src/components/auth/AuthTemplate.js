import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

import Header from "../Header";




const AuthTemplateBlock = styled.div`
  
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[10]};
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: ${palette.gray[6]};
  border-radius: 6px;
`;

const AuthTemplate = ({ children }) => {
    return (
<div>
    <Header />
        <AuthTemplateBlock>

            <WhiteBox>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
</div>
    );
};

export default AuthTemplate;