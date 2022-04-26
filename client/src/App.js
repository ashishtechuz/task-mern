import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styles } from './common.style';
import AddProduct from './components/product.create';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.name}>
              Logo
            </Typography>
            <Link to="/product" className={classes.link}>
              <Typography variant="body2">Products</Typography>
            </Link>
            <Link to="/add">
              <Typography variant="body2">Add</Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <BrowserRouter>
          <Routes>
            <Route path="/add" element={<AddProduct/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default withStyles(styles)(App);
