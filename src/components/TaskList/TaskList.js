import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './TaskList.styles';

import TaskListItem from './TaskListItem';

const TaskList = props => {
  return (
    <View style={styles.list_container}>
      <FlatList
        data={props.list}
        renderItem={({item}) => (
          <TaskListItem
            item={item}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
          />
        )}
      />
    </View>
  );
};

export default TaskList;
