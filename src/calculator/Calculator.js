import React, { Component, Fragment } from 'react';
import './calculator.less'
import Button from './button/button';

class Calculator extends Component {


    state = {
        str: '',
        index: 0,
        buttons: ['+', '-', 'x',
            '7', '8', '9',
            '4', '5', '6',
            '1', '2', '3',
            '0', 'C', '='],
    };


    handleClick = (val) => {
        this.setState({
            str: this.state.str.concat(val),
            index: this.state.index + 1
        },
            () => {
                if (this.state.str.length > 4) {
                    this.clear();
                }
                if (this.state.str.length == 4) {
                    if (this.state.str.match(/\d+\+\d+\=/g) != null) {
                        const num1 = this.state.str.substr(0, 1);
                        const num2 = this.state.str.substr(2, 1);
                        this.calcResult(Number(num1) + Number(num2))
                    } else
                        if (this.state.str.match(/\d+\-\d+\=/g) != null) {
                            const num1 = this.state.str.substr(0, 1);
                            const num2 = this.state.str.substr(2, 1);
                            this.calcResult(Number(num1) - Number(num2))
                        } else
                            if (this.state.str.match(/\d+\x\d+\=/g) != null) {
                                const num1 = this.state.str.substr(0, 1);
                                const num2 = this.state.str.substr(2, 1);
                                this.calcResult(Number(num1) * Number(num2))
                            } else {
                                this.clear();
                            }
                }
            }
        )
    }

    

    clear() {
        this.setState({
            str: '',
            index: 0,
        })
    }

    calcResult(val) {
        this.setState({
            str: val,
            index: 0,
        })
    }


    render() {
        return (
            <div className="calculator_fragment">
                <h1>在线计算器</h1>
                <div className="calculator_container">
                    <input className="calculator_input" defaultValue={this.state.str}></input>
                    <div className="calculator_button">
                        {
                            this.state.buttons.map(
                                val => {
                                    if (val == 'C') {
                                        return  <input
                                        key={val}
                                        className="button"
                                        value={val}
                                        onClick={()=> this.clear()}
                                        readOnly
                                    />
                                    }
                                    return <Button
                                        key={val}
                                        handleClick={this.handleClick}
                                        value={val}></Button>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
