
'use client'

import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"

import {collection, doc, getDoc, setDoc} from "firebase/firestore"
import { db } from "@/firebase"
import { useRouter } from "next/navigation"
import { Container } from "@mui/material"

export default function Flashcards(){
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashacards, setFlashcards] = useState([])
    const router = useRouter()

    useEffect(()=>{
        async function getFlashcards(){
            if (!user) return
            const docRef = doc(collection(db, 'users'), user.id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()){
                const collections = docSnap.data().flashacards || []
                console.log(collections)
                setFlashcards(collections)
            }
            else{
                await setDoc(docRef, {flashacards: []})
            }
        }
        getFlashcards()
    }, [user])

    if (!isLoaded || isSignedIn){
        return <></>
    }

    const handleCardClick = (id) =>{
        router.push('/flashacard?id=${id}')
    }

    return (<Container maxWidth="10vw">

    </Container>)
}