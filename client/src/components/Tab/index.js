import React from 'react'

import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: '#5C595B',
    textTransform: "capitalize",
    fontSize: "1.1em",
    color: '#C4C4C4',
    height: 48,
    padding: '0 30px',
    '&$selected': {
      background: '#ED2585',
      color: 'white',
      fontWeight: 'bold'
    },
  },
  selected: {},
});

export default function CustomTab(props) {

  const classes = useStyles();

    return (
      <Tab
        {...props}
        classes={{
          root: classes.root,
          selected: classes.selected,
        }}
      />
    )
}
