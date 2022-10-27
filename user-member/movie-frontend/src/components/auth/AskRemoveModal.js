import AskModal from '../common/AskModal';

const AskRemoveModal=({visible,onConfirm,onCancel})=>{
    return(
        <AskModal
            visible={visible}
            title="회원 탈퇴"
            description="가입한 아이디를 회원 탈퇴하시겠습니까?"
            confirmText="삭제"
            onConfirm={onConfirm}
            onCancel={onCancel}
            />
    );
};

export default AskRemoveModal;
