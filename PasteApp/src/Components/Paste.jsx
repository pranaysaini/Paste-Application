import React from 'react'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import toast from 'react-hot-toast';


function Paste() {
  
  const pastes = useSelector((state) => state.paste.pastes);

  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  // const filteredData = pastes 
  //                     ? 
  //                     pastes.filter((paste) => pastes.title &&
  //                                           paste.title.toLowerCase().includes((search || '').toLowerCase())) 
  //                     : 
  //                     []

  const filteredData = pastes?.filter((paste) => {
    // Check if title exists and perform lowercase comparison with search term
    return paste.title?.toLowerCase().includes((search || '').toLowerCase());
  }) || [];

  const handleClick = (pasteId) => {
      dispatch(removeFromPastes(pasteId));
  }
  
    


  return (
    <div>
      <input type="text" placeholder="Search for a paste"
              value={search} onChange={(e) => setSearch(e.target.value)} />

      <div>
        {
          filteredData.length > 0 && 
          filteredData.map(
            (paste) => {
              return (
                <div key={paste.id}>
                  <div>
                    {paste.title}
                  </div>

                  <div>
                    {paste.content}
                  </div>

                  <div>
                    <button>
                      <a href={`/?pasteId=${paste?._id}`}></a>
                      Edit
                    </button>

                    <button>
                      <a href={`/pastes/${paste?._id}`}></a>
                      View
                    </button>

                    <button onClick={() => handleDelete(paste?._id)}>
                      Delete
                    </button>

                    <button onClick={() => {navigator.clipboard.writeText(paste?.content)
                                            toast.success("Copied To Clipboard")
                    }}>
                      Copy
                    </button>

                  </div>
                </div>

              )
            }
          )
        }
      </div>
    </div>
  )
}

export default Paste