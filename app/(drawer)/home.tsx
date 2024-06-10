import React, { useEffect, useState } from 'react'
import tasksData from "@/utils/tareas.json"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Carga las tareas del archivo JSON
    setTasks(tasksData);
  }, []);

  const openModal = (task) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setIsEditing(false);
    setModalVisible(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const saveTask = () => {
    setTasks(tasks.map(task => (task.id === selectedTask.id ? selectedTask : task)));
    closeModal();
  };

  
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.item} onPress={() => openModal(item)}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Button title="Editar" onPress={() => { setIsEditing(true); openModal(item); }} />
        <Button title="Eliminar" onPress={() => deleteTask(item.id)} color="red" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {selectedTask && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              {isEditing ? (
                <>
                  <TextInput
                    style={styles.input}
                    value={selectedTask.title}
                    onChangeText={(text) => setSelectedTask({ ...selectedTask, title: text })}
                    placeholder="Título"
                  />
                  <TextInput
                    style={styles.input}
                    value={selectedTask.description}
                    onChangeText={(text) => setSelectedTask({ ...selectedTask, description: text })}
                    placeholder="Descripción"
                  />
                  <TextInput
                    style={styles.input}
                    value={selectedTask.author}
                    onChangeText={(text) => setSelectedTask({ ...selectedTask, author: text })}
                    placeholder="Autor"
                  />
                  <TextInput
                    style={styles.input}
                    value={selectedTask.date}
                    onChangeText={(text) => setSelectedTask({ ...selectedTask, date: text })}
                    placeholder="Fecha"
                  />
                  <Button title="Guardar" onPress={saveTask} />
                </>
              ) : (
                <>
                  <Text style={styles.modalTitle}>{selectedTask.title}</Text>
                  <Text style={styles.modalDescription}>{selectedTask.description}</Text>
                  <Text style={styles.modalAuthor}>Autor: {selectedTask.author}</Text>
                  <Text style={styles.modalDate}>Fecha: {selectedTask.date}</Text>
                </>
              )}
              <Button title="Cerrar" onPress={closeModal} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  item: {
    flex: 1,
  },
  title: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalDescription: {
    fontSize: 16,
    marginVertical: 10,
  },
  modalAuthor: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  modalDate: {
    fontSize: 16,
    color: '#888',
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

export default HomeScreen;