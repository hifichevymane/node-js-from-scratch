const parseAcceptedLaguages = (headers) => {
  const languageObject = {};

  const languages = headers.split(',');

  languages.forEach(lang => {
    const parts = lang.trim().split(';');

    const language = parts[0];
    const weight = parts[1] ? parseFloat(parts[1].split('=')[1]) : 1;

    languageObject[language] = weight;
  });

  return languageObject;
}

export default fn => (req, res) => {
  const languages = parseAcceptedLaguages(req.headers['accept-language']);
  const userAgent = req.headers['user-agent'];

  req.context = {
    languages,
    userAgent,
  }

  return fn(req, res)
};
