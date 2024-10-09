import React, { useEffect } from 'react'
import {useState} from 'react'
import { useSearchParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

function Home() {
  const[title, setTitle] = useState('')
  const[value, setValue] = useState('')

  const [searchParams, setSearchParams] = useSearchParams()
  const pasteId = searchParams.get("pasteId")

  const allPastes = useSelectors((state => state.paste.pastes))

  const dispatch = useDispatch();

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id: pasteId ||
            Date.now().toString(36), 
            createdAt: new Date ().toISOString(),
    }

    useEffect(() => {
        if(pasteId){
          const paste = allPastes.find((p) => p._id === pasteId);
          setTitle(paste.title)
          setValue(paste.content)
        }
    }, [pasteId])

    if(pasteId){

      // update paste if pasteId not found
      dispatch(updateToPastes(paste))
    }
    else{

      // If got pasteId then create paste
      dispatch(addToPastes([paste]))
    }

    // After creation or updation
    setTitle('')
    setValue('')
    setSearchParams({})
  }


  return (
    <div>
      <div>
        <input type="text" className="p-2 rounded-md mt-2" placeholder="Enter Title here" value={title} 
                            onChange={(e) => setTitle(e.target.value)} />
        
        <button onClick={createPaste}>
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