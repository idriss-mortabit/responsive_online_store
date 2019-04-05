import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import SearchBox from './../SearchFilter/SearchBox';
import {connect} from 'react-redux';

class Header extends Component {
  state = {
    isOpen: false
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render(){
  return (
    <MDBNavbar style={{backgroundColor:'#1e2434'}} dark expand="md">
      <MDBNavbarBrand>
        <MDBNavLink to="/"><strong className="white-text" style={{color:"white"}}>Online Store</strong></MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse}/>
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!">Features</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!">Pricing</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <SearchBox />
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <i className="fa fa-facebook-f"></i>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <i className="fa fa-whatsapp"></i>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <i className="fa fa-instagram"></i>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2" aria-hidden="true" />Cart {this.props.cartLength ? `(${this.props.cartLength})`: ''}</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="#!">Logout</MDBDropdownItem>
                <MDBDropdownItem href="#!">Profile</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      cartLength: state.shop.cart.length
  }
};

export default connect(mapStateToProps, null)(Header);