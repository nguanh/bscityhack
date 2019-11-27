import React from 'react';
import {NavigationScreenProp, NavigationState, NavigationParams} from 'react-navigation';
import { Container, Header, Footer, Left, Button, Icon, Body, Title} from "native-base";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class HomeScreen extends React.Component<Props> {
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

    public render() {
        return (
          <Container>
              <Body>
                  <Title>Header</Title>
              </Body>
              <Footer>

              </Footer>
          </Container>
        );
    }
}
