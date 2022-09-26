import React from 'react'

type Props = {}

const Bai2_7 = (props: Props) => {


    function arrToObj(arr: any) {
        return arr.reduce((innit: any, value: any) => {
          innit[value[0]] = value[1]
          return innit
       }, {}) 
    }
    
   


  return (
    <div>Bai2_7</div>
  )
}

export default Bai2_7