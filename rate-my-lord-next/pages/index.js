import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import { initializeApp } from '../components/database'
import { Button } from 'react-bootstrap'

import CounterExample from '../components/CounterExample'

initializeApp();

export default () => (
  <div>
    <Head title="Home" />
    <div>
      <CounterExample />
    </div>
  </div>
)
