import React from 'react';
import { ChromePicker } from 'react-color'
// http://casesandberg.github.io/react-color/
class ButtonExample extends React.Component {
    state = {
        displayColorPicker: false,
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }
        const myVariable = false//如果你想渲染 false、true、null、undefined 等值，你需要先将它们转换为字符串
        return (
            <div>
                <div>
                    My JavaScript variable is {myVariable}.
                    My JavaScript variable is {String(myVariable)}.
                </div>
                <button onClick={this.handleClick}>Pick Color</button>
                { this.state.displayColorPicker ?
                    <div style={popover}>
                        <div style={cover} onClick={this.handleClose} />
                        <ChromePicker />
                    </div>
                    : null}
            </div>
        )
    }
}

export default ButtonExample