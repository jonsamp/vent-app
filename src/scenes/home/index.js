import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../../state/counter/actions'
import { getSentimentAnalysis } from '../../state/sentiment/actions'
import Button from '../../components/Button'

const mapStateToProps = (state, props) => {
  return {
    count: state.counter.count,
    analysis: JSON.stringify(state.sentiment.analysis, null, 2) || {}
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getSentimentAnalysis: () => {
      dispatch(getSentimentAnalysis())
    },
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    }
  }
}

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <Button onClick={props.getSentimentAnalysis}>Async Call</Button>
    </p>
    <p>Count: {props.count}</p>
    <pre>
      {props.analysis}
    </pre>

  </div>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
