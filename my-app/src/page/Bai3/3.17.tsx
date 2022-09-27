import React from 'react'

type Props = {}

const Bai3_17 = (props: Props) => {

  // //vd
  const h1React = React.createElement('h1', {
    title: 'hello',
    className: 'heading'
  }, 'Hello guys')
  console.log(h1React)

  //* React DOM là: 1 thư viện được ví như cầu nối giữa React và DOM


  // //bt
  // const ul = React.createElement(
  //   'ul',
  //   null,
  //   React.createElement('li', null, 'JS'),
  //   React.createElement('li', null, 'ReactJS'),

  // )
  // ReactDOM.render(ul,document.getElementById('root'))

 

  return (
    <div>3.17: * React DOM là: 1 thư viện được ví như cầu nối giữa React và DOM</div>
  )
}

export default Bai3_17