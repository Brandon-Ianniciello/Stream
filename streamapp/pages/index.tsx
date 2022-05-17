import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import VideoUpload from "../components/VideoUpload";
import styles from "../styles/Home.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, AppBar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Private movies</title>
        <meta name="Where I upload my movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.wrapper}>
        <AppBar className={classes.appBar} position="static">
          <Typography variant="h2" align="center">UPLOAD</Typography>
        </AppBar>
      </div>
      

      <form action="http://localhost:3000/Entertainment">
        <button>Entertainment</button>
      </form>

      <main className={styles.main}>
        <VideoUpload />
      </main>
    </div>
  );
};

export default Home;
