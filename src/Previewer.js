// Not needed unless working with non "en" locales
// import { addLocaleData } from 'react-intl';
// import enLocaleData from 'react-intl/locale-data/en';
import * as React from 'react';
import ContentPreview from 'box-ui-elements/es/elements/content-preview';
import messages from 'box-ui-elements/i18n/en-US';

const language = 'en-US';

class Previewer extends React.Component {
    constructor(props) {
        super(props);
        console.log('Previewer constructor Props', props);
    }
    render() {
        return (
            <div className='content'>
                <div className='nav-header'>
                    <h2>Previewer Simple</h2>
                </div>
                <ContentPreview
                    hasHeader={true}
                    fileId={this.props.fileId}
                    token={this.props.token}
                    language={language}
                    messages={messages}
                    showAnnotations={false}
                    contentSidebarProps={{
                        detailsSidebarProps: {
                            hasAccessStats: true,
                            hasClassification: true,
                            hasNotices: true,
                            hasProperties: true,
                            hasRetentionPolicy: true,
                            hasVersions: true,
                        },
                        hasActivityFeed: true,
                        hasMetadata: true,
                        hasSkills: true,
                        hasVersions: true,
                    }}
                />
            </div >
        );
    }
}

export default Previewer;