import React, { memo } from 'react'

import ButtonPanel from 'src/components/inspector/panels/components/ButtonPanel'
import BadgePanel from 'src/components/inspector/panels/components/BadgePanel'
import IconPanel from 'src/components/inspector/panels/components/IconPanel'
import ImagePanel from 'src/components/inspector/panels/components/ImagePanel'
import BoxPanel from 'src/components/inspector/panels/components/BoxPanel'
import ChildrenControl from 'src/components/inspector/controls/ChildrenControl'
import AvatarPanel from 'src/components/inspector/panels/components/AvatarPanel'
import AvatarGroupPanel from 'src/components/inspector/panels/components/AvatarGroupPanel'
import AvatarBadgePanel from 'src/components/inspector/panels/components/AvatarBadgePanel'
import CheckboxPanel from 'src/components/inspector/panels/components/CheckboxPanel'
import IconButtonPanel from 'src/components/inspector/panels/components/IconButtonPanel'
import ProgressPanel from 'src/components/inspector/panels/components/ProgressPanel'
import LinkPanel from 'src/components/inspector/panels/components/LinkPanel'
import SpinnerPanel from 'src/components/inspector/panels/components/SpinnerPanel'
import CloseButtonPanel from 'src/components/inspector/panels/components/CloseButtonPanel'
import DividerPanel from 'src/components/inspector/panels/components/DividerPanel'
import CodePanel from 'src/components/inspector/panels/components/CodePanel'
import TextareaPanel from 'src/components/inspector/panels/components/TextareaPanel'
import CircularProgressPanel from 'src/components/inspector/panels/components/CircularProgressPanel'
import HeadingPanel from 'src/components/inspector/panels/components/HeadingPanel'
import TagPanel from 'src/components/inspector/panels/components/TagPanel'
import SimpleGridPanel from 'src/components/inspector/panels/components/SimpleGridPanel'
import SwitchPanel from 'src/components/inspector/panels/components/SwitchPanel'
import AlertPanel from 'src/components/inspector/panels/components/AlertPanel'
import AlertIconPanel from 'src/components/inspector/panels/components/AlertIconPanel'
import AlertTitlePanel from 'src/components/inspector/panels/components/AlertTitlePanel'
import AlertDescriptionPanel from 'src/components/inspector/panels/components/AlertDescriptionPanel'
import FlexPanel from 'src/components/inspector/panels/styles/FlexPanel'
import StackPanel from 'src/components/inspector/panels/components/StackPanel'
import FormControlPanel from 'src/components/inspector/panels/components/FormControlPanel'
import TabsPanel from 'src/components/inspector/panels/components/TabsPanel'
import InputPanel from 'src/components/inspector/panels/components/InputPanel'
import RadioPanel from 'src/components/inspector/panels/components/RadioPanel'
import RadioGroupPanel from 'src/components/inspector/panels/components/RadioGroupPanel'
import SelectPanel from 'src/components/inspector/panels/components/SelectPanel'
import ListPanel from 'src/components/inspector/panels/components/ListPanel'
import ListItemPanel from 'src/components/inspector/panels/components/ListItemPanel'
import ListIconPanel from 'src/components/inspector/panels/components/ListIconPanel'
import AccordionItemPanel from 'src/components/inspector/panels/components/AccordionItemPanel'
import AccordionPanel from 'src/components/inspector/panels/components/AccordionPanel'
import FormLabelPanel from 'src/components/inspector/panels/components/FormLabelPanel'
import FormHelperTextPanel from 'src/components/inspector/panels/components/FormHelperTextPanel'
import FormErrorMessagePanel from 'src/components/inspector/panels/components/FormErrorMessagePanel'
import GridPanel from 'src/components/inspector/panels/components/GridPanel'
import NumberInputPanel from 'src/components/inspector/panels/components/NumberInputPanel'
import AspectRatioPanel from 'src/components/inspector/panels/components/AspectRatioPanel'
import BreadcrumbPanel from 'src/components/inspector/panels/components/BreadcrumbPanel'
import BreadcrumbItemPanel from 'src/components/inspector/panels/components/BreadcrumbItemPanel'

const Panels: React.FC<{ component: IComponent; isRoot: boolean }> = ({
  component,
  isRoot,
}) => {
  const { type } = component

  if (isRoot) {
    return null
  }

  return (
    <>
      {type === 'Button' && <ButtonPanel />}
      {type === 'Checkbox' && <CheckboxPanel />}
      {type === 'Box' && <BoxPanel />}
      {type === 'Badge' && <BadgePanel />}
      {type === 'Image' && <ImagePanel />}
      {type === 'Icon' && <IconPanel />}
      {type === 'IconButton' && <IconButtonPanel />}
      {type === 'Progress' && <ProgressPanel />}
      {type === 'Text' && <ChildrenControl />}
      {type === 'Link' && <LinkPanel />}
      {type === 'Avatar' && <AvatarPanel />}
      {type === 'AvatarGroup' && <AvatarGroupPanel />}
      {type === 'AvatarBadge' && <AvatarBadgePanel />}
      {type === 'Spinner' && <SpinnerPanel />}
      {type === 'Code' && <CodePanel />}
      {type === 'CloseButton' && <CloseButtonPanel />}
      {type === 'Divider' && <DividerPanel />}
      {type === 'Textarea' && <TextareaPanel />}
      {type === 'CircularProgress' && <CircularProgressPanel />}
      {type === 'Heading' && <HeadingPanel />}
      {type === 'SimpleGrid' && <SimpleGridPanel />}
      {type === 'Switch' && <SwitchPanel />}
      {type === 'Alert' && <AlertPanel />}
      {type === 'AlertIcon' && <AlertIconPanel />}
      {type === 'AlertTitle' && <AlertTitlePanel />}
      {type === 'AlertDescription' && <AlertDescriptionPanel />}
      {type === 'Tag' && <TagPanel />}
      {type === 'Flex' && <FlexPanel />}
      {type === 'Stack' && <StackPanel />}
      {type === 'FormControl' && <FormControlPanel />}
      {type === 'Tabs' && <TabsPanel />}
      {type === 'Input' && <InputPanel />}
      {type === 'Radio' && <RadioPanel />}
      {type === 'RadioGroup' && <RadioGroupPanel />}
      {type === 'Select' && <SelectPanel />}
      {type === 'List' && <ListPanel />}
      {type === 'ListItem' && <ListItemPanel />}
      {type === 'ListIcon' && <ListIconPanel />}
      {type === 'Accordion' && <AccordionPanel />}
      {type === 'AccordionItem' && <AccordionItemPanel />}
      {type === 'FormLabel' && <FormLabelPanel />}
      {type === 'FormHelperText' && <FormHelperTextPanel />}
      {type === 'FormErrorMessage' && <FormErrorMessagePanel />}
      {type === 'InputRightAddon' && <ChildrenControl />}
      {type === 'InputLeftAddon' && <ChildrenControl />}
      {type === 'Grid' && <GridPanel />}
      {type === 'NumberInput' && <NumberInputPanel />}
      {type === 'AspectRatio' && <AspectRatioPanel />}
      {type === 'Breadcrumb' && <BreadcrumbPanel />}
      {type === 'BreadcrumbItem' && <BreadcrumbItemPanel />}
      {type === 'BreadcrumbLink' && <LinkPanel />}
    </>
  )
}

export default memo(Panels)
