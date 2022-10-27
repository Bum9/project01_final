import {useState,useCallback} from "react";
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import AskRemoveModal from "../auth/AskRemoveModal";
import User from "../../modules/user";


const UserActionbuttonBlock= styled.div`
  display: flex;
  justify-content: flex-end;
  margin-botton: 2rem;
  margin-top: -1.25rem;
  
`;

const ActionButton =styled.button`
  
  border-radius : 4px;
  color :${palette.gray[6]};
  font-weight : bold;
  border : none;
  outline : none;
  font-size : 0.875rem;
  cursor:pointer;
  margin-top :20px;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 100%;

  font-size: 1.125rem;
  &:hover {
    background: ${palette.gray[1]};
    color: ${palette.cyan[7]};
  }
  &+& {
    
    margin-left :0.25rem;
  }
`;

const UserActionButtons = ({onEdit,onRemove})=>{
    const [modal,setModal]= useState(false);
    const onRemoveClick =()=>{
        setModal(true);
    };
    const onCancel = ()=>{
        setModal(false);
    };
    const onConfirm =()=>{
        setModal(false);
        onRemove();
    };

    return (
        <>
            <UserActionbuttonBlock>

                <ActionButton onClick={onRemoveClick}>회원 탈퇴</ActionButton>
                {/*<ActionButton onClick=>뒤로가기</ActionButton>*/}
            </UserActionbuttonBlock>
            <AskRemoveModal
                visible={modal}
                onConfirm={onConfirm}
                onCancel={onCancel}
            />
        </>
    )
}

export default UserActionButtons;
