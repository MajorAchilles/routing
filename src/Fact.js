import React from 'react';

class Fact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    const fetchFact = async () => {
      const fetchFact = await fetch(`http://cat-fact.herokuapp.com/facts/${this.props.match.params.factId}`);
      const fact = await fetchFact.json();
      console.log(fact);
      this.setState({
        text: fact.text
      });
    }
    fetchFact();
  }

  render() {
    return (
      <div>
        <h1>Fact</h1>
        <h2>Text: {this.state.text}</h2>
      </div>
    );
  }
}
export default Fact;
