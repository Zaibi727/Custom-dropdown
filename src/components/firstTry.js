import React, { Component } from 'react';
import './dropDown.css';

class Try extends Component {
    constructor() {
        super();
        this.state = {
            option: '',
            inputIsFocused: false
        }
    }

    handleChange = e => {
        const { value } = e.target;
        this.setState({option: value});
    }

    toggleRadio = () => {
        const { inputIsFocused } = this.state;
        this.setState({inputIsFocused: !inputIsFocused});
    }

    render() {
        const { option, inputIsFocused } = this.state;

        return (
            <div className="wrapper">
            <div className="original">
                <div className="inputWithIcon" id="radiobtn">
                    <label className="flabel">Signing Up as</label>
                    <input  value={ option }  id="radioSelect" type="text" placeholder="choose one" onFocus={ this.toggleRadio } onFocusOut={ this.toggleRadio } />
                    <i className="fa fa-angle-down" />
                </div>

                { inputIsFocused && (
                    <div className={ "BudgetRadioDd"} id={ "RadioDd"}>
                        <fieldset>
                            <div>
                                <label className="label">
                                    <div  className="dropdown-div">
                                       <h3>Agency (coming Soon...)</h3>
                                       <p>Adv, communication, event, media, pr, etc</p>
                                    </div>
                                    <input className="circle" name='option' type="radio" id="1" value="Agency" check={ option === '1' } onChange={ this.handleChange }/>
                                </label>
                            </div>

                            <div>
                                <label className="label"> 
                                   <div className="dropdown-div">
                                     <h3>Brand</h3>
                                     <p>Apparel, Accessories, eyewear, footwear, etc...</p>
                                  </div>
                                   <input className="circle" name='option' type="radio" id="2" value="Brand" check={ option === '2' } onChange={ this.handleChange }/>
                                </label>
                            </div>

                            <div>
                                <label className="label"> 
                                   <div className="dropdown-div">
                                     <h3>Local business</h3>
                                     <p>Restaurant, hotel, club, gym, beauty salon, etc...</p>
                                  </div>
                                  <input className="circle" name='option' type="radio" id="3" value="Local business" check={ option === '3' } onChange={ this.handleChange }/>
                                </label>
                            </div>

                            <div>
                                <label className="label"> 
                                   <div className="dropdown-div">
                                     <h3>Talent agency/Agent(coming soon..)</h3>
                                     <p>Management, modelling, Scouting, footwear</p>
                                  </div>
                                   <input className="circle" name='option' type="radio" id="4" value="Talent Agent" check={ option === '4' } onChange={ this.handleChange }/>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                )}
            </div>
            </div>
        )
    }
}

export default Try;