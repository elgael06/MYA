import React from 'react';
import { Block } from 'galio-framework';

const LayoutApp = ({children}) => {

    return(<Block style={{position:'absolute',top:0,bottom:0,left:0,right:0,backgroundColor:'#393e46'}}>
        {children}
    </Block>);
}

export default  LayoutApp;

