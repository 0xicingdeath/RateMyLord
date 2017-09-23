import NextHead from "next/head";
import { string } from "prop-types";
import firebase from 'firebase'

const defaultDescription = "";
const defaultOGURL = "";
const defaultOGImage = "";

class Head extends React.Component {

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCrJH1gsSpVSpipBiX2b4pD9FiWyuCH2bo",
      authDomain: "countertest-8c7c2.firebaseapp.com",
      databaseURL: "https://countertest-8c7c2.firebaseio.com",
      projectId: "countertest-8c7c2",
      storageBucket: "countertest-8c7c2.appspot.com",
      messagingSenderId: "62043164751"
    };
    try {
      firebase.initializeApp(config);
    } catch (e) {
      console.warn("Firebase already initialized...")
    }
  }

  render() {
    let props = this.props;
    return (
      <NextHead>
        <meta charset="UTF-8" />
        <title>{props.title || ""}</title>
        <meta
          name="description"
          content={props.description || defaultDescription}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
        <link rel="apple-touch-icon" href="/static/touch-icon.png" />
        <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
        <link rel="icon" href="/static/favicon.ico" />
        <meta property="og:url" content={props.url || defaultOGURL} />
        <meta property="og:title" content={props.title || ""} />
        <meta
          property="og:description"
          content={props.description || defaultDescription}
        />
        <meta name="twitter:site" content={props.url || defaultOGURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* bootstrap */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
        />
      </NextHead>
    );
  }
}

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
