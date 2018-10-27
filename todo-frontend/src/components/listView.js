import React, { Component } from "react";
import { Table, Button, Row, Glyphicon } from "react-bootstrap";
import swal from "sweetalert2";
import moment from "moment";

class ListView extends Component {
  componentDidMount() {
    fetch("http://localhost:4000/todos")
      .then(res => res.json())
      .then(todos => this.props.updateTodos(todos));
  }

  delTask = (id, index) => {
    swal({
      title: "Are you sure ?",
      text: "Todo Deleted!",
      type: "error",
      showCancelButton: true,
      cancelButtonColor: "#d33"
    }).then(d => {
      if (d.value) {
        fetch("http://localhost:4000/todos/" + id, {
          method: "delete"
        })
          .then(res => res.json())
          .then(res => {
            if (res.status) {
              const { todos } = this.props;
              todos.splice(index, 1);
              this.props.updateTodos(todos);
            }
          })
          .catch(err => console.log(err));
      }
    });
  };

  updateTask = (title, content, _id, index) => {
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
    }).then(result => {
      const data = {};
      data.title = result.value[0];
      data.content = result.value[1];
      fetch("http://localhost:4000/todos/" + _id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          swal("Todo!", "Your Todo Has Been Updated!", "success").then(() => {
            this.props.updateItem(res, index);
          });
        })
        .catch(err => console.log(err));
    });
  };

  render() {
    const { todos } = this.props;
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
              const date = moment(d.date);
              return (
                <tr key={index.toString()}>
                  <td>{index + 1}</td>
                  <td>{d.title}</td>
                  <td>{d.content}</td>
                  <td>{date.format("L")}</td>
                  <td>
                    <Button
                      bsStyle="primary"
                      onClick={() => {
                        this.updateTask(d.title, d.content, d._id, index);
                      }}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      bsStyle="danger"
                      onClick={() => {
                        this.delTask(d._id, index);
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
