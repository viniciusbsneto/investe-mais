import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },

  investContainer: {
    marginTop: -80,
    padding: 16,
  },

  invest: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 24,
    height: 150,
  },

  investTitle: {
    color: '#1e2044',
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    marginBottom: 24,
  },

  investAvailableContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },

  investAvailableText: {
    color: '#1e2044',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
  },

  investAvailableValue: {
    color: '#1e2044',
    fontFamily: 'Roboto_700Bold',
    fontSize: 24,
  },

  menuContainer: {
    padding: 16,
  },

  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  button: {
    width: 150,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    marginBottom: 12,
    justifyContent: 'space-between',
  },

  buttonIcon: {
    color: '#1e2044',
  },

  buttonText: {
    color: '#1e2044',
    fontFamily: 'RobotoSlab_700Bold',
    fontSize: 12,
  },
});

export default styles;