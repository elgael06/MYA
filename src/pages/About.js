import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import TopAppBar from '../components/TopAppBar';
import { Block, Accordion } from 'galio-framework';
import Video from 'react-native-video';

const data = [
    { title: "First Chapter", content: "Lorem ipsum dolor sit amet", 
      icon: {
        name: 'laptop',
        family: 'material',
        size: 16,
      } 
   },
    { title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
    { title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
  ];

const About =()=>{

    let reference = null;

    const onBuffer =()=>{
        console.log('cargando...');
    }
    const videoError =()=>{
        console.log('Error');
    }

    return(<>
        
        <TopAppBar 
            back
            title='About App.'
        />
        <View style={{
            padding:20,
            textAlign:'center',
            flex: 20,
        }}>
            <Text style={{fontSize:20,marginBottom:10}}>Este es el componente About.</Text>
            <Block style={{ height: 400 }}>
                <Accordion dataArray={data} />

            <Video 
                source={
                    {
                        uri:'https://gdurl.com/CJkl/download'
                    }
                }
                ref={e=>reference=e}
                shouldPlay
                useNativeControls
                resizeMode="cover"                                                     // Store reference
                onBuffer={onBuffer}                // Callback when remote video is buffering
                onError={videoError}     
                audioOnly
                fullscreen={true}   
                style={styles.backgroundVideo} 
            />

            </Block>
        </View>
    </>);
}
var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,

    },
  });


export default About;