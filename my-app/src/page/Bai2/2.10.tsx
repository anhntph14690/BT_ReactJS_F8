import React from 'react'

type Props = {}

const Bai2_10 = (props: Props) => {
    //Spread operator

    //vd1:
    // var array1 = ['Js', 'Ruby', 'PHP'];
    // var array2 = ['ReactJS', 'C++'];
    // var array3 = [...array1, ...array2];
    // console.log(array3)

    //vd2:
    // var object1 = {
    //     name: 'Js'
    // };
    // var object2 = {
    //     price: 1000
    // };
    // var object3 = {
    //     ...object1,
    //     ...object2
    // }
    // console.log(object3)

    //vd3:
    var array = ['JS', 'PHP', 'Ruby'];
    function logger(...rest: any) {
        for (var i = 0; i < rest.length; i++) {
            console.log(rest[i])
        }
    }
    logger(...array)

  return (
    <div>Vd:2.10</div>
  )
}

export default Bai2_10