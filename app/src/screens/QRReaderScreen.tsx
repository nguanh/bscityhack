import React from 'react';
import {
    Container,
    Button,
    Body,
    Text} from "native-base";
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import {ToastAndroid} from 'react-native';

interface Props {

}

interface State {
    hasCameraPermission :boolean
    scanned: boolean,
}

export default class QRReaderScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state ={
            hasCameraPermission: false,
            scanned: false,
        }
    }

    private getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    };


    static navigationOptions = ({navigation}) => {
        return {
            title: 'Bitte Scannen',
        }
    };

    async componentDidMount() {
        this.getPermissionsAsync();
    }



    private handleBarCodeScanned = ({ type, data }) => {
        this.setState({
            scanned: true,
        });
        try {
            console.log(data);
            const url = "http://fb4402cf.ngrok.io/api/v1.0/formdata/qr/yuckfou";
            axios
                .post(url, data)
                .then(() =>
                    ToastAndroid.show("erfolgreich gesendet", ToastAndroid.SHORT)
                )
                .catch(err =>
                    console.log("fehler ", err)
                );
        } catch (e) {
            console.log(e);
            ToastAndroid.show("Fehler beim Parsen", ToastAndroid.SHORT);
        }
    }



    public render() {
        if (this.state.hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (this.state.hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }

        return (
          <Container>
              <Body>
                  <BarCodeScanner
                      onBarCodeScanned={
                          this.state.scanned
                              ? undefined
                              : this.handleBarCodeScanned.bind(this)
                      }
                      style={{ height: 400, width: 400 }}
                  />
                  {this.state.scanned && (
                      <Button onPress={() => this.setState({ scanned: false })} >
                          <Text>Scan again</Text>
                      </Button>
                  )}
              </Body>

          </Container>
        );
    }
}
