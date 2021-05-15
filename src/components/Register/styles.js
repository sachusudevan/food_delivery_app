import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  LginImage: {
    height: 140,
    width: 190,
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 5,
  },

  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '500',
  },

  termsandcondition:{
    color: colors.lite_black
  },

  form: {
    paddingTop: 10,
    width: 300,
    alignSelf: 'center',
  },
  GbuttonView: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 24,
  },
  Gbuttonfont: {
    fontSize: 20,
  },
  Gbutton: {
    marginVertical: 0,
  },
  createSection: {
    flexDirection: 'row',
  },
  linkBtn: {
    paddingLeft: 20,
    color: colors.primary,
    fontSize: 16,
  },

  infoText: {
    fontSize: 17,
  },

  TextInput: {
    color: colors.grey,
    flex: 1,
    width: '100%',
  },
  Sbuttonwrapper: {
    height: 42,
    width: 140,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderRadius: 50,
  },

  SbuttonIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  socialmedia_wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
