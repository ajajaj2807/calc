/* eslint-disable no-eval */

import React, { Component } from 'react'
export class calc extends Component {

    constructor() {
        super()
        this.state = {
            op : ''
        }
    }

    handleKey = (e) => {
        var news = this.state.op + e.target.innerHTML
        this.setState({
            op: news
        })    
    }

    clearpad = () => {
        this.setState({
            op: ''
        })
    }

    backKey = () => {
        var op = this.state.op
        op = op.slice(0, -1)
        this.setState({
            op
        })
    }

    showres = () => {
        var op = this.state.op
        var fres = op.replace('÷', '/')
        var res = fres.replace('x', '*')
        
        try 
        {
            if(eval(res)){
            this.setState({
                op: eval(res)
            })
            }
        }
        catch{
            this.setState({
                op: 'Error'
         })
        }
    }

    render() {
        return (
            <div className="main-w">
                <div className="display-screen"> {this.state.op || '0'} </div>
                <div className="keypad">
                    <button onClick={this.handleKey} className="key op">+</button>
                    <button onClick={this.handleKey} className="key op">-</button>
                    <button onClick={this.handleKey} className="key op">x</button>
                    <button onClick={this.handleKey} className="key op">÷</button>
                    <button onClick={this.handleKey} className="key">1</button>
                    <button onClick={this.handleKey} className="key">2</button>
                    <button onClick={this.handleKey} className="key">3</button>
                    <button onClick={this.handleKey} className="key op">(</button>
                    <button onClick={this.handleKey} className="key">4</button>
                    <button onClick={this.handleKey} className="key">5</button>
                    <button onClick={this.handleKey} className="key">6</button>
                    <button onClick={this.handleKey} className="key op">)</button>
                    <button onClick={this.handleKey} className="key">7</button>
                    <button onClick={this.handleKey} className="key">8</button>
                    <button onClick={this.handleKey} className="key">9</button>
                    <button onClick={this.backKey} className="key fun">CE</button>
                    <button onClick={this.handleKey} className="key">.</button>
                    <button onClick={this.handleKey} className="key">0</button>
                    <button onClick={this.showres} className="key res">=</button>
                    <button onClick={this.clearpad} className="key fun">C</button>
                </div>

                <style jsx>
                    {`
                    .fun{
                        color:#d84315 !important;
                    }
                    .res{
                        background: #00796b !important;
                        color:#fff !important;
                    }
                    .op{
                        color:#00796b !important;
                    }
                    .key{
                        padding:0.5em;
                        font-size: 1.6em;
                        border-radius: 22px;
                        background:#e6e6e6;
                        color:#333;
                        border:1px solid #d1d1d1;
                    }
                    .key:hover{
                        opacity: 0.8;
                    }
                    .key:active, .key:focus{
                        outline:none;
                    }
                    .keypad{
                        display:grid;
                        grid-gap: 8px;
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                    }
                    .display-screen{
                        width:100%;
                        border:0;
                        font-weight: 700;
                        margin-top:10px;
                        padding: 1em 0.2em 0.3em 0.2em;
                        font-size: 3em;
                        color:#334;
                        background:transparent;
                        text-align: right;
                        overflow-x:scroll;
                    }
                    .main-w{
                        margin-top:30px;
                        position:absolute;
                        left:50%;
                        transform: translateX(-50%);
                        width: 300px;
                        background:#f6f6f8;
                        border-radius:12px;
                        padding:0.6em;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default calc
