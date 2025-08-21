import './App.css';
import Nav from "./Nav";
import Header from './Header';
import Main from './main';
import { Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';

function App() {

  const [viewNotes,setViewNotes]= useState(false);
  function updateViewNotes(){
    setViewNotes(viewNotes=>!viewNotes);
  }

  let content;
  if(viewNotes){
    content=null;
  }
  else{
    content = <Header updateViewNotes={updateViewNotes}/>;
  }

  return (
    <>
       <Grid templateColumns="repeat(6,1fr)" bg="gray.50">
          <GridItem
            as="aside"
            colSpan={{base:6,lg:2,xl:1}}
            bg="yellow.500"
            minHeight={{lg:"100vh"}}
            p={{base:"20px",xl:"30px"}}
          >
            <Nav updateViewNotes={updateViewNotes} viewNotes={viewNotes}/>
          </GridItem>
          <GridItem
            as="aside"
            colSpan={{base:6,lg:4,xl:5}}
            p={{base:"20px",xl:"30px"}}
          >
            {content}
            <Main updateViewNotes={updateViewNotes}/>
          </GridItem>
       </Grid>
    </>
  );
}

export default App;
