import React from 'react';
import {
  View,
  Text,
  RefreshControl,
  StyleSheet,
  FlatList,
  ScrollView,
  SectionList,
} from 'react-native';
import { useState } from 'react';

interface Data {
  id: number | string;
  age: number;
}

interface SectionType {
  title: string;
  data: string[];
}

export default function ScrolData() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([
    { id: 1, age: 21 },
    { id: 2, age: 22 },
    { id: 3, age: 34 },
    { id: 4, age: 56 },
    { id: 5, age: 22 },
    { id: 6, age: 12 },
    { id: 7, age: 13 },
    { id: 8, age: 14 },
    { id: 9, age: 16 },
    { id: 10, age: 10 },
  ]);

  const DUMMY_SECTIONS: SectionType[] = [
    { title: 'group A', data: ['yan', 'yib', 'yeb'] },
    { title: 'group B', data: ['gas', 'gus', 'agus'] },
    { title: 'group C', data: ['sasv', 'sasr', 'sase'] },
  ];

  const [sections, setSections] = useState<SectionType[]>(DUMMY_SECTIONS);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      // const newId = Date.now();
      // setData([...data, { id: newId, age: 22 }]); //sesuaikan sama tools yg di pakai
      setSections([...sections, { title: 'group D', data:['mas','mba','pak']}])
    }, 1000);
  };

  const renderItem = ({ item }: { item: Data }) => (
    <View style={styles.continer}>
      <Text>{item.age}</Text>
    </View>
  );

  return (
    // <FlatList
    //   data={data}
    //   renderItem={renderItem}
    //   keyExtractor={(item, index) => index.toString()}
    //   refreshControl={
    //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //   }
    // />

    // <View>
    //     <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}/>

    //     {data.map((item,index) => (
    //         <View key={item.id || index}>
    //             <Text>Umur : {item.age}</Text>
    //         </View>
    //     ))}

    // </View>

    <View>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View>
            <Text style={styles.name}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
