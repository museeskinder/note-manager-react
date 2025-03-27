import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NoteBrowse } from './pages/NoteBrowse/NoteBrowse.jsx'
import { NoteCreate } from './pages/NoteCreate/NoteCreate.jsx'
import { Note } from './pages/Note/Note.jsx'
import { PageNotFound } from './pages/PageNotFound/PageNotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<NoteBrowse />}/>
            <Route path="/note/:id" element={<Note />}/>
            <Route path="/note/new"   element={<NoteCreate />}/>
            <Route path="*" element={<PageNotFound />}/>
          </Route >
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
