import React from 'react'
import { useDropComponent } from 'src/hooks/useDropComponent'
import { useInteractive } from 'src/hooks/useInteractive'
import { Button } from '@chakra-ui/react'
import icons from 'src/iconsList'

interface Props {
  component: IComponent
}

const ButtonPreview = ({ component }: Props) => {
  const { isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)

  if (isOver) {
    props.bg = 'teal.50'
  }

  if (props.leftIcon) {
    if (Object.keys(icons).includes(props.leftIcon)) {
      const Icon = icons[props.leftIcon as keyof typeof icons]
      props.leftIcon = <Icon path="" />
    } else {
      props.leftIcon = undefined
    }
  }

  if (props.rightIcon) {
    if (Object.keys(icons).includes(props.rightIcon)) {
      const Icon = icons[props.rightIcon as keyof typeof icons]
      props.rightIcon = <Icon path="" />
    } else {
      props.rightIcon = undefined
    }
  }

  return <Button ref={ref} {...props} />
}

export default ButtonPreview
