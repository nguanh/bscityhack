import React from 'react';
import {
    Container,
    Body,
} from "native-base";
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

export default class QRGeneratorScreen extends React.Component<Props> {
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
