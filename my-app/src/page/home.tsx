import React from 'react'
import { Link, NavLink } from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <ul>
            <li><a><NavLink to={`/bai2_5`}>Bài 2.5</NavLink></a></li>
            <li><a><NavLink to={`/bai2_7`}>Bài 2.7</NavLink></a></li>

        </ul>
    </div>
  )
}

export default Home