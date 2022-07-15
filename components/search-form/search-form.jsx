import { useState } from 'react'
import AppButton from '../app-button/app-button'
import AppTextInput from '../app-text-input/app-text-input'

export default function SearchForm() {
  const [searchWord, setSearchWord] = useState('')
  return (
    <div className="flex justify-center items-end flex-col sm:flex-row mx-6">
      <AppTextInput
        label="Search films by title, characters or planets."
        className="w-full mb-2 sm:m-0"
        value={searchWord}
        onChange={event => setSearchWord(event.target.value)}
      />
      <AppButton
        className="w-full sm:w-auto"
        text="Go"
        type="primary"
        onClick={() => {}}
      />
    </div>
  )
}
