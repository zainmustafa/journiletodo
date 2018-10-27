import React, { Component } from "react";
import {
  Button,
  Form,
  ControlLabel,
  FormGroup,
  FormControl
} from "react-bootstrap";
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from "react-datepicker";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      startDate: moment()
    };
  }

  setTxt = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTask = () => {
    const { title, content } = this.state;
    this.props.Add(title, content);
    this.setState({
      title: "",
      content: ""
    });
  };

  onSubmitForm = () => {
    console.log(this.state);
  }

  render() {
    const { title, content, startDate } = this.state;

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
        <FormGroup>
          <DatePicker
            selected={startDate}
            name="startDate"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button bsStyle="primary" onClick={this.onSubmitForm}>Submit</Button>
      </Form>
    );
  }
}

export default TodoForm;
