import React, {Component} from 'react';

class GridItem extends Component {
    render() {
        return (
            <div className="grid-item" onClick={() => this.props.onClick()}>
                {this.props.value || "--"}
            </div>
        );
    }
}

export default GridItem;
