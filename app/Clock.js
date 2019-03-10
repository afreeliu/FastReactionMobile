import React, {Component} from 'react'
import moment from 'moment'

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {time: moment().format('HH:mm:ss')}
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.ticker = setInterval(()=>{
            this.tick();
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.ticker)
    }
    tick() {
        this.setState({
            time: moment().format('HH:mm:ss')
        });
    }
    handleClick(ev, time) {
        debugger;
        alert(time)
    }
    render() {
        return <h1 onClick={() => this.handleClick(ev, this.state.time)}>{this.state.time}</h1>
    }

}
export default Clock