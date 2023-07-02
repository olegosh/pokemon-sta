import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { WelcomePage } from './pages/WelcomePge'
import { SearchPage } from './pages/SearchPage'
import { Page404 } from './pages/Page404'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route index element={<WelcomePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App as React.FC
