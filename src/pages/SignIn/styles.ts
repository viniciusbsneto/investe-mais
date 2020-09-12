import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 250,
    paddingBottom: 50,
  },

  logo: {
    width: '100%',
    resizeMode: 'contain',
  },

  button: {
    width: '100%',
    backgroundColor: '#1e2044',
    borderRadius: 8,
    padding: 24,
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'RobotoSlab_700Bold',
    fontSize: 20,
    textAlign: 'center',
  }
});

export default styles;