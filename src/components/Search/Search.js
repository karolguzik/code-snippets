import React, { Component } from 'react'
import styles from './Search.module.scss';
import { withRouter } from 'react-router-dom';
import withContext from '../../hoc/withContext';

// TODO: reset input value after change snippet view for reset desplaying snippets on different view.
// TODO: render Search component while view include any snippets
class Search extends Component {
  state = {
    search: '',
  }

  handleSearchChange = (e) => {
    this.setState({
      search: e.target.value
    }, () => {
      this.props.appContext.searchSnippet(this.updateSearchFilter());
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


export default withContext(withRouter(Search));