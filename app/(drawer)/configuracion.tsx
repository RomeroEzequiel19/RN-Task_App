// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet, Picker } from 'react-native';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('es');

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.label}>Modo oscuro</Text>
        <Switch value={isDarkMode} onValueChange={(value) => setIsDarkMode(value)} />
      </View>

      <View style={styles.setting}>
        <Text style={styles.label}>Idioma</Text>
        <Picker
          selectedValue={language}
          style={styles.picker}
          onValueChange={(itemValue) => setLanguage(itemValue)}
        >
          <Picker.Item label="Español" value="es" />
          <Picker.Item label="Inglés" value="en" />
          <Picker.Item label="Francés" value="fr" />
        </Picker>
      </View>

      <Button title="Guardar Configuraciones" onPress={() => alert('Configuraciones guardadas (no implementado)')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
  },
  picker: {
    height: 50,
    width: 150,
  },
});

export default SettingsScreen;
