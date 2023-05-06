import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Container } from 'postcss'
import Head from 'next/head'
import { useState,useEffect } from "react";
import Album from './albums/[id]';
import Header from './Components/Layout';
import AlbumBlock from './Components/AlbumBlock';
import SortDropdown from './Components/SortDropdown';
import * as React from 'react';
import Layout from './Components/Layout';
import SearchBar from './Components/SearchBar';
const inter = Inter({ subsets: ['latin'] })
//ALL OF THE UTILITY FUNCTIONS ARE LISTED HERE

//This function is used to get the value of a nested object
function getPropByString(obj, propString) {
  if (!propString)
    return obj;

  var prop, props = propString.split('.');

  for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
    prop = props[i];

    var candidate = obj[prop];
    if (candidate !== undefined) {
      obj = candidate;
    } else {
      break;
    }
  }
  return obj[props[i]];
}

var obj = {
  foo: {
    bar: {
      baz: 'x'
    }
  }
};
//UNiversal sort function for all fields of the table
const sort_by = (field, reverse, primer) => {

  const key = primer ?
    function(x) {
      return primer(getPropByString(x,field));
    } :
    function(x) {
      return getPropByString(x,field);
    };

  reverse = !reverse ? 1 : -1;

  return function(a, b) {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  };
};

const search = (searchTerm,albums) => {
  console.log(searchTerm.toLowerCase())
  console.log(albums)
  return (albums.filter(album => { 
    return album["im:name"].label.toLowerCase().includes(searchTerm.toLowerCase()) || album["im:artist"].label.toLowerCase().includes(searchTerm.toLowerCase())
}))

}
//END OF UTILITY FUNCTIONS

//This function client side renders the data from the API to increase performance using NEXTJS
export async function getStaticProps() {
  const res = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
  const albums = await res.json()
  //console.log(albums)

  return {
    props: {
      albums:albums.feed.entry,
    },
  }
}

export default function Home({albums}) {
  //The old way of fetching data, left here just in case we no longer want static props
  /* const fetchAlbums = async () => {
      fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then(response=>{
        return response.json();
      })
      .then(data =>{
        setAlbums(data.feed.entry);
        console.log(data.feed.entry)
      }
        )
  
  } */
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [sortDirection, setSortDirection] = React.useState(true);
  const [currentAlbums,setCurrentAlbums] = React.useState(albums);
  const options = [
    'im:price.attributes.amount',
    'im:artist.label',
    'im:name.label',
    'im:releaseDate.label',
  ];
    return (
    <>
    {/* {console.log(albums.sort(sort_by("im:price.attributes.amount",false)))} */}
    <Layout home={true}>
      <div className='flex w-full mb-5'>
      <SearchBar search={search} albumData={albums} setCurrentAlbums={setCurrentAlbums}> </SearchBar>
        <SortDropdown selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} sortDirection={sortDirection} setSortDirection={setSortDirection}/>
      </div>

        <div className='flex flex-wrap  justify-between content-center flex-grow '>    
          {currentAlbums.sort(sort_by(options[selectedIndex],sortDirection,null)).map(album => (
            <>
            <AlbumBlock album={album}> </AlbumBlock>
            </>
          ))}
        </div> 
        
    </Layout>
     </>
  )
}
