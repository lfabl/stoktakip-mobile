import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial';
const iconSelector = ({
    family,
    props
}) => {
    switch(family) {
        case "MaterialCommunityIcons":
            return <MaterialCommunityIcons
                {...props}
            />;
        case "SimpleLineIcons":
            return <SimpleLineIcons
                {...props}
            />;
        case "MaterialIcons":
            return <MaterialIcons
                {...props}
            />;
        case "FontAwesome5":
            return <FontAwesome5
                {...props}
            />;
        case "FontAwesome":
            return <FontAwesome
                {...props}
            />;
        case "Foundation":
            return <Foundation
                {...props}
            />;
        case "AntDesign":
            return <AntDesign
                {...props}
            />;
        case "EvilIcons":
            return <EvilIcons
                {...props}
            />;
        case "Fontisto":
            return <Fontisto
                {...props}
            />;
        case "Octicons":
            return <Octicons
                {...props}
            />;
        case "Feather":
            return <Feather
                {...props}
            />;
        case "Entypo":
            return <Entypo
                {...props}
            />;
        case "Zocial":
            return <Zocial
                {...props}
            />;
        default:
            return <MaterialCommunityIcons
                {...props}
            />
    }
};
const Icon = ({
    family,
    ...props
}) => {
    return iconSelector({
        family,
        props
    })
};
export default Icon;