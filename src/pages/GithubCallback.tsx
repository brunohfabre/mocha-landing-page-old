import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import axios from 'axios'

export function GithubCallback() {
  const [search] = useSearchParams()

  useEffect(() => {
    async function loadGithubInfo(): Promise<void> {
      const code = search.get('code')
      console.log(code)

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/oauth/github`,
        {
          code,
        },
      )

      console.log(response.data)
      window.open('mocha-dev://teste')
    }

    loadGithubInfo()
  }, [search])

  return <div>github</div>
}
