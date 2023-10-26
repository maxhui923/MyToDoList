/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './ToDoList.jsx';
import ToDoForm from './ToDoForm.jsx';

function App() {
  return <SafeAreaView>
    <ToDoList />
    <ToDoForm />
  </SafeAreaView>;
}

export default App;
