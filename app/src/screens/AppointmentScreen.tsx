import React from 'react';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import {Body, Container, H3, Button, Text, Icon, CheckBox, ListItem, Content} from 'native-base';
import {connect} from 'react-redux';
import {changeLanguage, selectChecklistItem} from '../store/actions/procedureActions';
import {LANGUAGE} from '../store/reducers/procedureReducer';
import {IGlobalState} from '../store/reducers';
import {getLangText, TEXT_FRAGMENTS} from '../utils/languageChoose';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import {getForm} from '../utils/forms';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface Props {
    language: LANGUAGE;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    selectChecklistItem: (item: string) => void;
    items: string[];
}

const startLocation = {
    latitude: 52.2590183,
    longitude: 10.5116021,
};
const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };

class AppointmentScreen extends React.Component<Props> {
    private map: any;
    constructor(props: Props) {
        super(props);
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Termin',
            tabBarIcon: <MaterialCommunityIcons name={"calendar-clock"} size={30}/>
        }
    };

    private fitMap() {
        this.map.fitToCoordinates([startLocation], {
            edgePadding: DEFAULT_PADDING,
            animated: true,
        });
    }


    public render() {
        return (
          <Container>
              <H3>Bitte folgende Dokumente zum Termin mitbringen</H3>
              <View style={styles.container}>
                  <MapView
                      ref={ref => {
                          this.map = ref;
                      }}
                      style={styles.mapStyle}
                      onMapReady={this.fitMap.bind(this)}

                  >
                  <Marker coordinate={startLocation} />
                  </MapView>
              </View>
          </Container>
        );
    }
}

const  mapStateToProps = (state: IGlobalState) => {
    return {
        language: state.procedure.language,
        items: state.procedure.checklistItems,
    }
};

export default connect(
    mapStateToProps,
    { changeLanguage, selectChecklistItem }
)(AppointmentScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
