import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import './timer.less';

class Timer extends Component {

    
    state = {
        displayTime: ' Start',
        timeNum: 0,
        count: 0,
        intervalId:null,
    };

    start() {
        this.setState({
            displayTime: this.state.timeNum + ' Seconds'
        },

        )

        this.state.intervalId = setInterval(this.counter.bind(this), 1000)

    }

    counter() {
        console.log('@')
        if (this.state.count > 0) {
            this.setState({
                displayTime: (this.state.count--) + ' Seconds'
            })
        } else {
            clearInterval(this.state.intervalId)
            this.setState({
                displayTime: 'End'
            })
        }
    }

    timeChange(e) {
        this.setState({
            timeNum: e.target.value,
            count: e.target.value,
        })
    }

    render() {
        return (
            <div className='timer_div'>
                <h1>在线倒计时器</h1>
                <div className='timer_timeset_flex'>
                    <div className='timer_timeset_div'>
                        <label className='timer_timeset_label' htmlFor='timeInput'>设置时间</label>
                        <input onChange={this.timeChange.bind(this)} value={this.state.timeNum} className='timer_timeset_input' id="timeInput" />
                    </div>
                    <input className='timer_timeset_display_time' readOnly value={this.state.displayTime} />
                </div>
                <br></br>
                <input onClick={this.start.bind(this)} className='timer_timeset_start' type='button' value='start' />
                <div className='timer_timeset_LINK'>
                    <Link className="div_nav_link" to='/'>回到主页</Link>
                </div>
            </div>
        );
    }
}

export default Timer;
