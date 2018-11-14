import ReactReduct from '../../reduct/react-reduct';
import CounterComponent from './CounterComponent';

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({type: 'increment'}),
  onDecrement: () => dispatch({type: 'decrement'}),
});

const withReduct = ReactReduct.connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withReduct(CounterComponent);
