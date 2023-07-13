import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'

import axios from 'axios'

export function GithubCallback() {
  const firstRender = useRef(true)

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

      console.log(response.data)
      window.open('mocha-dev://teste')
    }

    if (firstRender.current) {
      firstRender.current = false

      return
    }

    loadGithubInfo()
  }, [search])

  return <div>github</div>
}
