import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import VoatingApp from './VoteApp/VoatingApp.jsx'
// import VoatingApp from './VoteApp/VoatingApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VoatingApp />
  </StrictMode>,
)
