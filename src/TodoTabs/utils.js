export function a11yProps(index) {
  return {
    id: `todo-tab-${index}`,
    'aria-controls': `todo-tabpanel-${index}`,
  };
}
