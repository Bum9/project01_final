import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterUpdatePageForm from '../containers/auth/RegisterUpdateForm';


const RegisterUpdatePage = () => {
    return (
        <AuthTemplate>
            <RegisterUpdatePageForm />
        </AuthTemplate>
    );
};



export default RegisterUpdatePage;