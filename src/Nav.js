import React from 'react';

class Nav extends React.Component {


    render() {
        return (
            <nav>
                <div className='menu-title'>UI Elements</div>
                <div className='menu'>

                    <div className='menu-item' id='ExplorerSimple' onClick={this.props.handleClick}>Explorer Simple</div>
                    
                    <div className='menu-item' id='Explorer' onClick={this.props.handleClick}>Explorer</div>
{/* 
                    <div className='menu-item' id='ExplorerExamples' onClick={this.props.handleClick}>Explorer Example</div>

                    <div className='menu-item' id='Previewer' onClick={this.props.handleClick}>Previewer</div>

                    <div className='menu-item' id='Picker'  onClick={this.props.handleClick}>Picker</div>

                    <div className='menu-item' id='Uploader'  onClick={this.props.handleClick}>Uploader</div>

                    <div className='menu-item' id='Sidebar'  onClick={this.props.handleClick}>Sidebar</div>

                    <div className='menu-item' id='OpenWith'  onClick={this.props.handleClick}>Open With</div>
 */}
                </div>
            </nav>
        );
    }
}

export default Nav;
