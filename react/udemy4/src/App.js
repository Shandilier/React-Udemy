import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Transalte from './components/Translate';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
const App = () => {

  const [showToggle,setShowToggle] = useState(true);
  const temp = {
      label : 'Select a label',
      value : 'Select'
  }
  const items = [
    {
      id : 0,
      title : 'What is react ?',
      content: 'React is a javascript library for frontend'
    },
    {
      id : 1,
      title: 'Why React ?',
      content: 'React is a favourite JS library'
    },
    {
      id : 2,
      title: 'How to use react ?',
      content: 'You just have to learn basic js syntax'
    }
  ];
  const options = [
    {
      label : 'The color Red',
      value : 'Red'
    },
    {
      label : 'The color Blue',
      value : 'Blue'
    },
    {
      label : 'The color Green',
      value : 'Green'
    }
  ]
  const [selected,setSelected] = useState(temp);
  // const showSearch = () => {
  //   if(window.location.pathname === '/search')
  //     return <Search></Search>
  //   else
  //     return <div></div>
  // };
  // const showAccordion = () => {
  //   if(window.location.pathname === '/')
  //     return <Accordion itemVal = {items}></Accordion>
  //   else
  //     return <div></div>
  // };

  // const showTranslate = () => {
  //   if(window.location.pathname === '/translate')
  //     return <Translate></Translate>
  //   else
  //     return <div></div>
  // };

  // const showDropdown = () => {
  //   if(window.location.pathname === '/dropdown')
  //     return <Dropdown onSelected = {setSelected} options = {options} selected = {selected}></Dropdown>
  //   else
  //       return <div></div>
  // }
  return (
    <div>
      <Header/>
      <Route path = "/">
        <Accordion itemVal = {items}></Accordion>
      </Route>
      <Route path = "/search">
        <Search></Search>
      </Route>
      <Route path = "/dropdown">
        <Dropdown onSelected = {setSelected} options = {options} selected = {selected}></Dropdown>
      </Route>
      <Route path = "/translate">
        <Translate>  
        </Translate>
      </Route>
    </div>
  )
}
export default App;