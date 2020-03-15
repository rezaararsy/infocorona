import React, { useRef } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/red';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { Modalize } from 'react-native-modalize';

import { MonoText } from '../components/StyledText';
import {
  Card,
  Icon
} from "react-native-elements";

export default class LinkScreen extends React.Component {
  modal = React.createRef();
  openModal = () => {
    if (this.modal.current) {
      this.modal.current.open();
    }
  };
  closeModal = () => {
    if (this.modal.current) {
      this.modal.current.close();
    }
  };
  constructor(props) {
    super(props)
    this.state = {
      isLoadingProfil: true,
      isLoading: false,
      confirmed: '',
      recovered: '',
      deaths: '',
      updated: '',
      list_kode: [],
      list_kode1: [],
      negara: 'ID',
      negara1: 'Indonesia'
    };
  }

  async componentDidMount() {
    this.getDataTentang1();
    this.getDataTentang('ID');
    this.arrayholder = [];

  }
  getDataTentang1 = async () => {
    this.setState({ isLoadingProfil: true });

    let url = 'https://covid19.mathdro.id/api/countries';

    await fetch(url, {
      method: 'GET',
      headers: new Headers({

      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.countries);
        if (responseJson != null) {

          this.setState({
            list_kode: responseJson.countries,
            isLoadingProfil: false
          });
          //var result = [];


          for (var i in this.state.list_kode)
            this.state.list_kode1.push([i, this.state.list_kode[i]]);
          console.log('ini');
          console.log(JSON.stringify(this.state.list_kode1));
          this.arrayholder = this.state.list_kode1;
        } else {
          // console.log(responseJson.Data[0]);
          this.setState({
            isLoadingProfil: false
          })
          console.log('Error');
        }
      })
      .catch((error) => {
        this.setState({
          isLoadingProfil: false
        })
        console.log(error);
      })
  }
  ganti = async (negarae, kode) => {
    this.setState({
      negara: kode,
      negara1: negarae
    });
    this.getDataTentang(kode);
  }

  getDataTentang = async (kode) => {
    this.setState({ isLoadingProfil: true });

    let url = 'https://covid19.mathdro.id/api/countries/' + kode;
    console.log(url);
    await fetch(url, {
      method: 'GET',
      headers: new Headers({

      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson != null) {

          this.setState({
            confirmed: responseJson.confirmed.value,
            recovered: responseJson.recovered.value,
            deaths: responseJson.deaths.value,
            updated: responseJson.lastUpdate,
            isLoadingProfil: false
          });

        } else {
          // console.log(responseJson.Data[0]);
          this.setState({
            isLoadingProfil: false
          })
          console.log('Error');
        }
      })
      .catch((error) => {
        this.setState({
          isLoadingProfil: false
        })
        console.log(error);
      })
  }
  renderHeader = () => (
    <View>
      <View style={styles.modal__header}>
        <Text style={styles.modal__headerText}>Choose Country</Text>
      </View>
      <View style={{ marginTop: 5, padding: 10 }}>
        <TextInput style={{ height: 40, backgroundColor: 'white', padding: 8, marginTop: 5 }}
          placeholder="Input Country"

          onChangeText={text => this.searchFilterFunction(text)}

        />

      </View>
    </View>
  );
  searchFilterFunction = text => {
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item[0].toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ list_kode1: newData });
  };
  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        this.ganti(item[0], item[1])
      }}>
      <View style={styles.item}>

        <Text style={styles.item__name}>{item[0]}</Text>

      </View>
    </TouchableOpacity>
  );
  render() {
    return (
      this.state.isLoadingProfil ? (
        <View style={styles.container}>

          <View style={{ flex: 1, alignItems: "center" }}>
            {/* <Spinner color="#197EBB" /> */}
            <View style={{}}>


              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                {/* <ShimmerPlaceHolder 
                    width={60}
                    height={60}
                    style={{ marginRight: 16 }} /> */}
                <ShimmerPlaceHolder
                  width={60}
                  height={60}
                  style={{ marginRight: 30, borderRadius: 30 }}
                  autoRun={true}
                />
                <View style={{}}>
                  <ShimmerPlaceHolder
                    autoRun={true}
                    width={250}
                    style={{ marginBottom: 7 }}
                  />
                  <ShimmerPlaceHolder
                    autoRun={true}
                    width={250}
                    style={{ marginBottom: 7 }}
                  />
                  <ShimmerPlaceHolder
                    autoRun={true}
                    width={250}
                    style={{ marginBottom: 7 }}
                  />
                </View>
                <View>

                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                {/* <ShimmerPlaceHolder 
                    width={60}
                    height={60}
                    style={{ marginRight: 16 }} /> */}
                <ShimmerPlaceHolder
                  width={60}
                  height={60}
                  style={{ marginRight: 30, borderRadius: 30 }}
                  autoRun={true}
                />
                <View style={{}}>
                  <ShimmerPlaceHolder
                    autoRun={true}
                    width={250}
                    style={{ marginBottom: 7 }}
                  />
                  <ShimmerPlaceHolder
                    autoRun={true}
                    width={250}
                    style={{ marginBottom: 7 }}
                  />
                  <ShimmerPlaceHolder
                    autoRun={true}
                    width={250}
                    style={{ marginBottom: 7 }}
                  />
                </View>
                <View>

                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                {/* <ShimmerPlaceHolder 
                    width={60}
                    height={60}
                    style={{ marginRight: 16 }} /> */}
                <ShimmerPlaceHolder
                  width={60}
                  height={60}
                  style={{ marginRight: 30, borderRadius: 30 }}
                  autoRun={true}
                />
                <View style={{}}>
                  <ShimmerPlaceHolder
                    autoRun={true}
                    width={250}
                    style={{ marginBottom: 7 }}
                  />
                  <ShimmerPlaceHolder
                    autoRun={true}
                    width={250}
                    style={{ marginBottom: 7 }}
                  />
                  <ShimmerPlaceHolder
                    autoRun={true}
                    width={250}
                    style={{ marginBottom: 7 }}
                  />
                </View>
                <View>

                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                {/* <ShimmerPlaceHolder 
                    width={60}
                    height={60}
                    style={{ marginRight: 16 }} /> */}
                <ShimmerPlaceHolder
                  width={60}
                  height={60}
                  style={{ marginRight: 30, borderRadius: 30 }}
                  autoRun={true}
                />
                <View style={{}}>
                  <ShimmerPlaceHolder
                    autoRun={true}
                    width={250}
                    style={{ marginBottom: 7 }}
                  />
                  <ShimmerPlaceHolder
                    autoRun={true}
                    width={250}
                    style={{ marginBottom: 7 }}
                  />
                  <ShimmerPlaceHolder
                    autoRun={true}
                    width={250}
                    style={{ marginBottom: 7 }}
                  />
                </View>
                <View>

                </View>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                {/* <ShimmerPlaceHolder 
                    width={60}
                    height={60}
                    style={{ marginRight: 16 }} /> */}
                <ShimmerPlaceHolder
                  width={60}
                  height={60}
                  style={{ marginRight: 30, borderRadius: 30 }}
                  autoRun={true}
                />
                <View style={{}}>
                  <ShimmerPlaceHolder
                    autoRun={true}
                    width={250}
                    style={{ marginBottom: 7 }}
                  />
                  <ShimmerPlaceHolder
                    autoRun={true}
                    width={250}
                    style={{ marginBottom: 7 }}
                  />
                  <ShimmerPlaceHolder
                    autoRun={true}
                    width={250}
                    style={{ marginBottom: 7 }}
                  />
                </View>
                <View>

                </View>
              </View>
            </View>

          </View>
        </View>
      )
        :
        <View style={styles.container}>
          <Modalize
            ref={this.modal}
            snapPoint={550}
            HeaderComponent={this.renderHeader}
            flatListProps={{
              data: this.state.list_kode1,
              renderItem: this.renderItem,
              keyExtractor: item => item[0],
              showsVerticalScrollIndicator: false,
            }}
          ></Modalize>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
              <TouchableOpacity style={styles.heading1} >
                <View style={styles.BerandaCardView}>

                </View>
                <View style={{
                  padding: 10,
                  paddingTop: 10
                }}>
                  <Text style={styles.heading}>
                    {this.state.negara1}
                  </Text>
                </View>
                <View>
                  <AwesomeButton
                    borderRadius={20}
                    style={{ marginRight: 10 }}
                    primary
                    height={45}
                    width={150}
                    onPress={() => {
                      this.openModal();
                    }}>

                    Choose Country
                                </AwesomeButton>
                </View>


              </TouchableOpacity>
              {/* <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 20
              }}>

                <Image source={require('../assets/images/icon3.png')} style={{ width: 50, height: 50 }} />
              </View> */}
              <TouchableOpacity style={styles.heading1} >
                <View style={styles.BerandaCardView}>
                  <Icon
                    reverse
                    name='done'
                    type='material'
                    color='#fec925'
                    size={15}
                  />
                </View>
                <View style={{
                  padding: 10,
                  paddingTop: 10
                }}>
                  <Text style={styles.heading}>
                    Confirmed
                            </Text>
                </View>

                <View style={styles.CircleShapeView}>
                  <Text style={styles.CircleShapeTextView}>
                    {this.state.confirmed}
                  </Text>
                </View>


              </TouchableOpacity>
              <TouchableOpacity style={styles.heading1} >
                <View style={styles.BerandaCardView}>
                  <Icon
                    reverse
                    name='inbox'
                    type='material'
                    color='#00b4eb'
                    size={15}
                  />
                </View>
                <View style={{
                  padding: 10,
                  paddingTop: 10
                }}>
                  <Text style={styles.heading}>
                    Recovered
                            </Text>
                </View>

                <View style={styles.CircleShapeView}>
                  <Text style={styles.CircleShapeTextView}>
                    {this.state.recovered}
                  </Text>
                </View>


              </TouchableOpacity>

              <TouchableOpacity style={styles.heading1} >
                <View style={styles.BerandaCardView}>
                  <Icon
                    reverse
                    name='block'
                    type='material'
                    color='#fa1e44'
                    size={15}
                  />
                </View>
                <View style={{
                  padding: 10,
                  paddingTop: 10
                }}>
                  <Text style={styles.heading}>
                    Deaths
                            </Text>
                </View>

                <View style={styles.CircleShapeView}>
                  <Text style={styles.CircleShapeTextView}>
                    {this.state.deaths}
                  </Text>
                </View>


              </TouchableOpacity>

              <TouchableOpacity style={styles.heading1} >
                {/* <View style={styles.BerandaCardView}>
                <Icon
                  reverse
                  name='inbox'
                  type='material'
                  color='#5a92af'
                  size={15}
                />
              </View> */}
                <View style={{
                  padding: 10,
                  paddingTop: 10,
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                  <Text style={styles.heading}>
                    Last Updated : {this.state.updated.substring(0, 10)} ({this.state.updated.substring(11, 19)})
                  </Text>

                </View>
                {/* {this.state.inboxsm != 0 && (
                <View style={styles.CircleShapeView}>
                  <Text style={styles.CircleShapeTextView}>
                    {this.state.inboxsm}
                  </Text>
                </View>
              )}
              {this.state.inboxsm == 0 && (
                <View style={styles.CircleShapeView2}>
                </View>
              )} */}

              </TouchableOpacity>
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 20
              }}>
                <AwesomeButton
                  borderRadius={20}
                  style={{ marginRight: 10 }}
                  primary
                  height={45}
                  width={150}
                  onPress={() => {
                    this.getDataTentang();
                  }}>

                  Refresh Data
                                </AwesomeButton>
              </View>

            </View>
          </ScrollView>
        </View>
    );
  }
}



