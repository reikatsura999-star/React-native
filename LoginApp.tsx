import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

// ==================== TYPE DEFINITIONS ====================
type User = {
  email: string;
  password: string;
  name?: string;
};

type LoginScreenProps = {
  onLogin: (user: User) => void;
  onRegister: () => void;
};

type RegisterScreenProps = {
  onRegister: (user: User) => void;
  onBackToLogin: () => void;
};

// ==================== COMPONENT: LOGIN SCREEN ====================
const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onRegister }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  // Fungsi untuk handle login
  const handleLogin = () => {
    // Validasi input
    if (!email.trim()) {
      Alert.alert('Error', 'Email tidak boleh kosong');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Error', 'Password tidak boleh kosong');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Format email tidak valid');
      return;
    }

    // Simulasi proses login
    setIsLoading(true);
    
    // Simulasi API call dengan timeout
    setTimeout(() => {
      setIsLoading(false);
      
      // Hardcoded user untuk demo
      const demoUser: User = {
        email: 'user@example.com',
        password: 'password123',
        name: 'John Doe'
      };

      if (email === demoUser.email && password === demoUser.password) {
        Alert.alert('Success', 'Login berhasil!');
        onLogin(demoUser);
      } else {
        Alert.alert('Error', 'Email atau password salah');
      }
    }, 1500);
  };

  // Fungsi validasi email sederhana
  const isValidEmail = (email: string): boolean => {
    return email.includes('@') && email.includes('.');
  };

  return (
    <ScrollView>
      <View>
        {/* HEADER */}
        <Text>Selamat Datang!</Text>
        <Text>Silakan login ke akun Anda</Text>

        {/* FORM INPUT */}
        <View>
          <Text>Email</Text>
          <TextInput
            placeholder="contoh@email.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View> // di ibaratkan kaya div
          <Text>Password</Text>
          <TextInput
            placeholder="Masukkan password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text>{showPassword ? '🙈 Sembunyikan' : '👁️ Tampilkan'}</Text>
          </TouchableOpacity>
        </View>

        {/* REMEMBER ME & FORGOT PASSWORD */}
        <View>
          <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
            <Text>
              {rememberMe ? '✅ Ingat saya' : '⬜ Ingat saya'}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => Alert.alert('Info', 'Fitur lupa password belum tersedia')}>
            <Text>Lupa Password?</Text>
          </TouchableOpacity>
        </View>

        {/* LOGIN BUTTON */}
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Button
            title="Login"
            onPress={handleLogin}
            disabled={!email.trim() || !password.trim()}
          />
        )}

        {/* DIVIDER */}
        <View>
          <Text>atau</Text>
        </View>

        {/* REGISTER LINK */}
        <View>
          <Text>Belum punya akun?</Text>
          <Button title="Daftar Sekarang" onPress={onRegister} />
        </View>

        {/* DEMO CREDENTIALS */}
        <View>
          <Text>Untuk demo gunakan:</Text>
          <Text>Email: user@example.com</Text>
          <Text>Password: password123</Text>
        </View>
      </View>
    </ScrollView>
  );
};

