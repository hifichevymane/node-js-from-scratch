const dbRows = [
  {
    id: 1,
    book: 'book1',
    language: 'en',
  },
  {
    id: 2,
    book: 'book2',
    language: 'ua',
  },
  {
    id: 3,
    book: 'book3',
    language: 'ua',
  }
]

export default ({ lang = null }, { languages }) => {
  if (lang) {
    return dbRows.filter(book => book.language === lang);
  }

  return { dbRows, languages };
}