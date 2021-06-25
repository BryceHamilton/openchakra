import React from 'react'
import { useInteractive } from 'src/hooks/useInteractive'
import { useDropComponent } from 'src/hooks/useDropComponent'
import ComponentPreview from 'src/components/editor/ComponentPreview'
import { BreadcrumbItem } from '@chakra-ui/react'

const BreadcrumbItemPreview: React.FC<IPreviewProps> = ({ component }) => {
  const acceptedTypes = ['BreadcrumbLink'] as ComponentType[]
  const { props, ref } = useInteractive(component, true)
  const { drop, isOver } = useDropComponent(component.id, acceptedTypes)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <BreadcrumbItem {...props} ref={drop(ref)}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} componentName={key} />
      ))}
    </BreadcrumbItem>
  )
}

export default BreadcrumbItemPreview
