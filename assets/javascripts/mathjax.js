window.MathJax = {
    tex: {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true,
      require: {
        allow: {
          base: false,
          'all-packages': false
        },
        defaultAllow: true
      }
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    },
    
  };
  
  document$.subscribe(() => { 
    MathJax.typesetPromise()
  })
  