import React, {Fragment, useRef} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';

import {colours} from '../../constants';
import {Paragraph, Textinput} from '../atom';
import {Facebook} from '../../Assets/Icon';

import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as yup from 'yup';

const login = () => {
  const formRef = useRef();
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (formRef.current) formRef.current.handleSubmit();
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .label('Email')
      .email('Enter a valid email')
      .required('Please enter a registered email'),
    password: yup
      .string()
      .label('Password')
      .required('Please enter a password')
      .min(8)
      .max(16)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      ),
  });

  const onSubmit = values => {
    console.log(values);
    navigation.push('home');
  };

  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.welcometextContainer}>
        <Paragraph style={styles.welcomeText}>Welcome,</Paragraph>
        <Paragraph style={styles.signinText}>Sign in to continue!</Paragraph>
      </View>
      <Formik
        innerRef={formRef}
        initialValues={{email: '', password: ''}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {formikProps => (
          <Fragment>
            <View style={{alignItems: 'center'}}>
              <View style={styles.emailinputContainer}>
                <Textinput
                  title={'E-Mail'}
                  placeholder={'Enter e-mail id'}
                  keyboardType="email-address"
                  onChangeText={formikProps.handleChange('email')}
                />
              </View>
              <Text style={styles.errorText}>
                {formikProps.touched.email && formikProps.errors.email}
              </Text>
              <View style={styles.pswdinputContainer}>
                <Textinput
                  title={'Password'}
                  placeholder={'Enter password'}
                  secureTextEntry={true}
                  onChangeText={formikProps.handleChange('password')}
                />
              </View>
              <Text style={styles.errorText}>
                {formikProps.touched.password && formikProps.errors.password}
              </Text>
            </View>
          </Fragment>
        )}
      </Formik>

      <TouchableOpacity style={styles.forgotpswdContainer}>
        <Paragraph>Forget Password?</Paragraph>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <LinearGradient
          colors={['#e9538c', '#ef8f8d']}
          style={styles.buttonContainer}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <TouchableOpacity onPress={handleSubmit}>
            <Paragraph style={styles.buttonText}>Login</Paragraph>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.signinWithFaceboobk}>
          <Facebook />
          <Paragraph style={styles.facebookSignin}>
            Continue With Facebook
          </Paragraph>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.signupContainer}>
          <Paragraph>I'm a new user,</Paragraph>
          <TouchableOpacity>
            <Paragraph style={styles.signupText}>Sign up</Paragraph>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colours.White,
  },
  welcometextContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  signinText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colours.Gray,
  },
  pswdinputContainer: {
    marginTop: 30,
  },
  forgotpswdContainer: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 25,
  },
  buttonContainer: {
    width: '90%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colours.White,
  },
  signinWithFaceboobk: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: colours.someBlue,
  },
  facebookSignin: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colours.Blue,
    marginLeft: 10,
  },
  signupContainer: {
    flexDirection: 'row',
    marginVertical: 150,
  },
  signupText: {
    color: colours.Persianred,
    fontSize: 15,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 11,
    color: 'red',
  },
});
