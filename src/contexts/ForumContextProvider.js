import React, {createContext, useState, useEffect } from 'react'

export const ForumContext = createContext();

const ForumContextProvider = (props) => {
  const [subjects, setSubjects] = useState()

  //FETCH ALL SUB-FORUM FROM API
  const fetchFroums = async () => {
    let allSubjects = await fetch('/api/forums')
    allSubjects = await allSubjects.json();
    setSubjects(allSubjects)
    console.log(subjects)
  }

 

  useEffect(()=>{
    fetchFroums()
  }, [])

  const values = {
    subjects,
    fetchFroums
  }

  return (
    <ForumContext.Provider value={values}>
      {props.children}
    </ForumContext.Provider>
  )
}

export default ForumContextProvider