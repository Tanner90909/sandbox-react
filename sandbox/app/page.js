"use client"
import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'
import MyButton from './components/atoms/MyButton'
import SearchInput from './components/molecules/SearchInput'

export default function Home() { // Parent
  function setStateClickHandler (e){
    console.log(e);
  }

  function searchClickHandler (e){
    console.log(e);
  }

  return (
    <main className={styles.main}>
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
      <h1>Welcome to my app</h1>
      <MyButton 
      clickHandler={setStateClickHandler}
      buttonText={"Set State"}
      />
    </main>
  )
}



