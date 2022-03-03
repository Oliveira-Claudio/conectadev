// import './style.css'
import Header from './components/Header'
import Feed from './components/Feed'
import Navbar from './components/Navbar'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    height: '100vh',
    display: 'flex',
    width: '1200px',
    margin: '0 auto'
  }
})

const Home = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.main}>
        <Navbar />
        <Feed />
      </main>
    </div>
  )
}

export default Home
