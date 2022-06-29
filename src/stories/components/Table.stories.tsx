import React from 'react'
import { Box, ColumnsType, Table, Text } from '../../components'

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {},
}

type DataType = {
  name: string
  age: number
  address: number
  key: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    minWidth: '120px',
    align: 'center',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    minWidth: '80px',
    align: 'center'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    align: 'center'
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    render: value => (<Text color={'green'}>{value}</Text>),
    width: 100,
    align: 'center'
  },
  {
    title: 'Birthday',
    dataIndex: 'birthday',
    key: 'birthday',
    width: 100,
    align: 'center'
  },
  {
    title: 'Operations',
    dataIndex: '',
    key: 'operations',
    width: 150,
    render: () => <a href="#">Delete</a>,
    align: 'center'
  },
]

const data = [
  { name: 'Jack', age: 28, address: 'some where', key: '1', phone: '123123123', birthday: '2000/01/01' },
  { name: 'Rose', age: 36, address: 'some where', key: '2', phone: '123123123', birthday: '2000/01/01' },
  { name: 'Rose', age: 123, address: 'some where', key: '3', phone: '123123123', birthday: '2000/01/01' },
  { name: 'Rose', age: 234, address: 'some where', key: '4', phone: '123123123', birthday: '2000/01/01' },
  { name: 'Rose', age: 33456, address: 'some where', key: '5', phone: '123123123', birthday: '2000/01/01' },
  { name: 'Rose', age: 456, address: 'some where', key: '6', phone: '123123123', birthday: '2000/01/01' },
  { name: 'Rose', age: 567, address: 'some where', key: '7', phone: '123123123', birthday: '2000/01/01' },
  { name: 'Rose', age: 678, address: 'some where', key: '8', phone: '123123123', birthday: '2000/01/01' },
  { name: 'Rose', age: 789, address: 'some where', key: '9', phone: '123123123', birthday: '2000/01/01' },
]

export const Default = () => {
  return (
    <Box p={'32px'} width={'800px'} border={'1px solid red'}>
      <Table columns={columns as any} data={data} />
    </Box>
  )
}

export const CustomRowAndHeadStyle = () => {
  return (
    <Box p={'32px'} width={'800px'} border={'1px solid red'}>
      <Table
        columns={columns as any}
        data={data}
        rowStyle={{ height: '48px', color: 'pink' }}
        headStyle={{ color: 'orange' }}
      />
    </Box>
  )
}

export const CustomStripe = () => {
  return (
    <Box p={'32px'} width={'800px'} border={'1px solid red'}>
      <Table
        columns={columns as any}
        data={data}
        rowStyle={{ background: ['#371B58', '#4C3575', '#5B4B8A', '#7858A6'] }}
      />
    </Box>
  )
}


export const Responsive = () => {
  return (
    <Box p={'8px'} width={'100%'} border={'1px solid red'}>
      <Table
        columns={columns as any}
        data={data}
        rowStyle={{ background: ['#371B58', '#4C3575', '#5B4B8A', '#7858A6'] }}
      />
    </Box>
  )
}
