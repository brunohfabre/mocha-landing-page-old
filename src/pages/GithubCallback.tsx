import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import axios from 'axios'

export function GithubCallback() {
  const [search] = useSearchParams()

  useEffect(() => {
    async function loadGithubInfo(): Promise<void> {
      const code = search.get('code')

      const accessTokenResponse = await axios.post(
        'https://github.com/login/oauth/access_token',
        null,
        {
          params: {
            code,
            client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
            client_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
          },
        },
      )

      // const userDataResponse = await axios.get('https://api.github.com/user', )

      console.log(accessTokenResponse)
    }

    loadGithubInfo()
  }, [search])

  console.log(search.get('code'))

  return <div>github</div>
}
