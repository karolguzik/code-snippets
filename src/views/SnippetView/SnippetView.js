import React from 'react';
import { Link } from 'react-router-dom';
import withContext from '../../hoc/withContext';
import styles from './SnippetView.module.scss';
import PropTypes from 'prop-types';


class SnippetView extends React.Component {
  state = {
    id: null,
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({
      id: id
    })
  }

  render(){
    const { id } = this.state;
    const { allSnippets, deleteSnippet } = this.props.appContext;

    const snippet = allSnippets.map((el) => {
      if(el.id === id) {
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
              <button className={styles.btn} onClick={() => deleteSnippet(el.type, el.id)}>Delete</button>
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

SnippetView.propTypes = {
  appContext: PropTypes.shape({
    id: PropTypes.number,
    allSnippets: PropTypes.array.isRequired,
    deleteSnippet: PropTypes.func.isRequired,
  }).isRequired,
}

export default withContext(SnippetView)
