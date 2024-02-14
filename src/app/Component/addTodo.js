import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import Todos from './todo';

function AddTodo(){
  const [todo, setTodo] = useState('');
  const dispatch =useDispatch()
  

  const handleNameChange = (text) => {
    setTodo(text);
  };



  const addTodHandler = () => {
    dispatch(addTodo(todo))
    setTodo('')
    // Handle form submission here, e.g., send data to server

  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add to do"
        onChangeText={handleNameChange}
        value={todo}
      />
     
      <Button title="Submit" onPress={addTodHandler} />
      <Todos/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default AddTodo;
