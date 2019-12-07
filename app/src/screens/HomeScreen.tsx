import React from 'react';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import {Body, Button, Container, Text,
    Header,
} from 'native-base';
import {connect} from 'react-redux';
import {changeLanguage} from '../store/actions/procedureActions';
import {LANGUAGE} from '../store/reducers/procedureReducer';
import {IGlobalState} from '../store/reducers';
import * as _ from "lodash";
import {StyleSheet} from "react-native";


interface Props {
    changeLanguage: (language: LANGUAGE) => void;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    formData: any;
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
                  {!_.isEmpty(this.props.formData) &&
                  <Header>
                      <Button onPress={this.onClick.bind(this)}>
                          <Text> QR Code generieren</Text>
                      </Button>
                  </Header>
                  }
              <Body>
                  <Button
                      onPress={this.onChangeLanguage.bind(this, LANGUAGE.DE)}
                      style={styles.button}
                  >
                      <Text> Deutsch</Text>
                  </Button>
                  <Button
                      onPress={this.onChangeLanguage.bind(this, LANGUAGE.EN)}
                      style={styles.button}
                  >
                      <Text> Englisch</Text>
                  </Button>
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
    { changeLanguage }
)(HomeScreen);

const styles = StyleSheet.create({
    button: {
        marginTop: 24,
    }
});
