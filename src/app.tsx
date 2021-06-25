import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { Global } from '@emotion/react'
// import Metadata from '~components/Metadata'
import useShortcuts from 'src/hooks/useShortcuts'
import Header from 'src/components/Header'
import Sidebar from 'src/components/sidebar/Sidebar'
import EditorErrorBoundary from 'src/components/errorBoundaries/EditorErrorBoundary'
import Editor from 'src/components/editor/Editor'
import { InspectorProvider } from 'src/contexts/inspector-context'
import Inspector from 'src/components/inspector/Inspector'

const App = () => {
  useShortcuts()

  return (
    <>
      <Global
        styles={() => ({
          html: { minWidth: '860px', backgroundColor: '#1a202c' },
        })}
      />
      <Header />
      <DndProvider backend={Backend}>
        <Flex h="calc(100vh - 3rem)">
          <Sidebar />
          <EditorErrorBoundary>
            <Box bg="white" flex={1} position="relative">
              <Editor />
            </Box>
          </EditorErrorBoundary>

          <Box
            maxH="calc(100vh - 3rem)"
            flex="0 0 15rem"
            bg="#f7fafc"
            overflowY="auto"
            overflowX="visible"
            borderLeft="1px solid #cad5de"
          >
            <InspectorProvider>
              <Inspector />
            </InspectorProvider>
          </Box>
        </Flex>
      </DndProvider>
    </>
  )
}

export default App
