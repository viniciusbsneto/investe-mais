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
    marginVertical: 24,
  },

  paragraph: {
    marginHorizontal: 24,
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#6a6180',
    textAlign: "justify",
  },

  taxesTitle: {
    marginTop: 8,
    marginHorizontal: 24,
    fontFamily: 'RobotoSlab_700Bold',
    fontSize: 18,
    lineHeight: 32,
    color: '#6a6180',
    textAlign: 'center',
  },

  taxesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  taxesHeaderText: {
    marginHorizontal: 24,
    marginTop: 12,
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
    lineHeight: 24,
    color: '#d4ad68',
  },

  buttonsContainer: {
    padding: 24,
  },

  button: {
    backgroundColor: '#d4ad68',
    width: '100%',
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'RobotoSlab_700Bold',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;