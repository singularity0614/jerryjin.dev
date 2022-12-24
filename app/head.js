import favicon from '../public/favicon-128x128.png';

export default function Head() {
    return (
        <>            
            <title>Working In Progress</title>
            <meta name="description" content="Come back later for more!" />
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" precedence="default" href="https://use.typekit.net/usx0uee.css" />
            <link rel="icon" type="image/png" href={favicon.src} sizes="128x128" />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2596207444336931" crossOrigin="anonymous"></script>
        </>
    )
}