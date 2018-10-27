import React, { Component } from "react";
import {
  Button,
  Form,
  ControlLabel,
  FormGroup,
  FormControl
} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert2";
// import DatePicker from "react-datepicker";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  setTxt = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTask = () => {
    
  };

  onSubmitForm = () => {
    const { title, content } = this.state;
    if(title == "" && content == ""){
      return;
    }
    const data = {
      title,
      content
    };
    fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        swal("Todo Added", "Todo Added!", "success").then(()=>{
          this.props.pushTodo(res);
        });
        
      })
      .catch(err => console.log(err));
  };

  render() {
    const { title, content } = this.state;

    return (
      <Form>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            name="title"
            value={title}
            placeholder="Enter Title"
            onChange={this.setTxt}
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="text"
            name="content"
            value={content}
            placeholder="Enter Content"
            onChange={this.setTxt}
          />
        </FormGroup>
        {/* <FormGroup>
          <DatePicker
            selected={startDate}
            name="startDate"
            onChange={this.handleChange}
          />
        </FormGroup> */}
        <Button bsStyle="primary" onClick={this.onSubmitForm}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default TodoForm;
