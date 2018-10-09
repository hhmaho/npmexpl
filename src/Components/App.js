import React from 'react'
import Package from './Package'

// const App = (props) => <Package name="duplexer2" />

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { package: "react" }
  }

  render() {
    const update = () => this.setState({ package: "angular" })

    return <div>
      <button onClick={update}>d</button>
      {this.state.package}

      <Package
        key={this.state.package}
        name={this.state.package} />
    </div>
  }
}

export default App;
