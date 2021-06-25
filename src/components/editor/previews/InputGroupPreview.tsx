import React from 'react'
import { InputGroup, Box } from '@chakra-ui/react'
import ComponentPreview from 'src/components/editor/ComponentPreview'
import { useDropComponent } from 'src/hooks/useDropComponent'
import { useInteractive } from 'src/hooks/useInteractive'

const InputGroupPreview: React.FC<{ component: IComponent }> = ({
  component,
}) => {
  const { drop, isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)

  const boxProps: any = {}

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <Box {...boxProps} ref={drop(ref)}>
      <InputGroup {...props}>
        {component.children.map((key: string) => (
          <ComponentPreview key={key} componentName={key} />
        ))}
      </InputGroup>
    </Box>
  )
}

export default InputGroupPreview
