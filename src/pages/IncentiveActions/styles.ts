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

  banner: {
    width: '100%',
    height: 300,
    resizeMode: "contain",
    padding: 24,
  },

  paragraph: {
    marginHorizontal: 24,
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#6a6180',
    textAlign: "justify",
  },

  totalCoins: {
    marginTop: 8,
    marginHorizontal: 24,
    fontFamily: 'RobotoSlab_700Bold',
    fontSize: 18,
    lineHeight: 32,
    color: '#6a6180',
    textAlign: 'center',
  },

  totalCoinsValue: {
    marginTop: 8,
    marginHorizontal: 24,
    fontFamily: 'RobotoSlab_700Bold',
    fontSize: 32,
    lineHeight: 32,
    color: '#6a6180',
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: '#d4ad68',
    width: 130,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'RobotoSlab_700Bold',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;