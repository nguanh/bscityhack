import React from 'react';
import {NavigationScreenProp, NavigationState, NavigationParams} from 'react-navigation';
import { Container, Header, Footer, Left, Button, Icon, Body, Title} from "native-base";
import {deleteItem, editItem, getItems} from '../store/actions/itemActions';
import {connect} from 'react-redux';

interface Props {
    getItems?: Function;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    item: any
}

class HomeScreen extends React.Component<Props> {
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

    public render() {
        console.log(this.props.item);
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

const mapStateToProps = state => ({
    item: state.item,
});

export default connect(
    mapStateToProps,
    { getItems, deleteItem, editItem }
)(HomeScreen);
