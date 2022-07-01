import Taro,{useEffect} from '@tarojs/taro';
 import { View,Text } from '@tarojs/components';
 import { connect } from '@tarojs/redux';
 import './index.less';
 
 const First = props =>{
     const {first,loading} = props;
       useEffect(() => {
         console.log(props)
       }, [])
     return (
            <View className="first-page">
              <Text>正如你所见这是你的first页面</Text>
            </View>
            )
 }
 First.config = {
   navigationBarTitleText: 'first'
 }
 //全局样式继承 你可以关掉
 First.options = {
   addGlobalClass: true
 }
 export default connect(
     ({
     first,
     loading
     })=>({
     first,
     loading
 }))(First)
 