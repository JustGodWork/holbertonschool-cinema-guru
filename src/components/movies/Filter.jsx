import React from 'react'
import './movies.css'
import SearchBar from '../general/SearchBar'
import Input from '../general/Input'
import SelectInput from '../general/SelectInput'
import Tag from './Tag'

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'highestrated', label: 'Highest rated' },
  { value: 'lowestrated', label: 'Lowest rated' },
]

const ALL_TAGS = ['action','drama','comedy','biography','romance','thriller','war','history','sport','sci-fi','documentary','crime','fantasy']

export default function Filter({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) {
  return (
    <div className="cg-filter">
      <SearchBar title={title} setTitle={setTitle} />

      <div className="cg-filter-row">
        <Input type="number" value={minYear} setValue={setMinYear} inputAttributes={{ placeholder: 'Min year' }} />
        <Input type="number" value={maxYear} setValue={setMaxYear} inputAttributes={{ placeholder: 'Max year' }} />
        <SelectInput options={SORT_OPTIONS} value={sort} setValue={setSort} />
      </div>

      <ul className="cg-tag-list">
        {ALL_TAGS.map((t) => (
          <Tag key={t} genre={t} genres={genres} setGenres={setGenres} />
        ))}
      </ul>
    </div>
  )
}
