import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import axios from 'axios'

export function GithubCallback() {
  const [search] = useSearchParams()

  useEffect(() => {
    async function loadGithubInfo(): Promise<void> {
      const code = search.get('code')

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/oauth/github`,
        {
          code,
        },
      )

      window.open(`mocha://oauth?token=${response.data.token}`)
      window.close()
    }

    loadGithubInfo()
  }, [search])

  return <div>github</div>
}
