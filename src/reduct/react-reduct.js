import React from 'react';

const ReductContext = React.createContext({});

const Provider = ({store, children}) => {
  return (
    <ReductContext.Provider value={store}>{children}</ReductContext.Provider>
  );
};

class connectWithHOC extends React.Component {
  static contextType = ReductContext;
  componentDidMount() {
    const store = this.context;
    this.unsubscribe = store.subscribe(this.forceUpdate);
  }
  componentWillUnmount = () => {
    this.unsubscribe();
  };
  render() {
    const {children} = this.props;
    const store = this.context;
    return children({state: store.getState(), dispatch: store.dispatch});
  }
}

const connect = (mapState, mapDispatch) => (C) => {
  return class WrappedComponent extends React.Component {
    static contextType = ReductContext;
    componentDidMount() {
      const store = this.context;
      this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount = () => {
      this.unsubscribe();
    };
    render() {
      const store = this.context;
      return (
        <C
          {...mapState(store.getState())}
          {...mapDispatch(store.dispatch)}
          {...this.props}
        />
      );
    }
  };
};

export default {Provider, connect, connectWithHOC};
