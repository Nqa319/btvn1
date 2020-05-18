import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function TextName(props) {
  return <Text style={styles.name}>{props.name}</Text>;
}
function MyTitle(props) {
  return <Text style={styles.text}>{props.title}</Text>;
}
function MyValue(props) {
  return <Text style={styles.text2}>{props.value}</Text>;
}
function Description(props) {
  return <Text style={styles.textDescrip}>{props.description}</Text>;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: '40%', height: '100%'}}>
          <View style={styles.viewimage}>
            <Image
              source={require('./src/image/anh.jpg')}
              style={styles.image}
            />
            <TextName name="NGUYỄN QUANG ANH" />
            <TextName name="Mobile Developer" />
          </View>
          <View style={styles.viewtext}>
            <MyTitle title="Ngày sinh:" />
            <MyValue value="30/12/1997" />
            <MyTitle title="Giới tính:" />
            <MyValue value="Nam" />
            <MyTitle title="Điện thoại:" />
            <MyValue value="0943123963" />
            <MyTitle title="Email:" />
            <MyValue value="nguyenanh@gmail.com" />
            <MyTitle title="Trường:" />
            <MyValue value="ĐH Giao Thông Vận Tải" />
            <MyTitle title="Địa chỉchỉ:" />
            <MyValue value="Thái Bình, Việt Nam " />
          </View>
        </View>
        <View style={styles.description}>
          <View style={{marginTop:35}}>
            <Text style={styles.textTitle}>──────── SỞ THÍCH ───────</Text>
            <Description description="➢ Code =)). " />
            <Description description="➢ Tìm hiểu những thứ mới. " />
            <Description description="➢ Xem phim, nghe nhạc khi rảnh rỗi." />
            <Description description="➢ Tụ tập bạn bè." />
            <Description description="➢ Chơi thể thao" />
          </View>
          <View style={{marginTop: 30}}>
            <Text style={styles.textTitle}>──────── KĨ NĂNG ────────</Text>
            <Description description="➢ HHệ điều hành: Windows" />
            <Description description="➢ Sử dụng được các ngôn ngữ lập trình:HTML, CSS, JavaScript" />
            <Description description="➢ Ngoại ngữ: English." />
            <Description description="➢ Công nghệ & framework: React Native." />
            <Description description="➢ Công cụ khác: Visual Studio Code, Android Studio." />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  viewimage: {
    backgroundColor: '#1c5463',
    height: '35%',
  },
  viewtext: {
    backgroundColor: '#3977aa',
    height: '65%',
  },
  description: {
    backgroundColor:'white',
    width: '55%',
    marginLeft: 10,
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: 'white',
    marginTop: 40,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  text: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginLeft: 10,
    marginTop: 10,
  },
  text2: {
    color: 'white',
    marginLeft: 15,
    marginTop: 10,
  },
  textDescrip: {
    color: 'black',
    marginTop: 10,
  },
  textTitle: {
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10,
    alignSelf:'center'
  },
});
