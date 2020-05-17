import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import ProjectsTab from '../ProjectsTab';
import UserTab from '../UserTab';
import AuthenticateTab from '../AuthenticateTab';
import { a11yProps } from './utils';
import styles from './styles';

export default function TodoTabs() {
  const classes = makeStyles(styles);
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Todo tabs">
          <Tab label="User" {...a11yProps(0)} />
          <Tab label="Projects" {...a11yProps(1)} />
          <Tab label="Account" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <UserTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProjectsTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AuthenticateTab />
      </TabPanel>
    </div>
  );
}
