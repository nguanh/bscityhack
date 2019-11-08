import React, { Component } from 'react';
import {
    Navbar,
    Collapse,
    Nav,
    NavbarBrand,
    NavbarToggler,
    Container,
    NavItem,
    NavLink
} from 'reactstrap';

interface Props {

}

interface State {
    isOpen: boolean
}
export default class  AppNavBar extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    toggle = () =>{
        this.setState({
            isOpen : !this.state.isOpen,
        })
    };

    public render() {
       return (
           <div>
               <Navbar color='dark' dark expand='sm' className='mb-5'>
                   <Container>
                       <NavbarBrand href='/'>ShoppingList</NavbarBrand>
                       <NavbarToggler onClick={this.toggle} />
                       <Collapse isOpen={this.state.isOpen} navbar>
                           <Nav className='ml-auto' navbar>
                               <NavItem>
                                   <NavLink href={"http://google.de"}>Google</NavLink>
                               </NavItem>
                           </Nav>
                       </Collapse>
                   </Container>
               </Navbar>
           </div>
       );
    }
}
