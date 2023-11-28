
import './App.scss'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound'
import React from 'react'

export const SearchContext = React.createContext()
function App() {
  const [searchValue, setSearchValue] = React.useState('')

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className='wrapper'>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </SearchContext.Provider>
  )

}

export default App
