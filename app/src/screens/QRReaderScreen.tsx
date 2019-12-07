import React from 'react';
import {NavigationScreenProp, NavigationState, NavigationParams} from 'react-navigation';
import {
    Card,
    CardItem,
    Container,
    Footer,
    Button,
    Icon,
    Item,
    Input,
    Right,
    Body, Title, Text} from "native-base";
import QRCode from 'react-native-qrcode';

interface Props {

}

export default class QRReaderScreen extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

    }
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Bitte Scannen',
        }
    };

    public componentDidMount(): void {
    }


    private serializeData(value: any) {
        return JSON.stringify(value);
    }



    public render() {

        return (
          <Container>
              <Body>
                  <Text>Wird geladen...</Text>
                  <QRCode
                      value={this.serializeData(mockData)}
                      size={200}
                      bgColor='purple'
                      fgColor='white'/>
              </Body>

          </Container>
        );
    }
}
