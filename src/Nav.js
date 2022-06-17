import React from 'react';

class Nav extends React.Component {


    render() {
        return (
            <nav>
                <div className='menu-title'>UI Elements</div>
                <div className='menu'>

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

// const Nav = () => (
//     <nav>
//         <div className='menu-title'>UI Elements</div>
//         <div className='menu'>
//             <div className='menu-item'>
//                 <a target='box' href="//docs.box.com/docs/box-content-explorer">Content Explorer</a>
//             </div>
//             <div className='menu-item'>
//                 <a target='box' href="//docs.box.com/docs/box-content-preview">Content Preview</a>
//             </div>
//             <div className='menu-item'>
//                 <a target='box' href="//docs.box.com/docs/box-content-picker">Content Picker</a>
//             </div>
//             <div className='menu-item'>
//                 <a target='box' href="//docs.box.com/docs/box-content-uploader">Content Uploader</a>
//             </div>
//             <div className='menu-item'>
//                 <a target='box' href="//docs.box.com/docs/box-content-sidebar">Content Sidebar</a>
//             </div>
//             <div className='menu-item'>
//                 <a target='box' href="//docs.box.com/docs/box-content-open-with">Content Open With</a>
//             </div>
//         </div>
//     </nav>
// );

export default Nav;
