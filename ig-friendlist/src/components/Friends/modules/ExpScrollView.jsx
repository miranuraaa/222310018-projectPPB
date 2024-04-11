import React from 'react';
import {ScrollView} from 'react-native';
import Friendlist from '../widgets/Friendlist';

const ExpScrollView = ({Data}) => {
    return (
        <ScrollView>
            {Data.map((v, index) => (
                <Friendlist items={v} key={index}/>
            ))}
        </ScrollView>
 
    );
};

export default ExpScrollView;
