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
import Sound from 'react-native-sound';


export default function FormMini() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  // Fungsi untuk memutar suara
  const playFahhSound = () => {
    // Pada Android, file di res/raw dipanggil tanpa ekstensi
    const sound = new Sound('fah', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load sound', error);
        // Coba alternatif jika gagal
        const soundAlt = new Sound('fah.mp3', Sound.MAIN_BUNDLE, (errorAlt) => {
          if (!errorAlt) soundAlt.play(() => soundAlt.release());
        });
        return;
      }
      sound.play((success) => {
        if (!success) {
          console.log('Sound playback failed');
        }
        sound.release();
      });
    });
  };

  const emailRef = useRef<TextInput>(null);
  const passRef = useRef<TextInput>(null);

  const handleSubmit = () => {
    if (!email || !password) {
      setErrorModalVisible(true);
      playFahhSound();
      if (!email) emailRef.current?.focus();
      else if (!password) passRef.current?.focus();
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
      uri: 'https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg'
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
      </View>

      {/* Modal Error (Input Salah) */}
      <Modal
        visible={errorModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setErrorModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPressOut={() => setErrorModalVisible(false)}
        >
          <TouchableWithoutFeedback>
            <View style={{ alignItems: 'center', backgroundColor: 'white', padding: 20, borderRadius: 20 }}>
              <Image
                source={{
                  uri: 'https://static.boredpanda.com/blog/wp-content/uploads/2015/07/gorilla-middle-finger-bob-pitchford-bristol-zoo-1.jpg', // Link alternatif yang lebih stabil jika Pinterest gagal
                }}
                style={styles.errorImage}
                defaultSource={{ uri: 'https://via.placeholder.com/250' }}
                resizeMode="contain"
              />
              <Text style={{ color: 'red', marginTop: 15, fontWeight: 'bold', fontSize: 18 }}>ISI YG BENER YA GANTENG</Text>
              <TouchableOpacity
                style={[styles.button, { marginTop: 20, backgroundColor: 'red' }]}
                onPress={() => setErrorModalVisible(false)}
              >
                <Text style={styles.buttonText}>Coba Lagi</Text>
              </TouchableOpacity>  
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
  errorImage: { width: 250, height: 250, borderRadius: 10 },
  ImageBackground: { flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }
});
