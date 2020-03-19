import React  from 'react';
//import React , {useCallback} from 'react';
//import { useFormik} from 'formik';
//import { useDispatch} from 'react-redux';
import {  withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import history from '../../history';
//import {accountActionTypes} from '../../features/account';
import {makeAccountCreate} from '../../http/http_data'
//import { accountValidationSchema } from '../helper/validator'

class UserCreate extends React.Component {
  
  constructor(props){
    super(props);
    this.onSubmit=this.onSubmit.bind(this);
    this.myChangeHandler=this.myChangeHandler.bind(this);
  }
 
  handleCancel () {
    history.push("/users");
  }
  
  myChangeHandler(event){
    const target = event.target;
    this.props.updateAccountValues({name: target.name, value : target.value});
  }

  onSubmit(){
      console.log("onSubmit start");
      console.log(this.props.account);
      this.props.makeAccountCreate(this.props.account);
      console.log("onSubmit completed ");
    }
  render()
  {
  return (
    <Container>
    <form onSubmit={e => {e.preventDefault();}}>
      <Row>
      <Col></Col>
      <Col>
      <Row>
      <Col><label htmlFor="firstName">First Name</label></Col>
      <Col>
      <input type="text" name="firstName" value= {this.props.account.firstName} onChange={this.myChangeHandler}/>
      </Col>
      </Row>
      </Col>
      <Col></Col>
      </Row>
      <Row>
      <Col></Col>
      <Col>
      <Row>
      <Col><label htmlFor="lastName">Last Name</label></Col>
      <Col>
      <input type="text" name="lastName"  value= {this.props.account.lastName} onChange={this.myChangeHandler}/>
      </Col>
      </Row>
      </Col>
      <Col></Col>
      </Row>
      <Row>
      <Col></Col>
      <Col>
      <Row>
      <Col><label htmlFor="email">Email Address</label></Col>
      <Col>
      <input type="text" name="email" value= {this.props.account.email} onChange={this.myChangeHandler}/>
      </Col>
      </Row>
      </Col>
      <Col></Col>
      </Row>
      <Row>
      <Col></Col>
      <Col>
      <Row>
      <Col> <label htmlFor="mobile">Mobile Number</label></Col>
      <Col>
      <input type="text" name="mobile" value= {this.props.account.mobile} onChange={this.myChangeHandler}/>
      </Col>
      </Row>
      </Col>
      <Col></Col>
      </Row>
      <Row>
      <Col></Col>
      <Col>
      <Row className="justify-content-md-center">
      <Col md="auto">
      <button type="button" className="mr-2" onClick={this.handleCancel}>Cancel</button>
      <button type="button" onClick={this.onSubmit} >Submit</button>
      </Col>
      </Row>
      </Col>
      <Col></Col>
      </Row>
      </form>
    </Container>
  );
  }
}

function mapStateToProps(state) {
  return { account:state.acc.get("account") }
}

UserCreate.propTypes = {
  account:  PropTypes.any,
  updateAccountValues:PropTypes.func.isRequired,
  makeAccountCreate:PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    makeAccountCreate:(value) => makeAccountCreate(value),
    updateAccountValues: (values) => dispatch({payload:values , type: 'UPDATE_ACCOUNT_VALUES' }),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(UserCreate))

