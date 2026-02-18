import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Pressable,
  Image,
  TextInput,
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native';

export type Product = {
  id: number;
  name: string;
  description: string;
  src: string;
  price: number;
};

export default function ProductsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  // const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [src, setSrc] = useState('');
  const [price, setPrice] = useState('');

  const [product, setProduct] = useState<Product[]>([
    {
  id: 1,
  name: 'Laptop msi thin 15',
  description: 'Laptop ringan dengan performa tinggi untuk coding dan desain.',
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKw_OgjF2PR0gr1ifXcfHwKP70Q4yXtBJ37A&s',
  price: 18500000,
},
{
  id: 2,
  name: 'Keyboard Mechanical ROG',
  description: 'Keyboard mechanical dengan switch tactile dan RGB.',
  src: 'https://technokomputerbali.com/img/item/230214181752.jpg',
  price: 1250000,
},
{
  id: 3,
  name: 'Wireless Mouse Z',
  description: 'Mouse wireless ergonomis dengan baterai tahan lama.',
  src: 'https://i02.appmifile.com/749_operator_sg/18/09/2024/3745e1485de750c9dc1e1ba849859f8a.png',
  price: 450000,
},
{
  id: 4,
  name: 'Monitor UltraWide',
  description: 'Monitor 34 inch dengan resolusi tinggi dan refresh rate 144Hz.',
  src: 'https://m.media-amazon.com/images/I/61B8DbPLwkL._AC_UF894,1000_QL80_.jpg',
  price: 7200000,
},
{
  id: 5,
  name: 'Headphone Studio',
  description: 'Headphone over-ear dengan noise cancellation.',
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrWTkZ8tqamqelXGZy9Dx7ykIa99P1rJYjw&s',
  price: 2100000,
},
{
  id: 6,
  name: 'Gaming Chair Elite',
  description: 'Kursi gaming nyaman untuk pemakaian lama.',
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6x8IBUwzQWzxgjeejLCQyagvXUihgVbLdg&s',
  price: 3500000,
},
{
  id: 7,
  name: 'Smartwatch Active',
  description: 'Jam pintar dengan fitur tracking kesehatan.',
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsrTvxmJppj4T4RKVYtlNUY2SVvdiXbsg2qw&s',
  price: 2800000,
},
{
  id: 8,
  name: 'ipad air 13',
  description: 'Tablet tipis dengan layar tajam dan baterai awet.',
  src: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-170942860/apple_ipad_air_13_inci_-m2-_full11_lcu7c6nv.jpeg',
  price: 6200000,
},
{
  id: 9,
  name: 'External SSD 1TB',
  description: 'SSD eksternal dengan kecepatan transfer tinggi.',
  src: 'https://els.id/wp-content/uploads/2023/09/Samsung-980-1TB-3.jpg',
  price: 1750000,
},
{
  id: 10,
  name: 'Webcam HD Pro',
  description: 'Webcam Full HD cocok untuk meeting dan streaming.',
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPnpxFHrBY7EGwYGdWk7XZjaPAWkLwIm4Pw&s',
  price: 850000,
}
]);

  const addProduct = () => {
    if (name === '' || description === '' || src === '' || price === '') return;

    const newProduct: Product = {
      id: Date.now(),
      name,
      description,
      src,
      price: Number(price)
    }

    setProduct([...product, newProduct])
    setName('');
    setDescription('');
    // setId(0);
    setSrc('');
    setPrice('');
    setModalVisible(false);


  }

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.src }} style={styles.image} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardPrice}>Rp {item.price.toLocaleString('id-ID')}</Text>
        <Text style={styles.cardDescription} numberOfLines={2}>{item.description}</Text>
      </View>
    </View>
  )
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" translucent />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Center Store</Text>
        <Pressable style={styles.addButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.addButtonText}>+ Add Product</Text>
        </Pressable>
      </View>

      <FlatList
        data={product}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={modalVisible} transparent animationType='fade'>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>New Product</Text>

            <TextInput
              placeholder='Product Name'
              onChangeText={setName}
              value={name}
              style={styles.input}
              placeholderTextColor="#999"
            />

            <TextInput
              placeholder='Description'
              onChangeText={setDescription}
              value={description}
              style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
              multiline
              placeholderTextColor="#999"
            />

            <TextInput
              placeholder='Image URL'
              onChangeText={setSrc}
              value={src}
              style={styles.input}
              placeholderTextColor="#999"
            />

            <TextInput
              placeholder='Price'
              onChangeText={setPrice}
              value={price}
              keyboardType='numeric'
              style={styles.input}
              placeholderTextColor="#999"
            />

            <View style={styles.modalActions}>
              <Pressable style={[styles.btn, styles.btnSecondary]} onPress={() => setModalVisible(false)}>
                <Text style={styles.btnTextSecondary}>Cancel</Text>
              </Pressable>

              <Pressable style={[styles.btn, styles.btnPrimary]} onPress={addProduct}>
                <Text style={styles.btnTextPrimary}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E8ED',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 0,
  },
  headerTitle: {
    padding: 10,
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1A1A',
    letterSpacing: -0.5,
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  listContent: {
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden', //biar gambar tidak keluar atau tidak keluar dari card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 220,
    backgroundColor: '#F0F0F0',
  },
  cardInfo: {
    padding: 16,
  },
  cardName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#657786',
    lineHeight: 20, //biar kolomnya agak luas
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#F5F8FA',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E1E8ED',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  btn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrimary: { //tombol save
    backgroundColor: '#007AFF',
    marginLeft: 8,
  },
  btnSecondary: { //tombol cancel
    backgroundColor: '#F5F8FA',
    marginRight: 8,
  },
  btnTextSecondary: { //text tombol cancel
    color: '#657786',
    fontWeight: '700',
    fontSize: 16,
  },
  btnTextPrimary: { //text tombol save
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});