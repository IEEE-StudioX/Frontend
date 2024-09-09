import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/global.css';
import Swal from 'sweetalert2';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className="text-3xl font-bold underline"
    onClick={()=>{
      Swal.fire("SweetAlert2 is working!");
    }}>Test tailwind and sweetAlert</h1>
  </StrictMode>,
)
