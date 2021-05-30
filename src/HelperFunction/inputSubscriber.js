import debounce from 'lodash/debounce';
import { apiService } from '../API/apiService';
import { render } from '../index';
import {root} from '../index';

const onInputChange =async (e) => {
  const value =e.target.value.trim()
  if (value.length === 0) return

  let valueStore = window.store.search

  if (valueStore !== value){
    window.store.resetStore()
    root.innerHTML = ''
    window.store.setSearch(value)
    const {hits, total} = await apiService(value)
    window.store.update(hits)
    window.store.updateTotal(total)
    render()
  }
}

export const inputSubscriber = (selector) => {
  const inputRef = document.querySelector(selector)

  inputRef.addEventListener(
    'input',
    debounce(onInputChange, 500),
  )

}
