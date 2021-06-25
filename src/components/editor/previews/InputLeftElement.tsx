import React from 'react'
import { useInteractive } from 'src/hooks/useInteractive'
import { useDropComponent } from 'src/hooks/useDropComponent'
import ComponentPreview from 'src/components/editor/ComponentPreview'
import { InputLeftElement } from '@chakra-ui/react'

export const InputLeftElementPreview: React.FC<{ component: IComponent }> = ({
  component,
}) => {
  const { drop, isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <InputLeftElement top="10px" right="10px" {...props} ref={drop(ref)}>
      {component.children.map((key: string) => (
        <ComponentPreview componentName={key} />
      ))}
    </InputLeftElement>
  )
}
