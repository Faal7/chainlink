import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import theme from '../gui/src/theme'

const customTheme = createMuiTheme(theme)

// import './typography/index'
// import './buttons/index'
// import './cards/index'
// import './custom/index'

storiesOf('Welcome', module)
  .addDecorator(muiTheme([customTheme]))
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
