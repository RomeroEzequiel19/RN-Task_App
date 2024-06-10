// screens/AddTaskScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AddTaskScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');

  const validateForm = () => {
    if (!title) {
      Alert.alert('Error', 'El título es obligatorio');
      return false;
    }
    if (!description) {
      Alert.alert('Error', 'La descripción es obligatoria');
      return false;
    }
    if (!author) {
      Alert.alert('Error', 'El autor es obligatorio');
      return false;
    }
    if (!date) {
      Alert.alert('Error', 'La fecha es obligatoria');
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Título"
      />
      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Descripción"
      />
      <Text style={styles.label}>Autor</Text>
      <TextInput
        style={styles.input}
        value={author}
        onChangeText={setAuthor}
        placeholder="Autor"
      />
      <Text style={styles.label}>Fecha</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Fecha"
      />
      <Button title="Validar" onPress={validateForm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default AddTaskScreen;
