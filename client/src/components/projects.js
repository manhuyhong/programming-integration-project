import React, { Component } from 'react';

// Style
import 'bootstrap/dist/css/bootstrap.css';

export default class Projects extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            projs: [],
            DataIsLoaded: false
        };
    }

    componentDidMount()
    {
        // const username = window.localStorage.getItem('username');

        // TODO Change "example" into username, uncomment the above line
        fetch("http://localhost:3005/all-projects/" + "example")
            .then((res) => res.json())
            .then((json) =>
            {
                this.setState({
                    projs: json,
                    DataIsLoaded: true
                });
            })
    }

    render()
    {
        const { DataIsLoaded, projs } = this.state;
        if (!DataIsLoaded)
            return (
                <div>
                    <h1> Please wait some time.... </h1>
                </div>
            );

        return (
            <>
                <div className="page-container">
                    <div className="box-project">
                        <div className="project" id="project-1">
                            <div className="project-title">
                                <div className="project-name">
                                    <p>DALAT TOUR</p> {/* data */}
                                </div>

                                <div className="project-target">
                                    <p>
                                        Target: <span className="project-target-amount">10,000,000 ₫</span>
                                        {/* put data into span tag */}
                                    </p>
                                </div>
                            </div>

                            <div className="project-detail">
                                <div className="header">
                                    <div className="current">
                                        <p>
                                            Current total amount: <span className="current-amount">8,000,000 ₫</span>
                                            {/* put data into span tag */}
                                        </p>
                                    </div>
                                    <div className="icon icon-add-cont" onClick={this.openFormCont}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/3634/3634526.png" alt='icon' />
                                    </div>
                                    <div className="btn" onClick={this.openFormMem}>
                                        <button className="add-mem">+ MEMBER</button>
                                    </div>
                                </div>

                                <div className="member-contribution">
                                    <div className="contribution-details">
                                        <p className="date">05-Jan-23</p> {/* data */}
                                        <p className="username">@username1</p> {/* data */}
                                        <p className="amount">+ 5,000,000 ₫</p> {/* data */}
                                    </div>
                                    <div className="contribution-details">
                                        <p className="date">05-Jan-23</p> {/* data */}
                                        <p className="username">@username2</p> {/* data */}
                                        <p className="amount">+ 2,000,000 ₫</p> {/* data */}
                                    </div>
                                    <div className="contribution-details">
                                        <p className="date">04-Jan-23</p> {/* data */}
                                        <p className="username">@username1</p> {/* data */}
                                        <p className="amount">+ 500,000 ₫</p> {/* data */}
                                    </div>
                                    <div className="contribution-details">
                                        <p className="date">03-Jan-23</p> {/* data */}
                                        <p className="username">@username2</p> {/* data */}
                                        <p className="amount">+ 500,000 ₫</p> {/* data */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="project" id="project-2">
                            <div className="project-title">
                                <div className="project-name">
                                    <p>CHOI TET</p> {/* data */}
                                </div>

                                <div className="project-target">
                                    <p>
                                        Target: <span className="project-target-amount">5,000,000 ₫</span>
                                        {/* put data into span tag */}
                                    </p>
                                </div>
                            </div>

                            <div className="project-detail">
                                <div className="header">
                                    <div className="current">
                                        <p>
                                            Current total amount: <span className="current-amount">800,000 ₫</span>
                                            {/* put data into span tag */}
                                        </p>
                                    </div>

                                    <div className="icon icon-add-cont" onClick={this.openFormCont}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/3634/3634526.png" alt='icon' />
                                    </div>
                                    <div className="btn" onClick={this.openFormMem}>
                                        <button className="add-mem">+ MEMBER</button>
                                    </div>
                                </div>

                                <div className="member-contribution">
                                    <div className="contribution-details">
                                        <p className="date">07-Jan-23</p> {/* data */}
                                        <p className="username">@username1</p> {/* data */}
                                        <p className="amount">+ 150,000 ₫</p> {/* data */}
                                    </div>

                                    <div className="contribution-details">
                                        <p className="date">07-Jan-23</p> {/* data */}
                                        <p className="username">@username2</p> {/* data */}
                                        <p className="amount">+ 200,000 ₫</p> {/* data */}
                                    </div>

                                    <div className="contribution-details">
                                        <p className="date">06-Jan-23</p> {/* data */}
                                        <p className="username">@username1</p> {/* data */}
                                        <p className="amount">+ 300,000 ₫</p> {/* data */}
                                    </div>

                                    <div className="contribution-details">
                                        <p className="date">06-Jan-23</p> {/* data */}
                                        <p className="username">@username2</p> {/* data */}
                                        <p className="amount">+ 150,000 ₫</p> {/* data */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overlay" />
                <div className="form-popup" id="form-add-trans">
                    <form action="/" className="form-container">
                        <div className="form-title">Add transaction</div>

                        <div className="form-input amount">
                            <p>Amount</p>
                            <input type="number" placeholder="0" />
                        </div>

                        <div className="form-input categories">
                            <p>Category</p>
                            <select name="categories" id="form-categories">
                                <option value="All">All</option>
                                <option value="_1">Category_1</option>
                                <option value="_2">Category_2</option>
                                <option value="_3">Category_3</option>
                            </select>
                        </div>

                        <div className="form-input date">
                            <p>Date</p>
                            <input type="date" />
                        </div>

                        <div className="form-input note">
                            <p>Note</p>
                            <input type="text" autoComplete="true" />
                        </div>

                        <button className="btn save">SAVE</button>
                        <button className="btn cancel cancel-trans" onClick={this.closeFormTrans}>
                            CANCEL
                        </button>
                    </form>
                </div>

                <div className="form-popup" id="form-add-cont">
                    <form action="/" className="form-container">
                        <div className="form-title">Add contribution</div>
                        <div className="form-input date">
                            <p className="label">Date</p>
                            <p className="value" id="form-input-date" />
                        </div>
                        <div className="form-input amount">
                            <p className="label">Amount</p>
                            <input type="number" placeholder="0" />
                        </div>
                        <button className="btn save save-cont">SAVE</button>
                        <button className="btn cancel cancel-cont" onClick={this.closeFormCont}>
                            CANCEL
                        </button>
                    </form>
                </div>

                <div className="form-popup" id="form-add-mem">
                    <form action="/" className="form-container">
                        <div className="form-title">
                            <p>Project Members</p>
                            <div className="icon" onClick={this.closeFormMem}>
                                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" alt='icon' />
                            </div>
                        </div>

                        <div className="form-subtitle">
                            <p>TOTAL CONTRIBUTION</p>
                        </div>

                        <div className="project-members">
                            {/* data (loop) */}
                            <div className="member-contribution-details">
                                <div className="icon delete">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3964/3964013.png" alt='icon' />
                                </div>

                                <p className="username">@username1</p> {/* data */}
                                <p className="amount">+ 5,500,000 ₫</p> {/* data */}
                            </div>

                            <div className="member-contribution-details">
                                <div className="icon delete">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3964/3964013.png" alt='icon' />
                                </div>

                                <p className="username">@username2</p> {/* data */}
                                <p className="amount">+ 2,500,000 ₫</p> {/* data */}
                            </div>
                        </div>

                        <div className="new-member">
                            <div className="icon add">
                                <img src="https://cdn-icons-png.flaticon.com/512/4202/4202259.png" alt='icon' />
                            </div>

                            <input className="username" type="text" placeholder="Enter username" />
                            <p className="amount">0 ₫</p>
                        </div>

                        <button className="btn save save-cont">SAVE</button>
                    </form>
                </div>

                <div className="form-popup" id="form-add-proj">
                    <form action="/" className="form-container">
                        <div className="form-title">Add Project</div>

                        <div className="form-input name">
                            <p>Name</p>
                            <input type="text" autoComplete="true" />
                        </div>

                        <div className="form-input target">
                            <p>Target</p>
                            <input type="number" placeholder="0" />
                        </div>

                        <div className="form-input date">
                            <p>Start date</p>
                            <input type="date" />
                        </div>

                        <div className="form-input date">
                            <p>End date</p>
                            <input type="date" />
                        </div>

                        <button className="btn save">SAVE</button>
                        <button className="btn cancel cancel-proj" onClick={this.closeFormProj}>
                            CANCEL
                        </button>
                    </form>
                </div>
            </>
        )
    }
}