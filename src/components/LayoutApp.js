import React from 'react';
import { Block } from 'galio-framework';

const LayoutApp = ({children}) => {

    return(<Block style={{position:'absolute',top:0,bottom:0,left:1,right:0,backgroundColor:'#dbdbdb90'}}>
        {children}
    </Block>);
}

export default  LayoutApp;

