import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: 'Home',
            title: 'Lista Tareas',
          }}
        />
        <Drawer.Screen
          name="crear"
          options={{
            drawerLabel: 'Crear tarea',
            title: 'Crear Tarea',
          }}
        />
        <Drawer.Screen
          name="configuracion"
          options={{
            drawerLabel: 'Configuraciones',
            title: 'Configuraciones',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
