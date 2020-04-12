import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/red';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync
} from 'expo-ads-admob';

import { MonoText } from '../components/StyledText';
import {
  Card,
  Icon
} from "react-native-elements";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

// const datae = [
//   {
//     name: "Recovered",
//     population: this.state.deaths,
//     color: "rgba(131, 167, 234, 1)",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   },
//   {
//     name: "Deaths",
//     population: 20,
//     color: "white",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   },
//   {
//     name: "Treatment",
//     population: 30,
//     color: "red",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   }
// ];
const chartConfig = {
  backgroundGradientFrom: "#00b4eb",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#00b4eb",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5
};

export default class HomeScreen extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      isLoadingProfil: true,
      isLoading: false,
      confirmed: '',
      recovered: '',
      deaths: '',
      recoveredP: '',
      deathsP: '',
      updated: '',
      sourcenya: '',
      datae: [],
      treatment: '',
      treatmentP: '',
    };
  }

  async componentDidMount() {
    //this._openInterstitial();
    // AdMobBanner.setAdUnitID('ca-app-pub-9484082567114648/7502388526') //test id
    // await setTestDeviceIDAsync('EMULATOR');

    //this.initAds().catch((error) => console.log(error));
    this.getDataTentang();

  }

  initAds = async () => {

  }

  // _openInterstitial = async () => {
  //   try {
  //     await AdMobInterstitial.requestAdAsync()
  //     await AdMobInterstitial.showAdAsync()
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //   }
  // }

  getDataTentang = async () => {
    this.setState({ isLoadingProfil: true });

    let url = 'https://covid19.mathdro.id/api/';

    await fetch(url, {
      method: 'GET',
      headers: new Headers({

      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson != null) {
          var death = responseJson.deaths.value;
          var recovered = responseJson.recovered.value;
          var treatment2 = responseJson.confirmed.value - death - recovered;
          this.setState({
            confirmed: responseJson.confirmed.value,
            recovered: responseJson.recovered.value,
            deaths: responseJson.deaths.value,
            updated: responseJson.lastUpdate,
            sourcenya: responseJson.source,
            recoveredP: parseFloat(responseJson.recovered.value / responseJson.confirmed.value * 100).toFixed(2),
            deathsP: parseFloat(responseJson.deaths.value / responseJson.confirmed.value * 100).toFixed(2),
            treatment: treatment2,
            treatmentP: parseFloat(treatment2 / responseJson.confirmed.value * 100).toFixed(2),
            isLoadingProfil: false,
            datae: [
              {
                name: "Recovered",
                population: recovered,
                color: "#A7ED4D",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
              },
              {
                name: "Deaths",
                population: death,
                color: "#fa1e44",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
              },
              {
                name: "Treatment",
                population: treatment2,
                color: "#00b4eb",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
              }
            ]
          });
          console.log(this.state.deaths);


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
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>

              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 0,
                marginBottom: 20
              }}>


                {/* <AwesomeButton>Text</AwesomeButton> */}
                {/* <Image source={require('../assets/images/icon3.png')} style={{ width: 50, height: 50 }} /> */}
              </View>
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
                {this.state.confirmed != 0 && (
                  <View style={styles.CircleShapeView}>
                    <Text style={styles.CircleShapeTextView}>
                      {this.state.confirmed}
                    </Text>
                  </View>
                )}
                {this.state.confirmed == 0 && (
                  <View style={styles.CircleShapeView2}>
                  </View>
                )}

              </TouchableOpacity>
              <View style={{ backgroundGradientFrom: 'white', borderRadius: 20 }}>
                <PieChart
                  data={this.state.datae}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  accessor="population"
                  backgroundColor="transparent"
                  paddingLeft="0"

                />
              </View>

              <TouchableOpacity style={styles.heading1} >
                <View style={styles.BerandaCardView}>
                  <Icon
                    reverse
                    name='home'
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
                    Treatment
                            </Text>
                </View>
                {this.state.treatment != 0 && (
                  <View style={styles.CircleShapeView}>
                    <Text style={styles.CircleShapeTextView}>
                      {this.state.treatment}
                    </Text>
                  </View>
                )}
                {this.state.recovered == 0 && (
                  <View style={styles.CircleShapeView2}>
                  </View>
                )}

              </TouchableOpacity>

              <TouchableOpacity style={styles.heading1} >
                <View style={styles.BerandaCardView}>
                  <Icon
                    reverse
                    name='inbox'
                    type='material'
                    color='#A7ED4D'
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
                {this.state.recovered != 0 && (
                  <View style={styles.CircleShapeView}>
                    <Text style={styles.CircleShapeTextView}>
                      {this.state.recovered}
                    </Text>
                  </View>
                )}
                {this.state.recovered == 0 && (
                  <View style={styles.CircleShapeView2}>
                  </View>
                )}

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
                {this.state.deaths != 0 && (
                  <View style={styles.CircleShapeView}>
                    <Text style={styles.CircleShapeTextView}>
                      {this.state.deaths}
                    </Text>
                  </View>
                )}
                {this.state.deaths == 0 && (
                  <View style={styles.CircleShapeView2}>
                  </View>
                )}

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
              <Text style={{ fontSize: 10, marginLeft: 20 }}>
                Source : {this.state.sourcenya}
              </Text>
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
            <AdMobBanner
              bannerSize="fullBanner"
              adUnitID="ca-app-pub-9484082567114648/7502388526" // Test ID, Replace with your-admob-unit-id
              testDeviceID="EMULATOR"
              servePersonalizedAds // true or false
              onDidFailToReceiveAdWithError={this.bannerError} />
          </ScrollView>

        </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({

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
    fontSize: 12,
    textAlign: "center",
    fontWeight: 'bold',
  },

  CircleShapeView: {
    padding: 10,
    marginTop: 10,
    marginRight: 5,
    //width: 100,
    //height: 30,
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
    marginTop: 0,
    marginBottom: 10,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});
