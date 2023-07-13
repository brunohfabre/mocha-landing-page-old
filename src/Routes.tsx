import { Routes as Router, Route } from 'react-router-dom'

import { GithubCallback } from './pages/GithubCallback'
import { Home } from './pages/Home'

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/callback/github" element={<GithubCallback />} />
    </Router>
  )
}