const styles = StyleSheet.create({
  item: {
    alignItems: 'flex-start',

    padding: 15,

    borderBottomColor: '#f9f9f9',
    borderBottomWidth: 1,
  },

  item__name: {
    fontSize: 16,

    marginBottom: 5,
  },
  BerandaCardView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  MidTextView: {
    padding: 10,
    paddingTop: 15,
  },

  CircleShapeTextView: {
    color: 'white',
    fontSize: 15,
    textAlign: "center",
    fontWeight: 'bold',
  },
  modal__header: {
    paddingVertical: 15,
    marginHorizontal: 15,

    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },

  modal__headerText: {
    fontSize: 15,
    fontWeight: '200',
  },
  CircleShapeView: {
    padding: 5,
    marginTop: 10,
    marginRight: 5,
    width: 100,
    height: 30,
    borderRadius: 50 / 2,
    backgroundColor: '#ff5959'
  },
  CircleShapeView2: {
    padding: 5,
    marginTop: 10,
    marginRight: 5,

  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
  },
  welcomeContainer: {
    marginTop: 0,
    marginBottom: 7,
    padding: 10
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  heading: {
    fontSize: 20,

    paddingLeft: 0,
    paddingBottom: 0,
    color: '#484848',
    fontWeight: 'bold',
  },
  heading2: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 0,
    color: '#484848',
  },
  heading1: {
    flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});
