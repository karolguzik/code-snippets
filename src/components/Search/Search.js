import React, { Component } from 'react'
import styles from './Search.module.scss';
import { withRouter } from 'react-router-dom';
import withContext from '../../hoc/withContext';

class Search extends Component {
  state = { 
    snippet: [],
  }



  handleSearchChange = (e) => {
    console.log(this.props.appContext.allSnippets)
    const type = this.props.location.pathname.split('/')[1];

    const snippet = this.props.appContext[type].filter(snippet => snippet.title.includes(e.target.value));

    console.log(snippet);
    if(e.target.value == '') {
      this.setState({
        snippet: this.props.appContext[type]
      })
    }

    this.setState({
      snippet: snippet,
    })

  console.log(this.state)

    this.props.appContext.searchSnippet(type, this.state.snippet)
  }

  render(){
    console.log(this.props)
    return(
      <input className={styles.search} type="text" placeholder="search" onChange={this.handleSearchChange} />
    )
  }
}

export default withContext(withRouter(Search));