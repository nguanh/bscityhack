import React from 'react';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import {Body, Container, H1, Button, Text} from 'native-base';
import {connect} from 'react-redux';
import {changeLanguage} from '../store/actions/procedureActions';
import {LANGUAGE} from '../store/reducers/procedureReducer';
import {IGlobalState} from '../store/reducers';
import {getLangText, TEXT_FRAGMENTS} from '../utils/languageChoose';

// TODO Searchable dropdown

interface Props {
    language: LANGUAGE;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class ProcedureScreen extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

    }

    onSelect() {
        this.props.navigation.navigate("Main");
    }

    public render() {
        return (
          <Container>
              <Body>
                  <H1>{getLangText(TEXT_FRAGMENTS.PICK_PROCEDURE, this.props.language)}</H1>
                  <Button onPress={this.onSelect.bind(this)}>
                      <Text>ANMELDUNG bei der Meldebehörde</Text>
                  </Button>
                  <Button>
                      <Text>Gewerbeschein</Text>
                  </Button>
                  <Button>
                      <Text>Ausweis beantragen</Text>
                  </Button>

              </Body>
          </Container>
        );
    }
}

const  mapStateToProps = (state: IGlobalState) => {
    return {
        language: state.procedure.language
    }
};

export default connect(
    mapStateToProps,
    { changeLanguage }
)(ProcedureScreen);
