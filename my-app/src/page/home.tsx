import React from 'react'
import { Link, NavLink } from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            {/* <ul>
            <li><a><NavLink to={`/bai2_5`}>Bài 2.5</NavLink></a></li>
            <li><a><NavLink to={`/bai2_7`}>Bài 2.7</NavLink></a></li>
            <li><a><NavLink to={`/bai2_8`}>Bài 2.8</NavLink></a></li>
            <li><a><NavLink to={`/bai2_10`}>Bài 2.10</NavLink></a></li>

        </ul> */}

            <div>
                <input className="dark-light" type="checkbox" id="dark-light" name="dark-light" />
                {/* <label htmlFor="dark-light" /> */}
                <div className="light-back" />
                <a href="https://front.codes/" className="logo" target="_blank">
                    {/* <img src="https://assets.codepen.io/1462889/fcy.png" /> */}
                    <h1>Bài tập ReactJS_F8</h1>
                </a>
                <div className="flex">
                    <div className="sec-center">
                        <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
                        <label className="for-dropdown" htmlFor="dropdown">Bài 2 <i className="uil uil-arrow-down" /></label>
                        <div className="section-dropdown">
                            <NavLink to={`/bai2_5`}>Bài 2.5</NavLink>
                            <NavLink to={`/bai2_7`}>Bài 2.7</NavLink>
                            <NavLink to={`/Bai2_8`}>Bài 2.8</NavLink>
                            <NavLink to={`/bai2_10`} >Bài 2.10</NavLink>
                        </div>
                    </div>
                    <div className="sec-center">
                        <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
                        <label className="for-dropdown" htmlFor="dropdown">Bài 3 <i className="uil uil-arrow-down" /></label>
                        <div className="section-dropdown1">
                            <NavLink to={`/bai3_17`} >Bài 3.17</NavLink>

                        </div>
                    </div>
                    <div className="sec-center">
                        <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
                        <label className="for-dropdown" htmlFor="dropdown">Bài 4 <i className="uil uil-arrow-down" /></label>
                        <div className="section-dropdown1">
                            <NavLink to={`/bai4_27`} >Bài 4.27</NavLink>

                        </div>
                    </div>
                    <div className="sec-center">
                        <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
                        <label className="for-dropdown" htmlFor="dropdown">Hook<i className="uil uil-arrow-down" /></label>
                        <div className="section-dropdown1">
                            <NavLink to={`/baiUseState`} >useState</NavLink>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Home