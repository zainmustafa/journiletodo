import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
class ListView extends Component {
  render() {
      const data = [
          {
              title : "one",
              content : "two",
              date : "10/27/2018"
          },
          {
              title : "one1",
              content : "two",
              date : "10/27/2018"
          },
          {
              title : "one11",
              content : "two",
              date : "10/27/2018"
          },
          {
              title : "one111",
              content : "two",
              date : "10/27/2018"
          }
      ]
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Content</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            return <tr key={i.toString()}>
              <td>{i+1}</td>
              <td>{d.title}</td>
              <td>{d.content}</td>
              <td>{d.date}</td>
              <td>
                <Button bsStyle="primary">Edit</Button>
              </td>
              <td>
                <Button bsStyle="danger">Delete</Button>
              </td>
            </tr>;
          })}
        </tbody>
      </Table>
    );
  }
}

export default ListView;
