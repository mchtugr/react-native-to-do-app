import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './TaskList.styles';

const TaskListItem = props => {
  return (
    <Pressable
      style={styles.task_item_container}
      onPress={() => props.onPress(props.item.id)}
      onLongPress={() => props.onLongPress(props.item.id)}>
      <View
        style={[
          styles.task_item_inner_container,
          props.item.isCompleted && styles.completed,
        ]}>
        <Text
          style={[
            styles.task_item_text,
            props.item.isCompleted && styles.completed,
          ]}>
          {props.item.task}
        </Text>
        {props.item.isCompleted && <Text style={styles.completed_sign}>✓</Text>}
      </View>
    </Pressable>
  );
};

export default TaskListItem;
