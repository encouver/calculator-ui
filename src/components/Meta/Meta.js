import { jsx as _jsx } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import { title as appTitle, defaultMetaTags } from '@/config';
function Meta({ description = defaultMetaTags.description, meta = [], title, image = defaultMetaTags.image, }) {
    const pageTitle = `${appTitle}${title ? ' | ' + title : ''}`;
    return (_jsx(Helmet, { title: pageTitle, meta: [
            {
                name: 'description',
                content: description,
            },
            {
                property: 'og:title',
                content: pageTitle,
            },
            {
                property: 'og:description',
                content: description,
            },
            {
                property: 'og:type',
                content: 'website',
            },
            {
                property: 'og:image',
                content: image,
            },
            {
                name: 'twitter:card',
                content: 'summary',
            },
            {
                name: 'twitter:title',
                content: pageTitle,
            },
            {
                name: 'twitter:description',
                content: description,
            },
        ].concat(meta) }));
}
export default Meta;
