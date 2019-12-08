import React from 'react';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import { H3, ActionSheet, Root} from 'native-base';
import {connect} from 'react-redux';
import {changeLanguage, setAppointment} from '../store/actions/procedureActions';
import {LANGUAGE} from '../store/reducers/procedureReducer';
import {IGlobalState} from '../store/reducers';
import {getLangText, TEXT_FRAGMENTS} from '../utils/languageChoose';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface Props {
    language: LANGUAGE;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    setAppointment: (item: string) => void;
    items: string[];
}

const startLocation = {
    latitude: 52.2590183,
    longitude: 10.5116021,
};

const behoerden = [
    {
        location:
            {
                latitude: 52.2634889,
                longitude: 10.5221987,
            },
        name: "Stadtverwaltung Braunschweig Stadtelternrat",
        dates: ["09.12.19 12:00", "09.12.19 14:00"],
    },
    {
        location:
            {
                latitude: 52.2613121,
                longitude: 10.5172205,
            },
        name: "Stadt Braunschweig, Fachbereich Kinder, Jugend und Familie",
        dates: ["09.12.19 10:00", "09.12.19 15:00"],
    },
    {
        location:
            {
                latitude: 52.2592994,
                longitude: 10.5273914,
            },
        name: "Stadt Braunschweig, Fachbereich Stadtgrün und Sport",
        dates: ["09.12.19 8:00", "09.12.19 9:00"],
    },
];

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

    private renderMarkers() {
        return behoerden.map((beh) => {
            const buttons = [...beh.dates, "Abbrechen"];
            const cancelIndex = buttons.length -2;
            return <Marker
                key={beh.name}
                coordinate={beh.location}
                pinColor={"blue"}
                onPress={() => {
                    ActionSheet.show(
                        {
                            options: buttons,
                            cancelButtonIndex: cancelIndex,
                            title: beh.name,
                        },
                        buttonIndex => {
                            const clickedButton = buttons[buttonIndex];
                            if( clickedButton != "Abbrechen") {
                                this.props.setAppointment(clickedButton);
                                this.props.navigation.navigate("PROCEDURE");
                            }
                        }
                    )
                }
                }
            />
        });
    }


    public render() {
        return (
          <Root>
              <H3>Bitte folgende Dokumente zum Termin mitbringen</H3>
              <View style={styles.container}>
                  <MapView
                      ref={ref => {
                          this.map = ref;
                      }}
                      style={styles.mapStyle}
                      onMapReady={this.fitMap.bind(this)}
                      maxZoomLevel={15}

                  >
                  <Marker coordinate={startLocation} />
                  {this.renderMarkers()}
                  </MapView>
              </View>
          </Root>
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
    { changeLanguage, setAppointment }
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
