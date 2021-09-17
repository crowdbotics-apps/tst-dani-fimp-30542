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
      <View style={styles.View_4_196} />
      <View style={styles.View_4_197}>
        <View style={styles.View_4_198}>
          <View style={styles.View_4_199} />
          <View style={styles.View_4_200}>
            <Text style={styles.Text_4_200}>Invite friends</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_4_201}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4d5/a5dd/dae96b3b9c22c40d8339e530928643c1"
            }}
            style={styles.ImageBackground_4_202}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf7b/b3ad/9a4f70fbdda52c45cfcc00a95edf939a"
            }}
            style={styles.ImageBackground_4_203}
          />
        </View>
        <View style={styles.View_4_204}>
          <View style={styles.View_4_205} />
          <View style={styles.View_4_206}>
            <Text style={styles.Text_4_206}>Find contacts</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_4_207}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9082/0856/51d2a9994ada2ac86bbfcb06a13d8e54"
            }}
            style={styles.ImageBackground_4_208}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/428e/3dc6/68f8f72c28b731ee213464d1fc245415"
            }}
            style={styles.ImageBackground_4_209}
          />
        </View>
        <View style={styles.View_4_210}>
          <View style={styles.View_4_211} />
          <View style={styles.View_4_212}>
            <Text style={styles.Text_4_212}>Find Facebook friends</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_4_213}
          />
          <View style={styles.View_4_214}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99dc/b859/a1ef3799a9c8ec5641e6065c2fc99575"
              }}
              style={styles.ImageBackground_4_215}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8601/36b4/208af0ac6889a878d5fc2bb1f2548cdf"
              }}
              style={styles.ImageBackground_4_216}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73e3/7ca4/6a701600f6278b9ac8fcb02c9bb72986"
              }}
              style={styles.ImageBackground_4_217}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_4_218}>
        <View style={styles.View_4_219} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf98/46ac/02607913f8c155f55085fdf8a8a167d1"
          }}
          style={styles.ImageBackground_4_220}
        />
        <View style={styles.View_4_221}>
          <Text style={styles.Text_4_221}>Search</Text>
        </View>
      </View>
      <View style={styles.View_4_222}>
        <View style={styles.View_4_223} />
        <View style={styles.View_4_224}>
          <Text style={styles.Text_4_224}>Find friends</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/912a/a01c/c58039d735742cac786747de801f891b"
          }}
          style={styles.ImageBackground_4_225}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d190/4ad7/e3d5535b5499a29fbf18b4b56e629823"
          }}
          style={styles.ImageBackground_4_226}
        />
      </View>
      <View style={styles.View_4_227}>
        <View style={styles.View_4_228} />
        <View style={styles.View_4_229} />
      </View>
      <View style={styles.View_4_230}>
        <View style={styles.View_4_231} />
        <View style={styles.View_4_232}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/d8a4/5898ea6223f3866c96a0a2b0f8dbf697"
            }}
            style={styles.ImageBackground_4_233}
          />
          <View style={styles.View_4_236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/65c1/5989f51caa4acec8db82e3c4db888257"
              }}
              style={styles.ImageBackground_4_237}
            />
            <View style={styles.View_4_238} />
          </View>
          <View style={styles.View_4_239} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620f/5b08/34255442dff81dcf9f83619a702b5cd5"
          }}
          style={styles.ImageBackground_4_240}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d34/dcd9/0d23fcae3e811c4c6d6df9621fb6e1de"
          }}
          style={styles.ImageBackground_4_244}
        />
        <View style={styles.View_4_249}>
          <View style={styles.View_4_250}>
            <Text style={styles.Text_4_250}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.40437158469946%") },
  View_4_196: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_197: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31.147540983606557%"),
    minHeight: hp("31.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.94535519125683%")
  },
  View_4_198: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_199: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_200: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.28985507246377%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_4_200: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_201: {
    width: wp("1.399249615876571%"),
    minWidth: wp("1.399249615876571%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.90096618357488%"),
    top: hp("4.474043715846996%")
  },
  ImageBackground_4_202: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("1.3661202185792334%")
  },
  ImageBackground_4_203: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("3.278688524590166%")
  },
  View_4_204: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.382513661202186%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_205: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_206: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.28985507246377%"),
    top: hp("3.9617486338797825%"),
    justifyContent: "flex-start"
  },
  Text_4_206: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_207: {
    width: wp("1.399249615876571%"),
    minWidth: wp("1.399249615876571%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.90096618357488%"),
    top: hp("4.474043715846992%")
  },
  ImageBackground_4_208: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("1.366120218579237%")
  },
  ImageBackground_4_209: {
    width: wp("5.055949538226289%"),
    minWidth: wp("5.055949538226289%"),
    height: hp("2.84269233870376%"),
    minHeight: hp("2.84269233870376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10829936594203%"),
    top: hp("3.756830601092897%")
  },
  View_4_210: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.76502732240437%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_211: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_212: {
    width: wp("35.507246376811594%"),
    minWidth: wp("35.507246376811594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.28985507246377%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_4_212: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_213: {
    width: wp("1.399249615876571%"),
    minWidth: wp("1.399249615876571%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.90096618357488%"),
    top: hp("4.474043715846996%")
  },
  View_4_214: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("1.5027322404371617%")
  },
  ImageBackground_4_215: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_216: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_217: {
    width: wp("14.009661835748794%"),
    height: hp("7.65027270291021%"),
    top: hp("-0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995169%")
  },
  View_4_218: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("14.207650273224044%")
  },
  View_4_219: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 241, 242, 1)"
  },
  ImageBackground_4_220: {
    width: wp("3.459715958378741%"),
    minWidth: wp("3.459715958378741%"),
    height: hp("2.0250306103398894%"),
    minHeight: hp("2.0250306103398894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637681%"),
    top: hp("1.4344262295081975%")
  },
  View_4_221: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671499%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "flex-start"
  },
  Text_4_221: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_222: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_223: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_224: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%"),
    top: hp("7.5136612021857925%"),
    justifyContent: "flex-start"
  },
  Text_4_224: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_225: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.06280193236715%"),
    top: hp("7.786885245901639%")
  },
  ImageBackground_4_226: {
    width: wp("2.4654846836403372%"),
    minWidth: wp("2.4654846836403372%"),
    height: hp("2.459016654009376%"),
    minHeight: hp("2.459016654009376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%"),
    top: hp("7.786885245901639%")
  },
  View_4_227: {
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
  View_4_228: {
    width: wp("100%"),
    height: hp("4.781420765027322%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_4_229: {
    width: wp("32.367149758454104%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(6, 6, 6, 1)"
  },
  View_4_230: {
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
  View_4_231: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("-0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_4_232: {
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
  ImageBackground_4_233: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_236: {
    width: wp("0.36231884057971014%"),
    minWidth: wp("0.36231884057971014%"),
    height: hp("0.529232572336666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555571%"),
    top: hp("0.4781420765027322%")
  },
  ImageBackground_4_237: {
    width: wp("0.966183574879227%"),
    minWidth: wp("0.966183574879227%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008604956454917989%")
  },
  View_4_238: {
    width: wp("0.6038647342995169%"),
    minWidth: wp("0.6038647342995169%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008604956454917989%"),
    backgroundColor: "rgba(62, 81, 85, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_4_239: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("0.8879781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(6, 6, 6, 1)"
  },
  ImageBackground_4_240: {
    width: wp("4.072637143342392%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.2309516948428962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499490489131%")
  },
  ImageBackground_4_244: {
    width: wp("4.533327259303291%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.276878148480191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111129981884%")
  },
  View_4_249: {
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
  View_4_250: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_250: {
    color: "rgba(23, 23, 23, 1)",
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
