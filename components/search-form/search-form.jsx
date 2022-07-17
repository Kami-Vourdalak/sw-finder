import { useEffect, useState } from 'react'
import AppButton from '../app-button/app-button'
import AppTextInput from '../app-text-input/app-text-input'
import { useQuery } from 'react-query'
import { fetchSwFilmsByQuery } from '../../utils/api'
import { searchTermAtom } from '../../store'
import { useAtom } from 'jotai'

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useAtom(searchTermAtom)
  const [searchInput, setSearchInput] = useState('')

  const { refetch } = useQuery(['search', searchTerm], fetchSwFilmsByQuery, {
    enabled: false
  })
  useEffect(() => {
    if (searchTerm) refetch()
  }, [searchTerm])

  function handleSearchChange(event) {
    setSearchInput(event.target.value)
  }
  function handleSearch() {
    setSearchTerm(searchInput)
  }
  return (
    <div className="flex justify-center items-end flex-col sm:flex-row mx-6">
      <AppTextInput
        label="Search films by title, characters or planets."
        className="w-full mb-2 sm:m-0"
        value={searchInput}
        onChange={handleSearchChange}
      />
      <AppButton
        className="w-full sm:w-auto"
        text="Go"
        type="primary"
        onClick={handleSearch}
      />
    </div>
  )
}
