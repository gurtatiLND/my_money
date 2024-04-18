import { useReducer, useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

const initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)//set it to true when our component(useFirestore) thet uses this hook unmounts

  //collection ref
  const ref = projectFirestore.collection(collection)

  //add a document
  const addDocument = (doc) => {

  }

  //delete document
  const deleteDocument = (id) => {

  }

  //cleanup function
  //this func is going to fire once when the component that uses this hook  first mounts the DOM
  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, response }
}