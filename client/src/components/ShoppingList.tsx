import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Input, InputGroup } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux';
import {deleteItem, getItems, editItem} from '../actions/itemActions';
interface Props {
    getItems?: Function;
    deleteItem?: (id: string) => void;
    editItem ?: (id: string, value: string)=> void;
    item?: any,

}
 class ShoppingList extends Component<Props> {
    componentDidMount() {
        // @ts-ignore
        this.props.getItems();
    }

    onDeleteClick = id => {
        // @ts-ignore
        this.props.deleteItem(id);
    };

    onChangeText(id, event) {
        this.props.editItem(id,event.target.value);
    }

    render() {
        const { items } = this.props.item;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className='shopping-list'>
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                    <InputGroup>
                                    <Button
                                        className='remove-btn'
                                        color='danger'
                                        size='sm'
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                        &times;
                                    </Button>

                                    <Input value={name} onChange={this.onChangeText.bind(this, _id)} />
                                    </InputGroup>

                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
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
)(ShoppingList);
