sidebar = document.querySelector('.sidebar');
toggleBtn = document.querySelector('.sidebar-toggle');
closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click',function() {
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
});