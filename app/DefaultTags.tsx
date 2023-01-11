import favicon from '../public/favicon-128x128.png';

export default function DefaultTags() {
    return (
        <>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            {/* @ts-ignore */}
            <link rel="stylesheet" href="https://use.typekit.net/usx0uee.css" precedence="default" />
            <link rel="icon" type="image/png" href={favicon.src} sizes="128x128" />
        </>
    )
}