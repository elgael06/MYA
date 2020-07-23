import React from 'react';
import { View, Text} from 'react-native';

import TopAppBar from '../components/TopAppBar';
import { Block, Accordion } from 'galio-framework';

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
            <Block style={{ height: 200 }}>
                <Accordion dataArray={data} />
            </Block>
        </View>
    </>);
}
export default About;