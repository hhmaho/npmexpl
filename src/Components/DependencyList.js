import React from 'react'

const DependencyList = ({ dependencies }) => (
  <ul>
    {
      dependencies.map(name =>
        <li key={name}>{name}</li>)
    }
  </ul>
)

export default DependencyList
