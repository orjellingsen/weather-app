import React from 'react'
import Downshift from 'downshift'
import debounce from 'lodash.debounce'
import opencage from 'opencage-api-client'
import PropTypes from 'prop-types'

import { OPENCAGE_KEY } from '../config'
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown'

class SearchLocation extends React.Component {
  static propTypes = {
    getForecast: PropTypes.func.isRequired,
  }

  state = {
    results: [],
    loading: false,
  }

  onChange = debounce(async e => {
    this.setState({ loading: true })
    const { results } = await opencage
      .geocode({ q: e.target.value, key: OPENCAGE_KEY })
      .catch(err => console.log(err.message))
    this.setState({ results, loading: false })
  }, 350)

  render() {
    const { loading, results } = this.state
    return (
      <SearchStyles>
        <Downshift
          onChange={this.props.getForecast}
          itemToString={item => (item === null ? '' : item.formatted)}
        >
          {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
            <div>
              <input
                {...getInputProps({
                  type: 'search',
                  placeholder: 'Search for location',
                  id: 'search',
                  className: loading ? 'loading' : '',
                  onChange: e => {
                    e.persist()
                    this.onChange(e)
                  },
                })}
              />

              {isOpen && (
                <DropDown>
                  {results.map((item, index) => (
                    <DropDownItem
                      {...getItemProps({ item })}
                      key={item.annotations.geohash}
                      highlighted={index === highlightedIndex}
                    >
                      {item.formatted} {item.annotations.flag}
                    </DropDownItem>
                  ))}
                  {!results.length &&
                    !loading && <DropDownItem>Nothing Found {inputValue}</DropDownItem>}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    )
  }
}

export default SearchLocation
