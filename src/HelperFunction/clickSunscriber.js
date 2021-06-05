import { popup } from './popup';


export const clickSubscriber = (e) => {
  const target  = e.target
  if (target.tagName !== 'IMG'){
    return
  }
  popup(target.getAttribute('path'))
}
