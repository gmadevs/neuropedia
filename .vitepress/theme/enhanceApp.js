export default ({ router }) => {
  if (typeof window === 'undefined') return

  router.onAfterRouteChanged = () => {
    const checkbox = document.getElementById('toggle-stars')
    if (!checkbox) return

    const filterLinks = () => {
      document.querySelectorAll('.star-link-list li').forEach(li => {
        const text = li.textContent || ''
        const show = text.includes('⭐') || !checkbox.checked
        li.style.display = show ? '' : 'none'
      })
    }

    checkbox.addEventListener('change', filterLinks)
    filterLinks() // run once at load
  }
}
