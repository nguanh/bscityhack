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
import {deleteItem, editItem, getItems} from '../store/actions/itemActions';
import {connect} from 'react-redux';

interface Props {
    getItems?: Function;
    editItem ?: (_id:string, newValue: string) => void;
    deleteItem ?: (_id: string) => void;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    item: any[];
    //TODO specify type
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

    public componentDidMount(): void {
        this.props.getItems();
    }

    private onChangeText(_id: string, newValue: string) {
        this.props.editItem(_id, newValue);
    }

    private renderItems() {
        return this.props.item.items.map((singleItem) => {
           return  (
               <Card key={singleItem._id}>
                   <CardItem header={true} bordered={true}>
                       <Text>Neue Aufgabe</Text>
                       <Right>
                           <Icon name={"remove"} />
                       </Right>
                   </CardItem>
                   <CardItem bordered={true}>
                       <Body>
                           <Item>
                               <Input
                                   defaultValue={singleItem.name}
                                   onChangeText={this.onChangeText.bind(this, singleItem._id)}
                               />

                           </Item>
                       </Body>
                   </CardItem>

               </Card>
           );
        });
    }

    public render() {

        return (
          <Container>
              <Body>
                  <Title>Header</Title>
                  {
                      (this.props.item  && this.props.item.items)
                      ? this.renderItems()
                      : <Text>Wird geladen...</Text>
                  }
              </Body>
              <Footer>

              </Footer>
          </Container>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
});

export default connect(
    mapStateToProps,
    { getItems, deleteItem, editItem }
)(HomeScreen);
