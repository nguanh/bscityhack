import React from 'react';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import {Body, Button, Container, Text,
    Header,

} from 'native-base';
import {connect} from 'react-redux';
import {changeLanguage} from '../store/actions/procedureActions';
import {LANGUAGE} from '../store/reducers/procedureReducer';


interface Props {
    changeLanguage: (language: LANGUAGE) => void;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class HomeScreen extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

    }

    private onClick() {
        this.props.navigation.navigate("QR");
        this.props.changeLanguage(LANGUAGE.DE);
    }

    private onChangeLanguage(language: LANGUAGE) {
        this.props.changeLanguage(language);
        this.props.navigation.navigate("PROCEDURE");
    }

    public componentDidMount(): void {
    }


    public render() {

        return (
          <Container>
              <Header>
                  <Button onPress={this.onClick.bind(this)}>
                      <Text> QR Code generieren</Text>
                  </Button>
              </Header>
              <Body>
                  <Button onPress={this.onChangeLanguage.bind(this, LANGUAGE.DE)}>
                      <Text> Deutsch</Text>
                  </Button>
                  <Button onPress={this.onChangeLanguage.bind(this, LANGUAGE.EN)}>
                      <Text> Englisch</Text>
                  </Button>
              </Body>
          </Container>
        );
    }
}

export default connect(
    null,
    { changeLanguage }
)(HomeScreen);
