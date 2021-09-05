import React, {useState} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import uuid from 'react-native-uuid';
import styles from './InputForm.styles';

const InputForm = props => {
  const [task, setTask] = useState();

  const handlePress = () => {
    if (task) {
      const newTask = {
        id: uuid.v4(),
        task,
        isCompleted: false,
      };
      props.onSubmit(newTask);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        placeholder="Walk the dog!"
        onChangeText={text => setTask(text)}
        onSubmitEditing={handlePress}
        value={task}
      />
      <TouchableOpacity
        onPress={handlePress}
        disabled={!task && true}
        style={[
          styles.button,
          task ? styles.active_button : styles.disabled_button,
        ]}>
        <Text style={styles.button_text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputForm;
