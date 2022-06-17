// Not needed unless working with non "en" locales
// import { addLocaleData } from 'react-intl';
// import enLocaleData from 'react-intl/locale-data/en';

import ContentPreview from 'box-ui-elements/es/elements/content-preview';
import messages from 'box-ui-elements/i18n/en-US';

const FILE_ID_DOC = '950283212744';

const language = 'en-US';

const Previewer = ({ token }) => (
        <ContentPreview
            hasHeader
            fileId={FILE_ID_DOC}
            token={token}
            language={language}
            messages={messages}
        />
    )


export default Previewer;