// ==================== COMPONENT: REGISTER SCREEN ====================
const RegisterScreen: React.FC<RegisterScreenProps> = ({ onRegister, onBackToLogin }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);

  // Fungsi untuk handle register
  const handleRegister = () => {
    // Validasi
    if (!name.trim()) {
      Alert.alert('Error', 'Nama tidak boleh kosong');
      return;
    }

    if (!email.trim()) {
      Alert.alert('Error', 'Email tidak boleh kosong');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Format email tidak valid');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password minimal 6 karakter');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Password tidak sama');
      return;
    }

    if (!agreedToTerms) {
      Alert.alert('Error', 'Anda harus menyetujui syarat dan ketentuan');
      return;
    }

    // Simulasi proses register
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      
      const newUser: User = {
        name,
        email,
        password,
      };

      Alert.alert('Success', 'Registrasi berhasil!');
      onRegister(newUser);
    }, 2000);
  };

  const isValidEmail = (email: string): boolean => {
    return email.includes('@') && email.includes('.');
  };

  return (
    <ScrollView>
      <View>
        {/* HEADER */}
        <Text>Buat Akun Baru</Text>
        <Text>Isi data diri Anda</Text>

        {/* FORM INPUT */}
        <View>
          <Text>Nama Lengkap</Text>
          <TextInput
            placeholder="Masukkan nama lengkap"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View>
          <Text>Email</Text>
          <TextInput
            placeholder="contoh@email.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View>
          <Text>Password</Text>
          <TextInput
            placeholder="Minimal 6 karakter"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View>
          <Text>Konfirmasi Password</Text>
          <TextInput
            placeholder="Ulangi password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        {/* TERMS & CONDITIONS */}
        <View>
          <TouchableOpacity onPress={() => setAgreedToTerms(!agreedToTerms)}>
            <Text>
              {agreedToTerms ? '✅ Saya setuju' : '⬜ Saya setuju'}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => Alert.alert('Syarat & Ketentuan', 'Ini adalah contoh syarat dan ketentuan...')}>
            <Text>dengan Syarat & Ketentuan</Text>
          </TouchableOpacity>
        </View>

        {/* REGISTER BUTTON */}
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Button
            title="Daftar"
            onPress={handleRegister}
            disabled={
              !name.trim() || 
              !email.trim() || 
              !password.trim() || 
              !confirmPassword.trim() || 
              !agreedToTerms
            }
          />
        )}

        {/* BACK TO LOGIN */}
        <View>
          <Text>Sudah punya akun?</Text>
          <Button title="Kembali ke Login" onPress={onBackToLogin} />
        </View>
      </View>
    </ScrollView>
  );
};

// ==================== COMPONENT: DASHBOARD SCREEN ====================
const DashboardScreen: React.FC<{ user: User; onLogout: () => void }> = ({ user, onLogout }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogout = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Success', 'Logout berhasil!');
      onLogout();
    }, 1000);
  };

  return (
    <View>
      {/* HEADER */}
      <Text>🎉 Selamat Datang!</Text>
      <Text>{user.name || user.email}</Text>

      {/* USER INFO */}
      <View>
        <Text>Informasi Akun:</Text>
        <Text>Email: {user.email}</Text>
        {user.name && <Text>Nama: {user.name}</Text>}
        <Text>Status: Aktif</Text>
      </View>

      {/* FEATURES */}
      <View>
        <Text>Fitur Tersedia:</Text>
        
        <TouchableOpacity onPress={() => Alert.alert('Profile', 'Halaman profile')}>
          <Text>👤 Profil Saya</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => Alert.alert('Settings', 'Halaman pengaturan')}>
          <Text>⚙️ Pengaturan</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => Alert.alert('Help', 'Halaman bantuan')}>
          <Text>❓ Bantuan</Text>
        </TouchableOpacity>
      </View>

      {/* LOGOUT BUTTON */}
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button
          title="Logout"
          onPress={handleLogout}
          color="#ff4444"
        />
      )}

      {/* FOOTER */}
      <View>
        <Text>Aplikasi Login Demo</Text>
        <Text>Versi 1.0.0</Text>
      </View>
    </View>
  );
};

// ==================== MAIN APP COMPONENT ====================
const LoginApp: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'register' | 'dashboard'>('login');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Fungsi untuk handle login success
  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    setCurrentScreen('dashboard');
  };

  // Fungsi untuk handle register success
  const handleRegisterSuccess = (user: User) => {
    setCurrentUser(user);
    setCurrentScreen('dashboard');
  };

  // Fungsi untuk handle logout
  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentScreen('login');
  };

  // Render screen berdasarkan state
  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return (
          <LoginScreen
            onLogin={handleLoginSuccess}
            onRegister={() => setCurrentScreen('register')}
          />
        );
      
      case 'register':
        return (
          <RegisterScreen
            onRegister={handleRegisterSuccess}
            onBackToLogin={() => setCurrentScreen('login')}
          />
        );
      
      case 'dashboard':
        return currentUser ? (
          <DashboardScreen
            user={currentUser}
            onLogout={handleLogout}
          />
        ) : null;
      
      default:
        return null;
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {renderScreen()}
    </KeyboardAvoidingView>
  );
};

export default LoginApp;