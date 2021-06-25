import React from 'react'
import { useInteractive } from 'src/hooks/useInteractive'
import { useDropComponent } from 'src/hooks/useDropComponent'
import ComponentPreview from 'src/components/editor/ComponentPreview'
import { Alert, Box } from '@chakra-ui/react'

const AlertPreview: React.FC<IPreviewProps> = ({ component }) => {
  const acceptedTypes = [
    'AlertIcon',
    'AlertTitle',
    'AlertDescription',
  ] as ComponentType[]
  const { props, ref } = useInteractive(component, false)
  const { drop, isOver } = useDropComponent(component.id, acceptedTypes)

  let boxProps: any = {}

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <Box ref={drop(ref)} {...boxProps}>
      <Alert {...props}>
        {component.children.map((key: string) => (
          <ComponentPreview key={key} componentName={key} />
        ))}
      </Alert>
    </Box>
  )
}

export default AlertPreview
