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


interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class HomeScreen extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

    }
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Home',
            headerRight: () => (
                <Button transparent={true} onPress={
                    () => navigation.navigate("Details")
                }>
                    <Icon name={"menu"}/>
                </Button>
            )
        }
    };

    private onClick() {
        this.props.navigation.navigate("QR");
    }

    public componentDidMount(): void {
    }


    public render() {

        return (
          <Container>
              <Body>
                  <Title>Header</Title>
                  <Button onPress={this.onClick.bind(this)}>
                      <Text> QR Code generieren</Text>
                  </Button>
              </Body>
              <Footer>

              </Footer>
          </Container>
        );
    }
}

export default HomeScreen;
