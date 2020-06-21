import React from 'react';
import styles from './SnippetView.module.scss';
import { Link } from 'react-router-dom';
import withContext from '../../hoc/withContext';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import PropTypes from 'prop-types';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';
import Button from '../../components/Button/Button';


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
          <div className={styles.wrapper} key={el.id}>
            <Heading tag='h3'>{el.title}</Heading>
            <Paragraph>{el.description}</Paragraph>
            <div className={styles.codeSnippetWrapper}>
              <pre>
              <SyntaxHighlighter language={null} style={vs2015}>
                {el.code}
              </SyntaxHighlighter>
              </pre>
            </div>
            <Link to={`/${el.type}`}>
              <Button btnSnippet>Go back</Button>
            </Link>
            <Link to={`/${el.type}`}>
              <Button btnSnippet onClick={() => deleteSnippet(el.type, el.id)}>Delete</Button>
            </Link>
          </div>
          )
        } return null;
      })

    return(
      <>
        {snippet}
      </>
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
