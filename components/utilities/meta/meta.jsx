import Head from "next/head";

const Meta = (props) => {
    return (
        <Head>
            {/* pass props as title */}
            <title>{props.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={props.title} />
            <meta property="og:type" content="website" />
            <meta property="og:image" itemProp="image" content="https://www.makewayapp.com/_next/image?url=%2Fwoman-car.webp&w=750&q=75" />
            <meta property="og:description" content="Software Developer & Product Designer." />
            <meta property="og:site_name" content={props.title} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={props.title} />
            <meta name="twitter:image" content="https://twitter.com/4eug_/header_photo" />
            <meta property="og:url" content="" />
            <meta name="twitter:site" content="@4eug_" />
            <meta name="twitter:creator" content="@4eug_" />
            <meta property="twitter:description" content="Software Developer & Product Designer." />
            <meta name="description" content="Software Developer & Product Designer." />
            <link rel='shortcut icon' href='/v.png' />

        </Head>
    );
}

export default Meta;