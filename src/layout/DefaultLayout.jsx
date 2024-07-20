import React from 'react'
import { Outlet } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    paddingTop: 10,
    marginLeft: '60px',
    height: '100vh',
    backgroundColor: '#f4f3ef',
  },
}))

const DefaultLayout = () => {
  const classes = useStyles()

  return (
    <div>
      <main className={classes.content}>
        <Outlet /> {/* Render child routes here */}
      </main>
    </div>
  )
}

export default DefaultLayout
