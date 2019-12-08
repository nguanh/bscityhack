import React from 'react';
import {
    Container,
    Body,
} from "native-base";
import QRCode from 'react-native-qrcode';
import {IGlobalState} from '../store/reducers';
import {connect} from 'react-redux';
import axios from "axios";
import {ToastAndroid} from 'react-native';

interface Props {
    formData: any
}

class QRGeneratorScreen extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

    }
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Bitte Scannen',
        }
    };

    private serializeData(value: any) {
        const stringified = JSON.stringify(value);
        console.log(stringified);
        return stringified
    }

    private componentDidMount(): void {
        this.sendData();
    }

    private sendData() {
        console.log( "gen", this.props.formData);
        const url = "http://57600eb0.ngrok.io/api/v1.0/formdata/qr/yuckfou";
        axios
            .post(url, this.props.formData)
            .then(res =>
                ToastAndroid.show("erfolgreich gesendet", ToastAndroid.SHORT)
            )
            .catch(err =>
                console.log("fehler ", err)
            );
    }




    public render() {

        return (
          <Container>
              <Body style={{marginTop: 24}}>
                  <QRCode

                      value={this.serializeData(this.props.formData)}
                      size={350}
                      bgColor='purple'
                      fgColor='white'/>
              </Body>

          </Container>
        );
    }
}

const  mapStateToProps = (state: IGlobalState) => {
    return {
        formData: state.procedure.formField,
    }
};

export default connect(
    mapStateToProps,
    { }
)(QRGeneratorScreen);
