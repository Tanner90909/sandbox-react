"use client"
import Image from 'next/image'
import styles from './page.module.css'
import React, {useState} from 'react'
import MyButton from './components/atoms/MyButton'
import SearchInput from './components/molecules/SearchInput'
import SearchResults from './components/molecules/SearchResults'

export default function Home() { // Parent

  const [searchTxt, setSearchTxt] = useState([]);

  function setStateClickHandler (e){
    console.log(e);
    setSearchTxt([]);
  }

  function searchClickHandler (e){
    console.log(e);
    let results =[];
    results.push("one")
    results.push("two")
    results.push("three")
    setSearchTxt(results);
  }

  return (
    <main className={styles.main}>

      <h1>Welcome to my app</h1>

      <div className="search-input-wrapper">
        <SearchInput
        title="SEARCH"
        searchClickHandler={searchClickHandler}
        buttonText="GO" 
        />
      </div>

      <div className="Newsletter-input-wrapper">
        <SearchInput
        title="NEWSLETTER"
        searchClickHandler={searchClickHandler}
        buttonText="SIGN-UP" 
        />
      </div>

      <SearchResults
      data={searchResults}
      />

      <MyButton 
      clickHandler={setStateClickHandler}
      buttonText={"Set State"}
      />

    </main>
  )
}



