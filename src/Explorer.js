// Box Elements uses react-intl for internationalization of its text strings and dates.
// If you are not using a modern browser, you will have to polyfill parts of Intl.
// See https://github.com/formatjs/react-intl/blob/master/docs/Getting-Started.md#runtime-requirements
// for more details on how to conditionally polyfill. One approach is below.

// Polyfill Intl.PluralRules by uncommenting the following line
// import '@formatjs/intl-pluralrules/dist-es6/polyfill';
// Polyfill Intl.RelativeTimeFormat by uncommenting the following line
// import '@formatjs/intl-relativetimeformat/dist-es6/polyfill';

import * as React from 'react';

//import { IntlProvider } from 'react-intl';

// The Content Explorer element. Others can be imported similarly
import ContentExplorer from 'box-ui-elements/es/elements/content-explorer';



// Importing css related to the content explorer. More can be seen under the dist folder.
import 'box-ui-elements/dist/explorer.css';

import './Explorer.css'

class Explorer extends React.Component {
    constructor(props) {
        super(props);
        console.log('Explorer constructor Props', props);
    }

    handleOnCreate(e) { console.log('Explorer handleOnCreate', e); }
    handleOnDelete(e) { console.log('Explorer handleOnDelete', e); }
    handleOnDownload(e) { console.log('Explorer handleOnDownload', e); }
    handleOnNavigate(e) { console.log('Explorer handleOnNavigate', e); }
    handleOnPreview(e) { console.log('Explorer handleOnPreview', e); }
    handleOnRename(e) { console.log('Explorer handleOnRename', e); }
    handleOnSelect(e) { console.log('Explorer handleOnSelect', e); }
    handleOnUpload(e) { console.log('Explorer handleOnUpload', e); }
    handleOnShare(e) { console.log('Explorer handleOnShare', e); }
    handleOnSetShareAccess(e) { console.log('Explorer handleOnSetShareAccess', e); }

    render() {
        return (
            <div className='content'>
                <div className='nav-header'>
                    <h2>Explorer</h2>
                </div>
                <ContentExplorer
                    token={this.props.token}

                    language={this.props.language}
                    messages={this.props.messages}

                    logoUrl={this.props.logoUrl}

                    rootFolderId={this.props.rootFolderId}
                    currentFolderId={this.props.currentFolderId}

                    canCreateNewFolder={this.props.canCreateNewFolder}
                    canDelete={this.props.canDelete}
                    canDownload={this.props.canDownload}
                    canPreview={this.props.canPreview}
                    canRename={this.props.canRename}
                    canSetShareAccess={this.props.canSetShareAccess}
                    canShare={this.props.canShare}
                    canUpload={this.props.canUpload}

                    contentPreviewProps={this.props.contentPreviewProps}

                    contentUploadProps={this.props.contentUploadProps}

                    onCreate={this.handleOnCreate}
                    onDelete={this.handleOnDelete}
                    onDownload={this.handleOnDownload}
                    onNavigate={this.handleOnNavigate}
                    onPreview={this.handleOnPreview}
                    onRename={this.handleOnRename}
                    onSelect={this.handleOnSelect}
                    onUpload={this.handleOnUpload}
                />
            </div>
        );
    }
}

// const Explorer = (props) => (
//         <ContentExplorer
//             language='en-US'
//             messages={messages}
//             token={props.token}
//             contentPreviewProps={{
//                 contentSidebarProps: {
//                     hasActivityFeed: true,
//                     hasSkills: true,
//                     hasMetadata: true,
//                     detailsSidebarProps: {
//                         hasProperties: true,
//                         hasNotices: true,
//                         hasAccessStats: true,
//                         hasVersions: true,
//                     },
//                 },
//             }}
//         />
// );

// ------------------ OR with your own IntlProvider context -----------------
// const Main = ({ token }) => (
//     <App>
//         <IntlProvider locale="en-US" messages={messages}>
//             <ContentExplorer
//                 token={token}
//                 contentPreviewProps={{
//                     contentSidebarProps: {
//                         hasActivityFeed: true,
//                         hasSkills: true,
//                         hasMetadata: true,
//                         detailsSidebarProps: {
//                             hasProperties: true,
//                             hasNotices: true,
//                             hasAccessStats: true,
//                             hasVersions: true,
//                         },
//                     },
//                 }}
//             />
//         </IntlProvider>
//     </App>
// );

export default Explorer;
