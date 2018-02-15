import React from 'react'

import { storiesOf } from '@storybook/react'
import HelloWorld from '../src/components/HelloWorld'

storiesOf('Test Story', module).add('Hello World', () => (
  <HelloWorld message="Hello World!!" />
))
