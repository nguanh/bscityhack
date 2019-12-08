import React from 'react';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import {Button, Container, Input, Content, DatePicker, Picker, ListItem, Text} from 'native-base';
import {connect} from 'react-redux';
import {changeLanguage, addFormField} from '../store/actions/procedureActions';
import {LANGUAGE} from '../store/reducers/procedureReducer';
import {IGlobalState} from '../store/reducers';
import {getLangText, TEXT_FRAGMENTS} from '../utils/languageChoose';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import FormElement from '../component/FormElement';
import moment from 'moment';


interface Props {
    language: LANGUAGE;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    addFormField: (item: {key: string, value: string}) => void;
    formData: any;
}

interface State {
    woh_neu_addr: string;
    woh_neu_ort: string;
    woh_neu_plz: string;
    woh_wei_addr: string;
    woh_wei_ort: string;
    woh_wei_plz: string;
}

class FormScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state= {
            woh_neu_addr: "",
            woh_neu_ort: "",
            woh_neu_plz: "",
            woh_wei_addr: "",
            woh_wei_ort: "",
            woh_wei_plz: "",
        }
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Formulare',
            tabBarIcon: <MaterialCommunityIcons name={"format-columns"} size={30}/>
        }
    };

    private setDate(newDate) {
        const mom = moment(newDate).format("DD MM YY");

        this.props.addFormField({
            key: "einzugstag",
            value: mom
        });
    }



    private onPick(data) {
       let key1 = "Off";
       let key2 = "Off";
       let key3 = "Off";
       if(data == "key1") key1 = "Yes";
       if(data == "key2") key2 = "Yes";
       if(data == "key3") key3 = "Yes";

        this.props.addFormField({
            key: "wohnung_allein",
            value: key1
        });

        this.props.addFormField({
            key: "wohnung_haupt",
            value: key2
        });
        this.props.addFormField({
            key: "wohnung_neben",
            value: key3
        });
    }

    private setTextField(name, value) {
        const newObj = {
            [name]: value,
        }
        this.setState(newObj);

        this.props.addFormField({
            key: "adresseNeu",
            value: this.state.woh_neu_addr
        });

        this.props.addFormField({
            key: "plzNeu",
            value: `${this.state.woh_neu_ort} ${this.state.woh_neu_plz}`
        });

        this.props.addFormField({
            key: "adresseWeitere",
            value: this.state.woh_wei_addr
        });

        this.props.addFormField({
            key: "plzWeitere",
            value: `${this.state.woh_wei_ort} ${this.state.woh_wei_plz}`
        });
    }

    private finishJob(){
        this.props.navigation.navigate("Home");
    }

    public render() {
        const formData = this.props.formData;
        const einzugstag = formData.einzugstag || "08 12 19";
        const parsedData = moment(einzugstag, "DD MM YY");

        let wohnung = "key0";
        if (formData.wohnung_allein == "Yes") {
            wohnung = "key1"
        }
        if (formData.wohnung_haupt == "Yes") {
            wohnung = "key2"
        }
        if (formData.wohnung_neben == "Yes") {
            wohnung = "key3"
        }


        return (
          <Container>
                  <Content>
                      <FormElement text={"Tag des Einzugs"}>
                              <DatePicker
                                  defaultDate={parsedData.toDate()}
                                  locale={"de"}
                                  timeZoneOffsetInMinutes={undefined}
                                  modalTransparent={false}
                                  animationType={"fade"}
                                  androidMode={"default"}
                                  placeHolderText="Bitte auswählen"
                                  textStyle={{ color: "green" }}
                                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                                  onDateChange={this.setDate.bind(this)}
                                  disabled={false}
                              />
                      </FormElement>

                      <ListItem itemDivider={true}>
                          <Text>Angaben zur neuen Wohnung</Text>
                      </ListItem>
                      <FormElement text={"Adresse"}>
                          <Input
                              value={this.state.woh_neu_addr}
                              onChangeText={this.setTextField.bind(this, "woh_neu_addr")}
                          />
                      </FormElement>
                      <FormElement text={"PLZ"}>
                          <Input
                              value={this.state.woh_neu_plz}
                              onChangeText={this.setTextField.bind(this, "woh_neu_plz")}
                          />
                      </FormElement>
                      <FormElement text={"Ort"}>
                          <Input
                              value={this.state.woh_neu_ort}
                              onChangeText={this.setTextField.bind(this, "woh_neu_ort")}
                          />
                      </FormElement>
                      <ListItem itemDivider={true}>
                          <Text>Die neue Wohnung ist im Bereich des Bundesgebietes die...</Text>
                      </ListItem>
                      <ListItem>
                          <Picker
                              note
                              mode="dropdown"
                              selectedValue={wohnung}
                              onValueChange={this.onPick.bind(this)}
                          >
                              <Picker.Item label="Bitte Auswählen" value="key0" />
                              <Picker.Item label="Alleinige Wohnung" value="key1" />
                              <Picker.Item label="Hauptwohnung" value="key2" />
                              <Picker.Item label="Nebenwohnung" value="key3" />
                          </Picker>
                      </ListItem>
                      <ListItem itemDivider={true}>
                          <Text>Angaben zur weiteren Wohnung</Text>
                      </ListItem>
                      <FormElement text={"Adresse"}>
                          <Input
                              value={this.state.woh_wei_addr}
                              onChangeText={this.setTextField.bind(this, "woh_wei_addr")}
                          />
                      </FormElement>
                      <FormElement text={"PLZ"}>
                          <Input
                              value={this.state.woh_wei_plz}
                              onChangeText={this.setTextField.bind(this, "woh_wei_plz")}
                          />
                      </FormElement>
                      <FormElement text={"Ort"}>
                          <Input
                              value={this.state.woh_wei_ort}
                              onChangeText={this.setTextField.bind(this, "woh_wei_ort")}
                          />
                      </FormElement>
                      <FormElement text={"Abschließen"}>
                          <Button primary={true} onPress={this.finishJob.bind(this)}>
                              <Text>Abschließen</Text>
                          </Button>
                      </FormElement>

                  </Content>
          </Container>
        );
    }
}

const  mapStateToProps = (state: IGlobalState) => {
    return {
        language: state.procedure.language,
        formData: state.procedure.formField,
    }
};


export default connect(
    mapStateToProps,
    { changeLanguage, addFormField }
)(FormScreen);
