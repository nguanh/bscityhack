import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux';
import {deleteItem, getItems} from '../actions/itemActions';
interface Props {
    getItems?: Function;
    deleteItem?: (id: string) => void;
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

    render() {
        const { items } = this.props.item;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className='shopping-list'>
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                    <Button
                                        className='remove-btn'
                                        color='danger'
                                        size='sm'
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                        &times;
                                    </Button>
                                    {name}
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
    { getItems, deleteItem }
)(ShoppingList);
