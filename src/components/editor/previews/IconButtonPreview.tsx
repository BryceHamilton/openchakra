import React from 'react'
import { useDropComponent } from 'src/hooks/useDropComponent'
import { useInteractive } from 'src/hooks/useInteractive'
import icons from 'src/iconsList'
import { IconButton } from '@chakra-ui/react'

interface Props {
  component: IComponent
}

const IconButtonPreview = ({ component }: Props) => {
  const { isOver } = useDropComponent(component.id)
  const {
    props: { icon, ...props },
    ref,
  } = useInteractive(component, true)

  if (isOver) {
    props.bg = 'teal.50'
  }

  if (icon) {
    if (Object.keys(icons).includes(icon)) {
      const Icon = icons[icon as keyof typeof icons]
      return <IconButton ref={ref} icon={<Icon path="" />} {...props} />
    }
    return null
  }

  return null
}

export default IconButtonPreview
