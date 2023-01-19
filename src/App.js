import React from 'react';

// We ship multiple language bundles, importing en-US below.
import messages from 'box-ui-elements/i18n/en-US';

import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import './app.scss';
import NotImplemented from './NotImplemented';
import Explorer from './Explorer';
import ExplorerSimple from './Explorer-Simple';
import Previewer from './Previewer';
import PreviewerAnnotations from './PreviewerAnnotations';

const access_token = 'sI82FybSpE6oX7Veypq8kCG4Xb8gkl84';
const FILE_ID_DOC = '994851508870';

const sideBarProps = {
    hasSkills: true,
    hasMetadata: true,
    detailsSidebarProps: {
        hasProperties: true,
    },
    hasActivityFeed: true,
};

const previewerPropsAnnot = {
    logoUrl: 'box',
    contentSidebarProps: sideBarProps,
    token: access_token,
    fileId: FILE_ID_DOC,

    enableAnnotationsDiscoverability: true,
    enableAnnotationsImageDiscoverability: true,

    showAnnotations: true,
    showAnnotationsControls: true,
    showAnnotationsDrawingCreate: true,
}

const previewerProps = {
    logoUrl: 'box',
    contentSidebarProps: sideBarProps,
    token: access_token,
    fileId: FILE_ID_DOC,
    showAnnotations: true,
}

const explorerProps = {
    token: access_token,

    language: 'en-US',
    messages: messages,

    rootFolderId: '0',
    currentFolderId: '0',

    logoUrl: 'box',

    canCreateNewFolder: true,
    canDelete: true,
    canDownload: true,
    canPreview: true,
    canRename: true,
    canSetShareAccess: true,
    canShare: true,
    canUpload: true,

    contentPreviewProps: previewerProps,
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: access_token,
            currSel: 'ExplorerSimple',
        };
    }

    handleClick(e) {
        this.setState({ currSel: e.target.id });
    }

    renderComponent(component) {
        if (component === 'ExplorerSimple') {
            return <ExplorerSimple {...explorerProps} />;
        }
        if (component === 'Explorer') {
            return <Explorer {...explorerProps} />;
        }
        if (component === 'PreviewerSimple') {
            return <Previewer {...previewerProps} />;
        }
        if (component === 'PreviewerAnnotations') {
            return <PreviewerAnnotations {...previewerPropsAnnot} />;
        }
        else {
            return <NotImplemented />;
        }
    }

    render() {
        return (
            <div className="app">
                <Header />
                <div className='body'>
                    {this.renderComponent(this.state.currSel)}
                    <Nav
                        currSelection={this.state.currSel}
                        handleClick={this.handleClick.bind(this)}
                    />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
