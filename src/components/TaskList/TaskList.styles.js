import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  list_container: {
    flex: 10,
    backgroundColor: '#fff',
  },
  task_item_container: {
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 3,
    flexDirection: 'row',
    borderStyle: 'dashed',
    borderWidth: 1,
  },
  task_item_inner_container: {
    flex: 1,
    padding: 10,
    borderRadius: 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
  task_item_text: {
    fontSize: 22,
    flex: 1,
  },
  completed: {
    backgroundColor: '#fff',
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  completed_sign: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#22BB33',
  },
});
