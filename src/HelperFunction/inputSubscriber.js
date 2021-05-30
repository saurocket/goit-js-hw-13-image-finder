import debounce from 'lodash/debounce';
import { apiService } from '../API/apiService';
import { render } from '../index';
import {root} from '../index';

const onInputChange =async (e) => {
  let valueStore = window.store.search
  const value =e.target.value.trim()
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
