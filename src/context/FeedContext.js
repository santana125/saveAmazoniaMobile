import React, {createContext, Component} from 'react';

export const FeedContext = createContext();

class FeedContextProvider extends Component {
  state = {
    isGood: true,
    isBad: true, 
  }

  componentDidUpdate(){
      if(!this.state.isGood && !this.state.isBad) 
        this.setState({isGood: true})
  }

  toggleGood = () => {
    var newGood;
    if(!this.state.isBad)
      newGood = true;
    else
      newGood = !this.state.isGood;

    this.setState({isGood: newGood});
  }
  
  toggleBad = () => {
    this.setState({isBad: !this.state.isBad});
  }

  render(){
  return (
    <FeedContext.Provider value={{...this.state, toggleGood: this.toggleGood, toggleBad: this.toggleBad}}>
      {this.props.children}
    </FeedContext.Provider>

  )}
}

export default FeedContextProvider;
