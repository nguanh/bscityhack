import React from 'react';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import {Body, Container, H3, Button, Text, Icon, CheckBox, ListItem, Content} from 'native-base';
import {connect} from 'react-redux';
import {changeLanguage, selectChecklistItem} from '../store/actions/procedureActions';
import {LANGUAGE} from '../store/reducers/procedureReducer';
import {IGlobalState} from '../store/reducers';
import {getLangText, TEXT_FRAGMENTS} from '../utils/languageChoose';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import {getForm} from '../utils/forms';

// TODO language
// TODO allow checking in state

interface Props {
    language: LANGUAGE;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    selectChecklistItem: (item: string) => void;
    items: string[];
}

class FormScreen extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Formulare',
            tabBarIcon: <MaterialCommunityIcons name={"format-columns"} size={30}/>
        }
    };


    private selectItem(item: string){
        this.props.selectChecklistItem(item);
    }

    private isSelected(item: string) {
        return this.props.items.includes(item);
    }

    private renderCheckList() {
        const checklist: string[] = getForm("checklist");
        return checklist.map((item) =>{
            return(
                <ListItem key={item}>
                    <CheckBox
                        checked={this.isSelected(item)}
                        onPress={this.selectItem.bind(this, item)}
                    />
                    <Body>
                        <Text>{item}</Text>
                    </Body>
                </ListItem>
            );
        });
    }

    public render() {
        return (
          <Container>
                  <H3>Bitte folgende Dokumente zum Termin mitbringen</H3>
                  <Content>
                  {this.renderCheckList()}
                  </Content>
          </Container>
        );
    }
}

const  mapStateToProps = (state: IGlobalState) => {
    return {
        language: state.procedure.language,
        items: state.procedure.checklistItems,
    }
};

export default connect(
    mapStateToProps,
    { changeLanguage, selectChecklistItem }
)(FormScreen);
