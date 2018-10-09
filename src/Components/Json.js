import React from 'react';

class Json extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  render() {
    const toggle = () => this.setState({
      expanded: !this.state.expanded,
    })

    const repr = JSON.stringify(this.props.data, null, 2)

    if (this.state.expanded) {
      return (
        <div>
          <button onClick={toggle}>Hide JSON!</button>
          <pre>{repr}</pre>
        </div>
      )
    } else {
      return <button onClick={toggle}>Show JSON!</button>
    }
  }
}

export default Json
