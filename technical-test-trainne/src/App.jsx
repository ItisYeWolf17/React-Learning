import { useEffect, useState } from "react"
import './App.css'

const factEndPoint = `https://catfact.ninja/fact`
const imageEndPoint = 'https://cataas.com/cat/says/{firstWord}?size=506&color=red'

export function App(){
    const [fact, setFact] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        fetch(factEndPoint)
        .then(x => x.json())
        .then(data =>{
            const {fact} = data
            setFact(fact)
        })

    }, []) //When u use just an empty array it only executes the first time

    useEffect(() => {
        if(fact){
            const firstWord = fact.split(' ')[0]
            console.log(firstWord)
    
            fetch(imageEndPoint.replace('{firstWord}', firstWord))
            .then(response => {
                console.log(response)
                setImage(response.url)
            })
        }
    }, [fact])



    return(
        <main>
            <h1>Cat App</h1>
            {fact && <p>{fact}</p>}
            {image && <img src={image} alt="Image extracted from the first word"></img>}
        </main>
    )
}