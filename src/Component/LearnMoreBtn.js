import { apiService } from '../API/apiService';
import { render} from '../index';
import { ScrollUp } from './ScrollUp';
import { scrollDown } from '../HelperFunction/scroll';

const onAddCard = async () => {
  window.store.addPageNumber()
  let pageNumber = window.store.pageNumber
  let valueStore = window.store.search
    const data = await apiService(valueStore,pageNumber)
    window.store.update(data.hits)
    render()
}





export const LearnMoreBtn = (root) => {


  const btn = document.querySelector('.add-card')

  if(window.store.total === window.store.gallery.length){
    btn?.remove()
    return;
  }



  if (window.store.total < 12) {
    if(btn){
      btn.remove()
    }
    return;
  }
  if(btn){
    return
  }


  const component = `<button type="button" class="btn btn-primary add-card">Learn More</button>`
  root.insertAdjacentHTML('afterend',component)
  ScrollUp(root)
  const  btnAdd = document.querySelector('.add-card')

  btnAdd?.addEventListener('click', async () => {
   await onAddCard()
    scrollDown(btnAdd)
  })

}


