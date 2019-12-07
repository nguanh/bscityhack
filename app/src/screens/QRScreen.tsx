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

const mockData = {
    fact: "Danyel liebt Softwareergonomie",
    frequency: 5,
    subObject: {
        x: [1,2,3],
    }
}

export default class QRScreen extends React.Component<Props> {
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



    public render() {

        return (
          <Container>
              <Body>
                  <Text>Wird geladen...</Text>
                  <QRCode
                      value={"https://www.google.de"}
                      size={200}
                      bgColor='purple'
                      fgColor='white'/>
              </Body>

          </Container>
        );
    }
}
