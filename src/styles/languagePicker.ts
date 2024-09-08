import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	modalContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Align at the bottom of the screen
        alignItems: 'center',
      },
      modalContent: {
        width: '90%',
        height: '34%',
        bottom: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        // Add shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2, // for Android
      },
      headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      itemText: {
        fontSize: 18,
        textAlign: 'center',
      },
});
