/* Synchronized Tabs */
const tabs = document.querySelectorAll('.tabbed-set > input')
for (const tab of tabs) {
  tab.addEventListener('click', () => {
    const current = document.querySelector(`label[for=${tab.id}]`)
    const pos = current.getBoundingClientRect().top
    const labelContent = current.innerHTML
    const labels = document.querySelectorAll('.tabbed-set > label, .tabbed-alternate > .tabbed-labels > label')
    for (const label of labels) {
      if (label.innerHTML === labelContent) {
        document.querySelector(`input[id=${label.getAttribute('for')}]`).checked = true
      }
    }
    // Preserve scroll position
    const delta = (current.getBoundingClientRect().top) - pos
    window.scrollBy(0, delta)
  })
}

/* make tables sortable */
document$.subscribe(function() {
  var tables = document.querySelectorAll('article table:not([class])')
  tables.forEach(function(table) {
    new Tablesort(table)
  })
})

/* MATHJax */
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: '.*',
    processHtmlClass: 'arithmatex'
  }
};

/* ZOOM */
document.querySelectorAll('.zoom').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('image-zoom');
    })
});
document.querySelectorAll('.zoom2').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('image-zoom2');
    })
});
