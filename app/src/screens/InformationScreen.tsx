import React from 'react';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import {Body, Container, H1, Button, Text, Icon} from 'native-base';
import {connect} from 'react-redux';
import {changeLanguage} from '../store/actions/procedureActions';
import {LANGUAGE} from '../store/reducers/procedureReducer';
import {IGlobalState} from '../store/reducers';
import {getLangText, TEXT_FRAGMENTS} from '../utils/languageChoose';
import { MaterialCommunityIcons } from "@expo/vector-icons"

// TODO Searchable dropdown

interface Props {
    language: LANGUAGE;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class InformationScreen extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Info',
            tabBarIcon: <MaterialCommunityIcons name={"information"} size={30}/>
        }
    };

    public render() {
        return (
          <Container>
              <Body>
                  <H1>{getLangText(TEXT_FRAGMENTS.PICK_PROCEDURE, this.props.language)}</H1>
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
)(InformationScreen);
