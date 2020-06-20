import React, { Component } from 'react'
import styles from './Search.module.scss';
import { withRouter } from 'react-router-dom';
import withContext from '../../hoc/withContext';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    search: '',
  }

  handleSearchChange = (e) => {
    const { searchSnippet } = this.props.appContext;

    this.setState({
      search: e.target.value
    }, () => {
      searchSnippet(this.updateSearchFilter());
    })
  }

  updateSearchFilter = () => {
    const {location, appContext} = this.props;
    const { search } = this.state;

    const typeOfSnippets = location.pathname.split('/')[1];
    let filteredSnippets = [];

    if(search !== '') {
      filteredSnippets = appContext[typeOfSnippets].filter(snippet => snippet.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    } else filteredSnippets = null;
    
    return filteredSnippets;
  }

  render(){ 
    return(
      <input className={styles.search} type="text" placeholder="search" value={this.state.search} onChange={this.handleSearchChange} />
    )
  }
}

Search.propTypes = {
  appContext: PropTypes.shape({
    searchSnippet: PropTypes.func.isRequired,
    html: PropTypes.array.isRequired,
    css: PropTypes.array.isRequired,
    javascript: PropTypes.array.isRequired,
    react: PropTypes.array.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  })
}

export default withContext(withRouter(Search));