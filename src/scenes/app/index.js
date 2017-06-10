import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Talk from '../talk'
import Write from '../write'
import SubConscious from '../subconscious'
import Logo from '../../images/vent-logo-wiggly.svg'
import Button from '../../components/Button'
import { selectTalk, selectWrite } from '../../state/nav/actions'
import { setTextContent } from '../../state/text/actions'

const mapStateToProps = (state) => {
  return {
    talk: state.nav.talk,
    write: state.nav.write,
    content: state.text.content,
    wordCount: state.text.wordCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectTalk: () => {
      dispatch(selectTalk())
    },
    selectWrite: () => {
      dispatch(selectWrite())
    },
    setTextContent: (content) => {
      dispatch(setTextContent({ content }))
    }
  }
}

const propTypes = {
  selectWrite: PropTypes.func,
  selectTalk: PropTypes.func
}

const App = (props) => (
  <div>
    <header className="nav displayFlexHorizontal">
      <img src={Logo} className="logo" alt="logo" />
      <div>
        <Button
          className="button-space"
          active={props.talk}
          onClick={props.selectTalk}
          >
          talk
        </Button>
        <Button
          className="button-space"
          active={props.write}
          onClick={props.selectWrite}
          >
          write
        </Button>
      </div>
    </header>

    <main>
      {props.talk ?
        <Talk /> :
        <Write onChange={props.setTextContent} content={props.content}/>
      }
      <SubConscious wordCount={props.wordCount} />
    </main>
  </div>
)

App.propTypes = propTypes

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
