import {useFocusEffect, useNavigation, useRoute} from '@react-navigation/core';
import React, {useContext, useState} from 'react';
import colors from '../../assets/theme/colors';
import RegisterComponent from '../../components/Register';
import { LOGIN } from '../../constants/routeName';
import register, { clearAuthState }  from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';

const Register = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});
  const {authDispatch, authState:{error, loading, data} } = useContext(GlobalContext);

console.log('registration error :>>>>>',error);


  useFocusEffect(
    React.useCallback(() => {
      return() =>{
        if(data){
            clearAuthState()(authDispatch)
        }  
      }
        
    }, [data, error])
  );

  
  
  const email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;


  const formalidation = ({name, value,form, status}) => {
    if(status === 1)
    {
      if (value !== '') {
        if (name === 'password' ) {
          if (value.length < 8) {
            setErrors(prev => {
              return {...prev, [name]: 'This field minimum 8 characters'};
            });
          } else {
            setErrors(prev => {
              return {...prev, [name]: null};
            });
          }

        }else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }

        if(name === 'email') {
          if (email_reg.test(value) === false){
            setErrors(prev => {
              return {...prev, [name]: 'Enter valid email address'};
            });
          }
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: 'This field is required'};
        });
      }
    }else{
      if (!form.username) {
        setErrors(prev => {
          return {...prev, username: 'This field is required'};
        });
      }
      if (!form.password) {
        setErrors(prev => {
          return {...prev, password: 'This field is required'};
        });
      }
      if (!form.email) {
        setErrors(prev => {
          return {...prev, email: 'This field is required'};
        });
      }
      if (!form.first_name) {
        setErrors(prev => {
          return {...prev, first_name: 'This field is required'};
        });
      }
      if (!form.last_name) {
        setErrors(prev => {
          return {...prev, last_name: 'This field is required'};
        });
      }
      if (form.password && form.password.length < 8) {
        setErrors(prev => {
          return {...prev, password: 'This field minimum 8 characters'};
        });
      }
    }



  };



  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    let status = 1;
    formalidation({name, value,status});
  };


  const onSubmit = () => {
    formalidation({form});

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
       register(form)(authDispatch)((response)=>{
        navigate(LOGIN,{data:response});
      });
    }
    
  }


  return (
    <RegisterComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      error={error}
      errors={errors}
      loading={loading}
    />
  );
};

export default Register;
