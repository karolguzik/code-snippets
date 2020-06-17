import React from 'react';
import { Link } from 'react-router-dom';
import withContext from '../../hoc/withContext';
import styles from './SnippetView.module.scss';


class SnippetView extends React.Component {
  state = {
    id: null,
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.setState({
      id: id
    })
  }

  render(){
    const snippet = this.props.appContext.allSnippets.map((el) => {
      if(el.id == this.state.id) {
        return (
          <>
            <h2 key={el.id}>{el.title}</h2>
            <p>{el.description}</p>
            <div className={styles.codeSnippetWrapper}>
              <pre>
                <code>{el.code}</code>
              </pre>
            </div>
            <Link to={"/" + el.type}>
              <button className={styles.btn}>Go back</button>
            </Link>
            <Link to={"/" + el.type}>
              <button className={styles.btn} onClick={() => this.props.appContext.deleteSnippet(el.type, el.id)}>Delete</button>
            </Link>
          </>
          )
        }
      })

    return(
      <div className={styles.wrapper}>
        {snippet}
      </div>
    )
  }
}

export default withContext(SnippetView)
