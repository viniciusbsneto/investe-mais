import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },

  scrollPage: {
    marginTop: -60,
  },

  innerContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },

  profile: {
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#eee',
  },

  profileInfo: {
    marginTop: 16,
  },

  name: {
    fontFamily: 'RobotoSlab_700Bold',
    color: '#6a6180',
    fontSize: 21,
  },

  profileText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 15,
    marginTop: 4,
  },

  paragraph: {
    marginHorizontal: 24,
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
    lineHeight: 24,
    color: '#6a6180',
  },

  footer: {
    padding: 16,
    alignItems: 'center',
  },

  picker: {
    height: 50,
    width: '100%',
  },

  button: {
    backgroundColor: '#d4ad68',
    width: '100%',
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 40,
    marginBottom: 10,
    justifyContent: 'space-evenly',
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'RobotoSlab_700Bold',
    fontSize: 14,
    textAlign: 'center',
  },

});

export default styles;