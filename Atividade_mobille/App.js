import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import ListaDeContatos from "./pages/ListaDeContatos";
import CadastroContato from "./pages/CadastroContato";
import { Ionicons } from "@expo/vector-icons";
import AlteracaoContato from "./pages/AlteracaoContato";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login" 
          component={Login} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="cadastro" 
          component={Cadastro} 
          options={{ title: 'Cadastro' }}
        />
        <Stack.Screen 
          name="detalhesContato" 
          component={AlteracaoContato}
          options={{ title: 'Detalhes do Contato' }}
        />
        <Stack.Screen 
          name="contatos" 
          component={ListaDeContatos}
          options={({ navigation, route }) => ({
            title: 'Lista de Contatos', 
            headerRight: () => (
              <Ionicons
                name="add-outline"
                size={24}
                color='black'
                style={{ marginRight: 15 }}
                onPress={() => navigation.navigate('cadastroContato', { 
                  userId: route.params?.userId 
                })}
              />
            )
          })}
        />
        <Stack.Screen 
          name="cadastroContato" 
          component={CadastroContato}
          options={{ title: 'Novo Contato' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;