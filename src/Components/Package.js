import React from 'react'
import Json from './Json'
import { getPackageJSON } from '../lib/api'
import DependencyList from './DependencyList';

class Package extends React.Component {
  constructor(props) {
    console.log("package", props.name, "constructed... lets fetch")
    super(props);
    this.state = {
      loaded: false,
      data: null,
    }

    getPackageJSON(this.props.name,
      (result) => this.setState({
        loaded: true,
        data: result,
      }),
      (error) => {
        // wat willen we hier doen ?
      })
  }

  render() {
    console.log("lets render package", this.props, this.state)

    if (this.state.loaded) {
      const {
        name,
        description,
        homepage,
        dependencies,
        devDependencies,
      } = this.state.data

      // toon de rest van de packageinfo
      // (title, description, homepage, dependencies...)
      // return <Json data={this.state.data} />
      return (
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <a href={homepage}>{homepage}</a>

          {dependencies &&
            <div>
              <h1>dependencies</h1>
              <DependencyList dependencies={Object.keys(dependencies)} />
            </div>}

          {devDependencies &&
            <div>
              <h1>devDependencies</h1>
              <DependencyList dependencies={Object.keys(devDependencies)} />
            </div>}

          <Json data={this.state.data} />
        </div>
      )
    } else {
      return <p>Loading...</p>
    } // nog een derde mogelijkheid ?
  }
}

export default Package
