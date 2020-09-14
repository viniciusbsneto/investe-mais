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
    alignItems: 'center',
  },

  morningCallContainer: {
    height: 100,
    padding: 24,
  },

  banner: {
    width: '100%',
    height: 300,
    resizeMode: "contain",
    padding: 24,
  },

  paragraph: {
    marginHorizontal: 24,
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    lineHeight: 24,
    color: '#6a6180',
    textAlign: "justify",
  },
});

export default styles;