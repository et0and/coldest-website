import Head from 'next/head'

function Home() {
  return (
    <div>
      <Head>
        <title>Coldest website</title>
        <meta property="og:title" content="Coldest website" key="title" />
        <meta property="twitter:title" content="Coldest website"/>
        <meta name="theme-color" content="#000000" />
        <meta
          property="description"
          content="A door awaits to be opened"
        />
        <meta
          property="og:description"
          content="A door awaits to be opened"
        />
        <meta
          property="twitter:description"
          content="A door awaits to be opened"
        />
        <meta property="og:url" content="https://work.tom.so/coldest-website" />
        <meta property="og:image" content="og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="og.png"/>
      </Head>
      
      </div>
    </div>
  );
};

export default Home;
