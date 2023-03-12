const fontLinks = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

fontLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    fontLinks.forEach(function(link) {
      link.classList.remove('font-size_active');
    });

    this.classList.add('font-size_active');

    const size = this.getAttribute('data-size');

    book.classList.remove('book_fs-small', 'book_fs-big');

    if (size === 'small') {
      book.classList.add('book_fs-small');
    } else if (size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});
