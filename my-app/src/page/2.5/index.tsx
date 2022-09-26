import React from "react";

type Props = {};

const Bai2_5 = (props: Props) => {
  const triple = (x: number) => x * 3;
  console.log(triple(2));
  console.log(triple(3));
  console.log(triple(5));
  return <div>Bai2_5</div>;
};

export default Bai2_5;
