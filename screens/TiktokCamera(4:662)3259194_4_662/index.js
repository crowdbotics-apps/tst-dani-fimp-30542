import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_4_663} />
      <View style={styles.View_4_664}>
        <View style={styles.View_4_665}>
          <Text style={styles.Text_4_665}>60s</Text>
        </View>
        <View style={styles.View_4_666}>
          <Text style={styles.Text_4_666}>15s</Text>
        </View>
        <View style={styles.View_4_667}>
          <Text style={styles.Text_4_667}>Templates</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bb1/6e88/d57b9cd1a21c37e83e12f25e94337c11"
          }}
          style={styles.ImageBackground_4_668}
        />
      </View>
      <View style={styles.View_4_669}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d03e/4156/1e823ac35afcea6c0cb90ca46489903f"
          }}
          style={styles.ImageBackground_4_670}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8483/a381/4037b615c2ce22f73244170e306d8082"
          }}
          style={styles.ImageBackground_4_671}
        />
        <View style={styles.View_4_672}>
          <View style={styles.View_4_673}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e18/b89e/134f30c9896a0c4fce5c07d25c64850e"
              }}
              style={styles.ImageBackground_4_674}
            />
            <View style={styles.View_4_675}>
              <Text style={styles.Text_4_675}>Flip</Text>
            </View>
          </View>
          <View style={styles.View_4_676}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5025/164b/33c294a55b356d6fbf03af4bc97bc0ad"
              }}
              style={styles.ImageBackground_4_677}
            />
            <View style={styles.View_4_678}>
              <Text style={styles.Text_4_678}>Speed</Text>
            </View>
          </View>
          <View style={styles.View_4_679}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b19/22dc/7727d9ba4c5fbd4f1eb7f2fb9a1c5c98"
              }}
              style={styles.ImageBackground_4_680}
            />
            <View style={styles.View_4_681}>
              <Text style={styles.Text_4_681}>Beauty</Text>
            </View>
          </View>
          <View style={styles.View_4_682}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a4f/1a0d/9a70c8690f0ea0ae8e96b5fd6318f339"
              }}
              style={styles.ImageBackground_4_683}
            />
            <View style={styles.View_4_684}>
              <Text style={styles.Text_4_684}>Filters</Text>
            </View>
          </View>
          <View style={styles.View_4_685}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e16/9ef7/2d5213e277d794dc951f7241ed011720"
              }}
              style={styles.ImageBackground_4_686}
            />
            <View style={styles.View_4_687}>
              <Text style={styles.Text_4_687}>Timer</Text>
            </View>
          </View>
          <View style={styles.View_4_688}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bee0/eb74/a754833846f3d9dba7257ca57faa5267"
              }}
              style={styles.ImageBackground_4_689}
            />
            <View style={styles.View_4_690}>
              <Text style={styles.Text_4_690}>Flash</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_691}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd5/f059/7ba7031d2a63bbafed3cd74711877708"
            }}
            style={styles.ImageBackground_4_692}
          />
          <View style={styles.View_4_693}>
            <Text style={styles.Text_4_693}>Sounds</Text>
          </View>
        </View>
        <View style={styles.View_4_694}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edcc/6fa8/39130ffa3d0ded7d46d5ff79ead68c07"
            }}
            style={styles.ImageBackground_4_695}
          />
          <View style={styles.View_4_698}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a0a/1640/f8aa6287de3948b4aadf059a660919af"
              }}
              style={styles.ImageBackground_4_699}
            />
            <View style={styles.View_4_706}>
              <Text style={styles.Text_4_706}>Effects</Text>
            </View>
          </View>
          <View style={styles.View_4_707}>
            <View style={styles.View_4_708}>
              <View style={styles.View_4_709}>
                <View style={styles.View_4_710} />
                <View style={styles.View_4_711} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cde9/858c/6fef51d20b4ba045bec6d2514a6cc495"
                  }}
                  style={styles.ImageBackground_4_712}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78f6/86b7/cca3deceecf5c1c89e83e4f331c13ac4"
                  }}
                  style={styles.ImageBackground_4_713}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45ba/e08c/b45dab2e32dfb56b3bd073cab331016d"
                  }}
                  style={styles.ImageBackground_4_714}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bbc/4ae4/72646217c8a1ffcb1c3ced30c5c5aa30"
                  }}
                  style={styles.ImageBackground_4_715}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/571c/912d/f3459369ec822035242ac8cb81d57275"
                  }}
                  style={styles.ImageBackground_4_716}
                />
              </View>
              <View style={styles.View_4_717} />
            </View>
            <View style={styles.View_4_718}>
              <Text style={styles.Text_4_718}>Upload</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_719} />
      </View>
      <View style={styles.View_4_720}>
        <View style={styles.View_4_721} />
        <View style={styles.View_4_722} />
      </View>
      <View style={styles.View_4_723}>
        <View style={styles.View_4_724} />
        <View style={styles.View_4_725}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/d8a4/5898ea6223f3866c96a0a2b0f8dbf697"
            }}
            style={styles.ImageBackground_4_726}
          />
          <View style={styles.View_4_729}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/65c1/5989f51caa4acec8db82e3c4db888257"
              }}
              style={styles.ImageBackground_4_730}
            />
            <View style={styles.View_4_731} />
          </View>
          <View style={styles.View_4_732} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_4_733}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_4_737}
        />
        <View style={styles.View_4_742}>
          <View style={styles.View_4_743}>
            <Text style={styles.Text_4_743}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.40437158469946%") },
  View_4_663: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_4_664: {
    width: wp("43.23671497584541%"),
    minWidth: wp("43.23671497584541%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.57487922705314%"),
    top: hp("112.97814207650273%")
  },
  View_4_665: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_665: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_666: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.526570048309182%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_666: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_667: {
    width: wp("16.908212560386474%"),
    minWidth: wp("16.908212560386474%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.328502415458935%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_667: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_668: {
    width: wp("1.2077294685990339%"),
    minWidth: wp("1.2077294685990339%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.821256038647341%"),
    top: hp("3.2786885245901516%")
  },
  View_4_669: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("103.27868852459017%"),
    minHeight: hp("103.27868852459017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601093%")
  },
  ImageBackground_4_670: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("103.27868852459017%"),
    minHeight: hp("103.27868852459017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_4_671: {
    width: wp("3.985507246376811%"),
    minWidth: wp("3.985507246376811%"),
    height: hp("2.2540983606557377%"),
    minHeight: hp("2.2540983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("5.464480874316939%")
  },
  View_4_672: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("48.224043715846996%"),
    minHeight: hp("48.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.25120772946859%"),
    top: hp("5.05464480874317%")
  },
  View_4_673: {
    width: wp("6.521779673111036%"),
    minWidth: wp("6.521779673111036%"),
    height: hp("5.669398907103825%"),
    minHeight: hp("5.669398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594359%"),
    top: hp("0%")
  },
  ImageBackground_4_674: {
    width: wp("6.521779673111036%"),
    minWidth: wp("6.521779673111036%"),
    height: hp("3.0054530159371797%"),
    minHeight: hp("3.0054530159371797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_675: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990267%"),
    top: hp("4.030054644808741%"),
    justifyContent: "flex-start"
  },
  Text_4_675: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_676: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    height: hp("5.806010928961749%"),
    minHeight: hp("5.806010928961749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("8.401639344262295%")
  },
  ImageBackground_4_677: {
    width: wp("5.848369966958456%"),
    minWidth: wp("5.848369966958456%"),
    height: hp("3.278703637461845%"),
    minHeight: hp("3.278703637461845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995205%"),
    top: hp("0%")
  },
  View_4_678: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.166666666666668%"),
    justifyContent: "flex-start"
  },
  Text_4_678: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_679: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("5.792936731557377%"),
    minHeight: hp("5.792936731557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.88465889685792%")
  },
  ImageBackground_4_680: {
    width: wp("6.03129990434877%"),
    minWidth: wp("6.03129990434877%"),
    height: hp("3.3004724262842067%"),
    minHeight: hp("3.3004724262842067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792384%"),
    top: hp("0%")
  },
  View_4_681: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.153592469262296%"),
    justifyContent: "flex-start"
  },
  Text_4_681: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_682: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    height: hp("5.669398907103825%"),
    minHeight: hp("5.669398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("25.478142076502735%")
  },
  ImageBackground_4_683: {
    width: wp("5.797102370699823%"),
    minWidth: wp("5.797102370699823%"),
    height: hp("3.142076763298993%"),
    minHeight: hp("3.142076763298993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995205%"),
    top: hp("0%")
  },
  View_4_684: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.030054644808743%"),
    justifyContent: "flex-start"
  },
  Text_4_684: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_685: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    height: hp("5.806010928961749%"),
    minHeight: hp("5.806010928961749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8454106280193372%"),
    top: hp("33.94808743169399%")
  },
  ImageBackground_4_686: {
    width: wp("5.453514246549007%"),
    minWidth: wp("5.453514246549007%"),
    height: hp("3.2786890457236697%"),
    minHeight: hp("3.2786890457236697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439605%"),
    top: hp("0%")
  },
  View_4_687: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.166666666666664%"),
    justifyContent: "flex-start"
  },
  Text_4_687: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_688: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("5.806010928961749%"),
    minHeight: hp("5.806010928961749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792384%"),
    top: hp("42.41803278688525%")
  },
  ImageBackground_4_689: {
    width: wp("4.501086156725307%"),
    minWidth: wp("4.501086156725307%"),
    height: hp("3.287210099684085%"),
    minHeight: hp("3.287210099684085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995205%"),
    top: hp("0%")
  },
  View_4_690: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.166666666666664%"),
    justifyContent: "flex-start"
  },
  Text_4_690: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_691: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.51207729468599%"),
    top: hp("5.464480874316939%")
  },
  ImageBackground_4_692: {
    width: wp("3.260869565217391%"),
    minWidth: wp("3.260869565217391%"),
    height: hp("1.8197514320331847%"),
    minHeight: hp("1.8197514320331847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1952791474556026%")
  },
  View_4_693: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.589371980676333%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_693: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_694: {
    width: wp("68.29710144927536%"),
    minWidth: wp("68.29710144927536%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.881642512077295%"),
    top: hp("87.8415300546448%")
  },
  ImageBackground_4_695: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.456521739130434%"),
    top: hp("0%")
  },
  View_4_698: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    height: hp("7.063735378244536%"),
    minHeight: hp("7.063735378244536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.4836065573770583%")
  },
  ImageBackground_4_699: {
    width: wp("8.091787439613526%"),
    minWidth: wp("8.091787439613526%"),
    height: hp("4.576502732240438%"),
    minHeight: hp("4.576502732240438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18115942028985188%"),
    top: hp("0%")
  },
  View_4_706: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.287779094091519%"),
    justifyContent: "flex-start"
  },
  Text_4_706: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_707: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    height: hp("7.001699645662568%"),
    minHeight: hp("7.001699645662568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.60144927536233%"),
    top: hp("3.278688524590166%")
  },
  View_4_708: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("0%")
  },
  View_4_709: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874395908%"),
    top: hp("0.2732240437158566%")
  },
  View_4_710: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(157, 200, 235, 1)"
  },
  View_4_711: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(157, 200, 235, 1)"
  },
  ImageBackground_4_712: {
    width: wp("1.8290167269499404%"),
    minWidth: wp("1.8290167269499404%"),
    height: hp("1.034443886553655%"),
    minHeight: hp("1.034443886553655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.273843221618378%"),
    top: hp("0.3633426186816848%")
  },
  ImageBackground_4_713: {
    width: wp("6.8509567187028235%"),
    minWidth: wp("6.8509567187028235%"),
    height: hp("2.344009785052857%"),
    minHeight: hp("2.344009785052857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3377679649758534%"),
    top: hp("2.299090943049862%")
  },
  ImageBackground_4_714: {
    width: wp("5.8924757915994395%"),
    minWidth: wp("5.8924757915994395%"),
    height: hp("2.345004889483009%"),
    minHeight: hp("2.345004889483009%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3377679649758534%"),
    top: hp("2.2980903667178865%")
  },
  ImageBackground_4_715: {
    width: wp("7.063178739685943%"),
    minWidth: wp("7.063178739685943%"),
    height: hp("2.344009785052857%"),
    minHeight: hp("2.344009785052857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2945020003019323%"),
    top: hp("1.9690675162226654%")
  },
  ImageBackground_4_716: {
    width: wp("6.075006752198445%"),
    minWidth: wp("6.075006752198445%"),
    height: hp("2.345004889483009%"),
    minHeight: hp("2.345004889483009%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2945020003019323%"),
    top: hp("1.9680669398907042%")
  },
  View_4_717: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2
  },
  View_4_718: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.225743361509558%"),
    justifyContent: "flex-start"
  },
  Text_4_718: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_719: {
    width: wp("96.1352657004831%"),
    minWidth: wp("96.1352657004831%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.932367149758454%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_4_720: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("117.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_721: {
    width: wp("100%"),
    height: hp("4.781420765027322%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_4_722: {
    width: wp("32.367149758454104%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(233, 233, 233, 1)"
  },
  View_4_723: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_724: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("-0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_4_725: {
    width: wp("5.917874396135265%"),
    minWidth: wp("5.917874396135265%"),
    height: hp("1.4344262295081966%"),
    minHeight: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57971014492753%"),
    top: hp("2.3224043715846996%")
  },
  ImageBackground_4_726: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_729: {
    width: wp("0.36231884057971014%"),
    minWidth: wp("0.36231884057971014%"),
    height: hp("0.529232572336666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555571%"),
    top: hp("0.4781420765027322%")
  },
  ImageBackground_4_730: {
    width: wp("0.966183574879227%"),
    minWidth: wp("0.966183574879227%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008607822689202571%")
  },
  View_4_731: {
    width: wp("0.6038647342995169%"),
    minWidth: wp("0.6038647342995169%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008607822689202571%"),
    backgroundColor: "rgba(62, 81, 85, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_4_732: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("0.8879781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_4_733: {
    width: wp("4.072637143342392%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.2309516948428962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499490489131%")
  },
  ImageBackground_4_737: {
    width: wp("4.533327259303291%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.276878148480191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111129981884%")
  },
  View_4_742: {
    width: wp("14.400001194166101%"),
    height: hp("2.459016393442623%"),
    top: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311595%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_743: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_743: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
