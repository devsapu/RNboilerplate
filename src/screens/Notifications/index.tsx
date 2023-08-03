import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NotificationsScreen = () => {
  const notifications = [
    { id: '1', text: 'Notification 1' },
    { id: '2', text: 'Notification 2' },
    { id: '3', text: 'Notification 3' },
    // Add more notifications here...
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.text}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default NotificationsScreen;
