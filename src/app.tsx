import * as React from 'react'
import { Layout } from './components/Layout';
import { Hello } from './components/Hello';

export class App extends React.Component<null, null> {
  render() {
    return <Layout>
        <Hello compiler="Typescript" framework="REACT" />
        <p>Testing children</p>
      </Layout>
  }
}
