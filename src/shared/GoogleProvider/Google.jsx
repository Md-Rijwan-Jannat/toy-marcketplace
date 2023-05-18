import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Google = () => {
    const {googleUser} = useContext(AuthContext);

    const googleHandler = ()=>{
        googleUser()
        .then(result => {
            const googleUser = result.user;
            console.log(googleUser);
            toast.success("Successfully login with google");
        })
        .catch(error => {
            console.log(error)
            toast.error(error.message);
        })
    }
    return (
        <div onClick={googleHandler} className='btn btn-outline btn-primary my-5 px-5 h-12 btn-block'>
           <img className='w-[40px]' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="" />
           <p className='ml-2'>continue with google</p>
        </div>
    );
};

export default Google;