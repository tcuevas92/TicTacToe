import React, {Component} from 'react';

class GridItem extends Component {
    render() {
        var style = {
            height: '50px',
            width: '50px',
            border: '1px solid black',
            display: 'inline-block'
        };

        return (
            <div style={style}>
                {this.props.move ? this.props.move : ""}
            </div>
        );
    }
}

export default GridItem;
