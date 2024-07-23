import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

const Home = () => {
  const headerNavList = [
    {icon: 'scan-outline', text: '扫一扫', type: 'scan'},
    {icon: 'qr-code-outline', text: '付款码', type: 'qrcode'},
    {icon: 'trail-sign-outline', text: '出行', type: 'trail'},
    {icon: 'card-outline', text: '卡包', type: 'card'},
  ];

  const swiperList = [
    require('../../images/pc/1.jpeg'),
    require('../../images/pc/2.jpeg'),
    require('../../images/pc/3.jpeg'),
  ];

  const handleHeadNavPress = () => {};

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {headerNavList.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleHeadNavPress(item.type)}
              key={`header-nav-item-${index}`}>
              <View style={styles.itemBase}>
                <Ionicons name={item.icon} size={40} color={'#ffffff'} />
                <Text style={styles.fontBase}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Swiper style={styles.swiper} showsButtons={true} autoplay={true}>
          {swiperList.map((source, index) => (
            <Image
              style={styles.slideImage}
              source={source}
              key={`swiper-img-${index}`}
            />
          ))}
        </Swiper>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  itemBase: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b38a',
    height: 90,
    width: Dimensions.get('window').width / 4,
  },
  fontBase: {
    color: '#ffffff',
    fontSize: 14,
  },
  swiper: {
    height: 200,
  },
  slideImage: {
    height: 200,
    width: Dimensions.get('window').width,
  },
});

export default Home;
