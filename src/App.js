import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import Header from './components/Header';
import InputForm from './components/InputForm';
import TaskList from './components/TaskList';

const App = () => {
  const [taskList, setTaskList] = useState([
    {id: 't1', task: 'Buy Milk', isCompleted: false},
    {id: 't2', task: 'Pet the Cat', isCompleted: true},
    {id: 't3', task: 'Complete the Project', isCompleted: false},
  ]);
  const handleSubmit = task => {
    setTaskList([...taskList, task]);
  };

  const handleComplete = id => {
    const updatedTaskList = taskList.map(item => {
      if (item.id === id) {
        return {...item, isCompleted: !item.isCompleted};
      } else {
        return item;
      }
    });
    setTaskList(updatedTaskList);
  };

  const renderTaskCount = () => {
    let count = 0;
    taskList.forEach(item => !item.isCompleted && count++);
    return count;
  };

  const handleDelete = id => {
    const updatedTaskList = taskList.filter(item => item.id !== id);
    setTaskList(updatedTaskList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header count={renderTaskCount()} />
      <TaskList
        list={taskList}
        onPress={handleComplete}
        onLongPress={handleDelete}
      />
      <InputForm onSubmit={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
