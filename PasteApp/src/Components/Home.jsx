import React from 'react'
import {useState} from 'react'
import { useSearchParams } from 'react-router-dom';

function Home() {
  const[title, setTitle] = useState('')
  const[value, setValue] = useState('')

  const [searchParams, setSearchParams] = useSearchParams()
  const pasteId = searchParams.get("pasteId")


  return (
    <div>
      <div>
        <input type="text" className="p-2 rounded-md mt-2" placeholder="Enter Title here" value={title} 
                            onChange={(e) => setTitle(e.target.value)} />
        
        <button>
          {
            pasteId ? "Update Paste" : "Create My Paste"
          }
        </button>

      </div>

      <div>
        <textarea value={value} placeholder='Enter Content Here'
                  onChange={(e) => setValue(e.target.value)} rows="20"></textarea>
      </div>
    </div>
  )
}

export default Home