import React from 'react'

import { Card, CardRibbon, Colors, Grid, Variants, variants } from '../../index'
import { StyledCardRibbonProps } from '../../components/Card/types'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
    color: {
      control: 'color'
    }
  },
}

const VariantsTemplate = (props: any) => (
  <Grid p={'32px'} gridTemplateColumns={'repeat(3, 300px)'} gridGap={'16px'}>
    {
      Object.values(variants).map(v => (
        <Card
          width={'300px'}
          height={'128px'}
          variant={v}
          key={v}
          color={'white'}
          justifyContent={'center'}
          alignItems={'center'}
          {...props}
        >
          Variant: {v}
        </Card>
      ))
    }
  </Grid>
)

const PlainCardTemplate = (props: any) => (
  <Grid p={'32px'} gridTemplateColumns={'repeat(3, 300px)'} gridGap={'16px'}>
    {
      Object.values(variants).map(v => (
        <Card
          width={'300px'}
          height={'128px'}
          variant={v}
          key={v}
          justifyContent={'center'}
          alignItems={'center'}
          color={'white'}
          plain
          {...props}
        >
          Plain & Variant: {v}
        </Card>
      ))
    }
  </Grid>
)

const CardWithRibbonTemplate = (props: any) => {
  const CardWithRibbonByVariant = ({ variant, position }: Partial<StyledCardRibbonProps>) => (
    <Card
      width={'300px'}
      height={'188px'}
      justifyContent={'center'}
      alignItems={'center'}
      color={'white'}
      ribbon={<CardRibbon text={'Ribbon'} variant={variant} position={position} />}
      {...props}
    >
      Card
    </Card>
  )

  return (
    <Grid p={'32px'} gridTemplateColumns={'repeat(3, 300px)'} gridGap={'16px'}>
      <CardWithRibbonByVariant variant={'primary'} />
      <CardWithRibbonByVariant variant={'secondary'} />
      <CardWithRibbonByVariant variant={'tertiary'} />
      <CardWithRibbonByVariant variant={'danger'} />
      <CardWithRibbonByVariant variant={'success'} />
      <CardWithRibbonByVariant variant={'warning'} />

      <CardWithRibbonByVariant variant={'primary'} position={'topLeft'} />
      <CardWithRibbonByVariant variant={'secondary'} position={'topLeft'} />
      <CardWithRibbonByVariant variant={'tertiary'} position={'topLeft'} />
      <CardWithRibbonByVariant variant={'danger'} position={'topLeft'} />
      <CardWithRibbonByVariant variant={'success'} position={'topLeft'} />
      <CardWithRibbonByVariant variant={'warning'} position={'topLeft'} />
    </Grid>
  )
}

const ActiveOnHoverTemplate = (props: any) => (
  <Grid p={'32px'} gridTemplateColumns={'repeat(3, 300px)'} gridGap={'16px'}>
    {
      Object.values(variants).map(v => (
        <Card
          width={'300px'}
          height={'128px'}
          variant={v}
          key={v}
          justifyContent={'center'}
          alignItems={'center'}
          color={'white'}
          activeOnHover
          {...props}
        >
          Active on Hover & <br />
          Variant: {v}
        </Card>
      ))
    }
    {
      Object.values(variants).map(v => (
        <Card
          width={'300px'}
          height={'128px'}
          variant={v}
          activeVariant={'primary'}
          key={v}
          justifyContent={'center'}
          alignItems={'center'}
          color={'white'}
          activeOnHover
          {...props}
        >
          Active on Hover & <br />
          Variant: {v} & <br />
          Active Variant: primary
        </Card>
      ))
    }
  </Grid>
)

export const _Variants = VariantsTemplate.bind({})
export const PlainCard = PlainCardTemplate.bind({})
export const CardWithRibbon = CardWithRibbonTemplate.bind({})
export const ActiveOnHover = ActiveOnHoverTemplate.bind({})
