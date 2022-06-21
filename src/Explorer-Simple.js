import * as React from 'react';

import ContentExplorer from 'box-ui-elements/es/elements/content-explorer';
import messages from 'box-ui-elements/i18n/en-US';


// Importing css related to the content explorer. More can be seen under the dist folder.
import 'box-ui-elements/dist/explorer.css';
import './Explorer.css'

class ExplorerSimple extends React.Component {

    render() {
        return (
            <div className='content'>
                <div className='nav-header'>
                    <h2>Explorer Simple</h2>
                </div>
                <ContentExplorer
                    token={this.props.token}
                    language={'en-US'}
                    messages={messages}
                />
            </div>
        );
    }
}

export default ExplorerSimple;
