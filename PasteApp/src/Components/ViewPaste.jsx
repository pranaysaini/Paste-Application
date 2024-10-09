import React, { useEffect } from 'react'
import {useState} from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

function ViewPaste() {

  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id )
  return (
    <div>
      <div>
        <input type="text" disabled className="p-2 rounded-md mt-2" placeholder="Enter Title here" value={title} 
                            onChange={(e) => setTitle(e.target.value)} />
        
        {/* <button onClick={createPaste}>
          {
            pasteId ? "Update Paste" : "Create My Paste"
          }
        </button> */}

      </div>

      <div>
        <textarea disabled value={paste.content} placeholder='Enter Content Here'
                  onChange={(e) => setValue(e.target.value)} rows="20"></textarea>
      </div>
    </div>
  )
}

export default ViewPaste