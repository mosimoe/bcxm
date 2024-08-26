function waterfall() {
    const container = document.querySelector('.waterfall-container');
    if (!container) return;
  
    const items = container.querySelectorAll('.waterfall-item');
    const columns = getComputedStyle(container).getPropertyValue('column-count');
  
    let heights = new Array(parseInt(columns)).fill(0);
  
    items.forEach(item => {
      const minHeight = Math.min(...heights);
      const index = heights.indexOf(minHeight);
      
      item.style.order = index + 1;
      heights[index] += item.offsetHeight;
    });
  }
  
  window.addEventListener('load', waterfall);
  window.addEventListener('resize', waterfall);