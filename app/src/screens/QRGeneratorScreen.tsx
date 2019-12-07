import React from 'react';
import {
    Container,
    Body,
} from "native-base";
import QRCode from 'react-native-qrcode';
import {IGlobalState} from '../store/reducers';
import {connect} from 'react-redux';
import {addFormField, changeLanguage} from '../store/actions/procedureActions';
import axios from 'axios';
import {getServerUrl} from '../utils/urlResolver';
import {ADD_ITEM} from '../store/actions/types';
import {returnErrors} from '../store/actions/errorActions';
import {ToastAndroid} from 'react-native';

interface Props {
    formData: any
}

const mockData = {
    fact: "Danyel liebt Softwareergonomie",
    frequency: 5,
    subObject: {
        x: [1,2,3],
    }
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

    public componentDidMount(): void {
        this.sendData();
    }


    private serializeData(value: any) {
        return JSON.stringify(value);
    }

    private sendData() {
        console.log(this.props.formData);
        const url = "http://36fb50b6.ngrok.io/api/v1.0/formdata/qr/yuckfou";
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
              <Body>
                  <QRCode
                      value={this.serializeData(this.props.formData)}
                      size={200}
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
