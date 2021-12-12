import React, { useState } from 'react'

import { search } from 'services/algolia'
import { ClientServiceType } from 'services/services'

import { StyledSearch } from './style'

const Search = () => {
  const [results, setResults] = useState<ClientServiceType[]>([])
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)

  console.log('results', results)

  const handleSearch = async (query: string) => {
    const results = await search(query)
    setResults(results)
  }

  return (
    <StyledSearch isOpen={isSearchOpen}>
      <input
        onChange={event => handleSearch(event.target.value)}
        onFocus={() => setIsSearchOpen(true)}
        onBlur={() => setIsSearchOpen(false)}
      />
    </StyledSearch>
  )
}

export { Search }
