import React from 'react';
import {
    Container,
    Body,
} from "native-base";
import QRCode from 'react-native-qrcode';
import {IGlobalState} from '../store/reducers';
import {connect} from 'react-redux';
import axios from 'axios';
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

    public componentDidMount(): void {
        this.sendData();
    }


    private serializeData(value: any) {
        return JSON.stringify(value);
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
