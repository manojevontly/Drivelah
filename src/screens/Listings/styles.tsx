import {StyleSheet,Dimensions,Platform} from 'react-native';
import Colors from '../../theme/colors';
import { FontStyles } from '../../theme/fontStyles';

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.bgColor
  },
  headerContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20,
    height:60
  },
  listingsText:{
    color:Colors.textColor,
    fontWeight:'bold',
    fontSize:24,
    fontFamily:FontStyles.museoSansRounded900
  },
  searchContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  profileImg:{
    width:32,
    height:32,
    borderRadius:16
  },
  spacer:{
    marginLeft:20
  },
listingBtn:{
  backgroundColor:Colors.themeColor,
  height:48,
  marginVertical:20,
  width:Dimensions.get('window').width*0.4,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:24,
  alignSelf:'center',
  shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3
},
sectionView:{
marginLeft:20,
marginBottom:10,
marginTop:20
},
sectionText:{
  color:Colors.textColor,
  fontSize:16,
  fontFamily:FontStyles.museoSansRounded700
},
itemStyle:{
padding:20,
flexDirection:'row',
flex:1,
backgroundColor:'white'
},
itemImageStyle:{
  width:80,
  height:80,
  borderRadius:4
},
titleContainer:{
  marginHorizontal:10,
  flex:1,
  alignItems:'flex-start'
},
itemSeparator:{
  height:1,
  backgroundColor:Colors.greyColor,
},
liveContainer:{
  paddingHorizontal:6,
  paddingVertical:4,
  backgroundColor:Colors.themeOpacityCol,
  borderRadius:4,
  marginBottom:4
},
liveText:{
  color:Colors.themeColor,
  fontSize:12,
  fontFamily:FontStyles.museoSansRounded700
},
draftContainer:{
  backgroundColor:Colors.yellowOpacityCol,

},
draftText:{
  color:Colors.yellowCol,
},

listedText:{
color:Colors.lightGreyCol,
fontSize:12,
lineHeight:14,
fontFamily:FontStyles.museoSansRounded500,
},
nameText:{
  color:Colors.textColor,
fontSize:18,
lineHeight:22,
fontFamily:FontStyles.museoSansRounded500,
},
amountContainer:{
  flexDirection:'row',
alignItems:'center',
marginTop:2
},
dotSeparator:{
  width:6,
  height:6,
  backgroundColor:Colors.lightGreyCol,
  borderRadius:3,
  marginHorizontal:6
},
draftSubmitText:{
  color:Colors.themeColor,
fontSize:12,
lineHeight:14,
marginTop:2,
fontFamily:FontStyles.museoSansRounded500,
},
hiddenContainer:{
  alignItems:'center'
},
  backTextWhite: {
    color: '#FFF',
    textAlign:'center',
    fontSize:12,
    padding:10,
    fontFamily:FontStyles.museoSansRounded500,
},
rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
},
rowBack: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
},
backRightBtn: {
    alignItems: 'center',
    bottom: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 1,
    width: 80,
},
backRightBtnLeft: {
    right: 80,
  opacity:Platform.OS == 'ios' ? 0.75 : 1,
  backgroundColor:Platform.OS == 'ios' ? Colors.themeColor:Colors.themeHOpacityCol
},
backRightBtnRight: {
    backgroundColor: Colors.themeColor,
    right: 0,
},
addlistingBtn:{
  fontSize: 16,
   color: 'white',
   fontFamily:FontStyles.museoSansRounded500,
  }

})