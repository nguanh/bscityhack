import React from 'react';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import {Body, Container, Footer, H1,} from 'native-base';
import {connect} from 'react-redux';
import {changeLanguage} from '../store/actions/procedureActions';
import {LANGUAGE} from '../store/reducers/procedureReducer';
import {IGlobalState} from '../store/reducers';
import {getLangText, TEXT_FRAGMENTS} from '../utils/languageChoose';


interface Props {
    language: LANGUAGE;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class ProcedureScreen extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

    }
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Bitte Produkt auswählen',
        }
    };


    public render() {
        console.log(this.props.language);
        return (
          <Container>
              <Body>
                  <H1>{getLangText(TEXT_FRAGMENTS.PICK_PROCEDURE, this.props.language)}</H1>
              </Body>
              <Footer>

              </Footer>
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
