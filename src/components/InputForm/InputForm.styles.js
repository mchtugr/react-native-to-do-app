import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
    margin: 10,
    paddingBottom: 15,
    borderRadius: 10,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  button: {
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 75,
  },
  active_button: {
    backgroundColor: '#FF4C29',
  },
  disabled_button: {
    backgroundColor: '#334756',
  },
  button_text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  demo: {backgroundColor: 'orangered'},
});
