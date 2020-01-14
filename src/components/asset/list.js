import React, {Component} from 'react';
import {Table,Navbar, Nav, Container, Row, Col, Jumbotron, NavItem} from 'react-bootstrap';


class AssetList extends React.Component {
    constructor(props) {
        super(props);
        this.state={"assets":[{id:"1",description:"",assertNumber:"",serial:"",taggedTo:"",status:""}]};

      }

      renderTableData() {
        return this.state.assets.map((user, index) => {
           const {id, description, assertNumber, serial, taggedTo, status} = user
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{description}</td>
                 <td>{assertNumber}</td>
                 <td>{serial}</td>
                 <td>{taggedTo}</td>
                 <td>{status}</td>
              </tr>
           )
        })
     }

     render() {
        return (
            <Container>
            <Table responsive>
            <thead>
              <tr>
                <th>#id</th>
                <th>description</th>
                <th>assertNumber</th>
                <th>serial</th>
                <th>taggedTo</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
                {this.renderTableData()}
            </tbody>
          </Table>
          </Container>
        );
      }
}

export default AssetList;
