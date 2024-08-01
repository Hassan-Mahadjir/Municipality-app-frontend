import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const languages = [
  {
    language: 'English',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPBPqWZYVq8mLRYze0GenCRF5Sgaqh_fcJg&s',
  },
  {
    language: 'Turkish',
    icon: 'https://static-00.iconduck.com/assets.00/turkey-icon-2048x1463-17xa9jlu.png',
  },
];
const ModalPopUp = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);
  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  return (
    <Modal
      transparent
      visible={showModal}
      onRequestClose={() => setShowModal(false)}
    >
      <View style={style.modalBackground}>
        <View style={[style.ModalContainer]}>{children}</View>
      </View>
    </Modal>
  );
};

export default function Header() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={style.headerContainer}>
      <View style={style.subHeaderContianer}>
        <Text style={style.greetMsg}>
          Hello,<Text style={style.userName}> Hassan</Text>
        </Text>

        <View style={[style.subHeaderContianer, { gap: 25, marginRight: 10 }]}>
          {/* Press Notification */}
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="notifications-circle" size={30} color="#fff" />
          </TouchableOpacity>
          {/* Press Change Language */}
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <FontAwesome name="language" size={30} color="#fff" />
          </TouchableOpacity>

          <ModalPopUp visible={isModalVisible}>
            <View style={{}}>
              <View style={style.modalHeader}>
                <Text style={style.modalText}>System Language</Text>
                <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                  <Feather name="x" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View>
                {languages.map((item, index) => (
                  <View key={index} style={style.modalItem}>
                    <Image
                      source={{ uri: item.icon }}
                      resizeMode="contain"
                      style={{ height: 40, width: 30 }}
                    />
                    <TouchableOpacity>
                      <Text style={{ fontSize: 18 }}>{item.language}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </ModalPopUp>
        </View>
      </View>

      <View style={style.weatherContainer}>
        <Text style={style.temprtureStatus}>Pretty Sunny</Text>
        <View style={style.weatherWrapper}>
          <MaterialIcons name="sunny" size={64} color="#FCFC07" />
          <Text style={style.temprtureText}>30 C</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  userName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '900',
  },
  greetMsg: {
    fontSize: 20,
    color: '#fff',
  },
  headerContainer: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#4E7E95',
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
  },
  subHeaderContianer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  temprtureText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
  },
  temprtureStatus: {
    color: '#fff',
  },
  weatherContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  weatherWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgb(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 10,
  },
  modalHeader: {
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalText: {
    fontSize: 18,
  },
  modalItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 95,
  },
});
