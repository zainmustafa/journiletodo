import React, { Component } from "react";
import { Table, Button, Row, Glyphicon} from "react-bootstrap";
import swal from "sweetalert2";

class ListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos : []
    };
  }


  componentDidMount(){
    fetch("http://localhost:4000/todos")
    .then(res => res.json())
    .then(todos => this.setState({todos}) )
  }
  delTask = () => {
    swal("Todo!", "Todo Deleted!", "error");
  };
  updateTask = (title, content, index) => {
    swal({
      title: "Todo",
      html: `<h2>Update Your Todo</h2>
        <input id="swal-input1" value="${title}" class="swal2-input" autofocus placeholder="Title">
        <input id="swal-input2" value="${content}" class="swal2-input" placeholder="Description">`,
      preConfirm: function() {
        return new Promise(function(resolve) {
          if (true) {
            resolve([
              document.getElementById("swal-input1").value,
              document.getElementById("swal-input2").value
            ]);
          }
        });
      }
    }).then(function(result) {
      console.log({ result });
      swal("Todo!", "Your Todo Has Been Updated!", "success");
    });
  };
  render() {
    const { todos } =this.state

    return (
      <div>
        <Row>
          Todo List{" "}
          <Button
            bsSize="large"
            onClick={() => {
              this.props.showForm();
            }}
          >
            <Glyphicon glyph="plus-sign" /> Add Todo
          </Button>
        </Row>
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
            {todos.map((d, index) => {
              return (
                <tr key={index.toString()}>
                  <td>{index + 1}</td>
                  <td>{d.title}</td>
                  <td>{d.content}</td>
                  <td>{d.date}</td>
                  <td>
                    <Button
                      bsStyle="primary"
                      onClick={() => {
                        this.updateTask(d.title, d.content, index);
                      }}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      bsStyle="danger"
                      onClick={() => {
                        this.delTask(index);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ListView;
