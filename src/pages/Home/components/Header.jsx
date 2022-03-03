import { makeStyles } from '@mui/styles'

import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import Avatar from '@mui/material/Avatar'
import { Bell } from 'react-feather'


const useStyles = makeStyles({
  img: {
    maxHeight: 55,
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginRight: 20
  },
  bell: {
    marginRight: 20
  }
})

const Header = () => {

  const classes = useStyles()

  return (
    <AppBar
      position='fixed'
      color='inherit'
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <img src="/images/logo.png" alt="logo"  className={classes.img}/>
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Button
            color='primary'
            variant="contained"
            style={{marginRight: 20}}
          >Novo Post</Button>
        <SvgIcon className={classes.bell}>
            <Bell />
          </SvgIcon>
          <Avatar src="/images/avatar1.png" alt="Andressa" />
        </div>
        {/*<div>
          <span>Conecta Dev</span>
        </div>
        <div>

          <span>Img 1</span>
          <span>Img 2</span>
        </div>*/}
      </Toolbar>
    </AppBar>
  )
}

export default Header
