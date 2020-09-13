import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#1e2044',
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Roboto_700Bold',
    color: '#fff',
    fontSize: 24,
    lineHeight: 32,
    marginVertical: 40,
  },

  headerText: {
    fontFamily: 'Roboto_700Bold',
    color: '#fff',
    fontSize: 14,
    lineHeight: 16,
  },
});

export default styles;