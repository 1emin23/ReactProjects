import { useEffect, useState } from "react"
import axios from "axios"

const API_ENDPOINT = "https://official-joke-api.appspot.com/jokes/random"

function joke() {

    const [setup, setSetup] = useState<string>("");
    const [punchline, setPunchline] = useState<string>("");
    const [jokeType, setJokeType] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    
    const getRandomJoke = async () => {
        setLoading(true)
        setError("")
        try {
            const response = await axios.get(API_ENDPOINT)
            const { setup, punchline, type } = response.data
            setSetup(setup)
            setPunchline(punchline)
            setJokeType(type)
        } catch (error) {
            setError("Could not fetch joke. Please try again!");
        } finally {
            setLoading(false)
        }
    }
    
    const handleNewJoke = () => {
        getRandomJoke()
    }
    
    useEffect(() => {
        getRandomJoke()
    }, [])


  return (
      <div className='joke-wrapper'>
          <div className='jokeText'>
              {
                  error ? <p>{error}</p> : loading ?
                      <p style={{textAlign: 'center'}}>Loading...</p> :
                    <span className="">
                        <p>-- {setup}</p>
                        <p>-- { punchline }</p>
                        <hr style={{margin: '.4rem'}} />
                        <p style={{textAlign: 'right', fontWeight: '700', textTransform: 'capitalize'}}>{jokeType}</p>
                    </span>
              }
          </div>

          <button onClick={handleNewJoke} className='generate-joke-button'>Generate Joke</button>
    </div>
  )
}

export default joke