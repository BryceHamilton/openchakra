import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import theme from '@chakra-ui/theme'
import 'react-color-picker/index.css'
import '@reach/combobox/styles.css'

import { store } from 'src/core/store'
import { ErrorBoundary as BugsnagErrorBoundary } from 'src/utils/bugsnag'
import AppErrorBoundary from 'src/components/errorBoundaries/AppErrorBoundary'
import App from './app'

const Root = () => (
  <BugsnagErrorBoundary>
    <ChakraProvider resetCSS theme={theme}>
      <AppErrorBoundary>
        <Provider store={store}>
          <React.Suspense fallback={<div>Loading... </div>}>
            <App />
          </React.Suspense>
        </Provider>
      </AppErrorBoundary>
    </ChakraProvider>
  </BugsnagErrorBoundary>
)

ReactDOM.render(<Root />, document.querySelector('#root'))
