import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ImageBackground
} from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const realizarLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    } else {
      if (!email.includes("@") || !email.includes(".")) {
        Alert.alert("Erro", "Coloque um email válido");
      } else {
        Alert.alert("Login Realizado", "Bem-vindo ao aplicativo!");
      }
    }
  };

  return (
    <ImageBackground
    source={require('./assets/fundo.png')}
    resizeMode="cover"
    style={{ flex: 1 }}>

    <KeyboardAvoidingView
      style={styles.safeArea}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <StatusBar barStyle="light-content" />

      <Image
        source={require("./assets/logo-da-riot.png")}
        style={styles.logoImage}
        resizeMode="contain"
      />

      <View style={styles.form}>
        <TextInput
          placeholder="Usuário ou Email"
          placeholderTextColor="#888"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <View style={{ position: "relative" }}>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#888"
            style={styles.input}
            secureTextEntry={!mostrar} 
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            onPress={() => setMostrar(!mostrar)}
            style={styles.iconButton}
          >
            <Ionicons
              name={mostrar ? 'eye-outline' : 'eye-off-outline'}
              color="#ffffff"
              size={20}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={realizarLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.createAccount}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  logoImage: {
    width: '100%',
    height: '30%',
  },
  imageBackground: {
    flex: 1,
    alignContent: 'center',
  },
  form: {
    width: "100%",
  },
  input: {
    backgroundColor: "#1C1C23",
    color: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#D13639",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  forgot: {
    color: "#888",
    textAlign: "center",
    marginTop: 15,
  },
  iconButton: {
    position: "absolute",
    right: 15,
    top: 18,
  },
  createAccount: {
    color: "#888",
    textAlign: "center",
    marginTop: 10,
  },
});