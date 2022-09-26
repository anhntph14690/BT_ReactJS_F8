import React from 'react'

type Props = {}

const Bai2_8 = (props: Props) => {
    const arr =['js', 'php', 'react'];
    var [a, b, ...rest] = arr;
    console.log(a, b)
    console.log(rest)



  return (
    <div>VD: 2.8</div>
  )
}

export default Bai2_8