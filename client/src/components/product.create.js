import { Button, Container, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import apiService from '../Service/api.service';

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    this.state = {
      id: null,
      title: '',
      description: '',
      submitted: false,
    };
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description,
    };
    apiService
      .post('product/create-or-update', data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,
          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newTutorial() {
    this.setState({
      id: null,
      title: '',
      description: '',
      published: false,
      submitted: false,
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={this.newProduct}
            >
              Add
            </Button>
          </div>
        ) : (
          <div>
            <Container maxWidth="sm">
              <Typography variant="h6" gutterBottom component="div">
                Add Product
              </Typography>
              <div>
                <TextField
                  label="Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  required
                />
              </div>
              <div>
                <TextField
                  label="Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  required
                />
              </div>
              <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={this.saveProduct}
              >
                Submit
              </Button>
            </Container>
          </div>
        )}
      </React.Fragment>
    );
  }
}
