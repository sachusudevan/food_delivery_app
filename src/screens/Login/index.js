import {useRoute} from '@react-navigation/core';
import React, {useContext, useState} from 'react';
import {
  StatusBar
} from 'react-native';
import LoginComponent from '../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/Provider';
import AlertPoup from '../../components/common/AlertPoup/AlertPoup';


const Login = () => {

  const [form, setForm] = useState({});
  const [useJustSignedUp, setJustSignedUp] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [errors, setErrors] = useState({});
  const { authDispatch, authState: {error, loading} } = useContext(GlobalContext);

  const [alerComponent, setAlerComponent] = useState({ icon: null, title: null, message: null });
  const [alerMessage, setalerMessage] = useState(null);

  const {params} = useRoute();


  React.useEffect(() => {

    if (params?.data) {
      setJustSignedUp(true);
      setForm({...form, username: params.data.username});
    }

  }, [params]);

  

  const onSubmit = () => {
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
    if (form.password && form.password.length < 8) {
      setErrors(prev => {
        return {...prev, password: 'This field minimum 8 characters'};
      });
    }
    if (form.username && form.password && form.password.length >= 8) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 8) {
          setErrors(prev => {
            return {...prev, [name]: 'This field minimum 8 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }

      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };


  React.useEffect(() => {

    if(error?.detail && error?.detail.length > 0 )
    {
      setAlerComponent({
        icon: require('../../assets/images/popup/alert/Error.png'),
        title: "Someting went wrong",
      });
      setalerMessage(error?.detail);
      setVisible(true);
    }

  }, [error]); 


  return (
    <>
         {error?.detail ? <StatusBar backgroundColor="#7d7d7d" /> : <></> }

        <AlertPoup 
          visible={visible}
          setVisible={setVisible}
          icon={alerComponent.icon}
          title={alerComponent.title}
          message={alerMessage}
        />

        {useJustSignedUp && (<AlertPoup 
          visible={true}
          setVisible={setJustSignedUp}
          icon={require('../../assets/images/popup/alert/Success.png')}
          title="Success"
          message="Account Created Successfully"
        />)}


      <LoginComponent
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        error={error}
        errors={errors}
        loading={loading}
        justSignedUp={useJustSignedUp}
        setJustSignedUp={setJustSignedUp}
      />
    </>
  );
};



export default Login;
