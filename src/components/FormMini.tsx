import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
  Modal,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';

export default function FormMini() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const emailRef = useRef<TextInput>(null);
  const passRef = useRef<TextInput>(null);

  const handleSubmit = () => {
    if (!email) {
      Alert.alert('Error', 'Email harus diisi');
      emailRef.current?.focus();
      return;
    }
    if (!password) {
      Alert.alert('Error', 'Password harus diisi');
      passRef.current?.focus();
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setEmail('');
      setPassword('');
      setLoading(false);
      Alert.alert('Success', 'Selamat Datang, Anda telah terdaftar!');
    }, 2000);
  };

  return (
    
      <ImageBackground source={{
        uri:'https://reactnative.dev/img/tiny_logo.png'
      }} style={styles.ImageBackground}>
      <View style={styles.form}>
        <Text style={[styles.text, styles.h1]}>Form Input</Text>

        <TextInput
          ref={emailRef}
          placeholder="Masukan Email Anda"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="gray"
          textAlignVertical="center"
          onSubmitEditing={() => passRef.current?.focus()}
        />

        <TextInput
          ref={passRef}
          placeholder="Masukan Password Anda"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholderTextColor="gray"
          textAlignVertical="center"
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />

        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.5 }]}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>Submit</Text>
          )}
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green', marginTop: 15 }]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Tampilkan Foto</Text>
        </TouchableOpacity>
      </View>

      {/* Modal Foto */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback>
            <View style={{alignItems:'center'}}>
              <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTIP7VqMBlJtbqlhflzgjrgn5jiup0kWaDaN_sxJaKA&s',
            }}
            style={styles.modalImage}
            resizeMode="cover"
          />
          <Text style={{color:'white',marginTop:10}}>Tap di luar untuk menutup</Text>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  form: { backgroundColor: 'white', padding: 40, borderRadius: 10, alignItems: 'center' },
  text: { fontSize: 15, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  h1: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  input: { height: 45, width: 250, borderWidth: 1, borderColor: 'gray', borderRadius: 8, paddingHorizontal: 10, marginBottom: 20 },
  button: { backgroundColor: 'blue', paddingVertical: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center', width: 150 },
  buttonText: { color: 'white', fontWeight: 'bold' },
  modalBackground: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalImage: { width: 300, height: 300,borderRadius:5},
  ImageBackground: {flex:1,justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}
});
