export default (req, res) => {
  const x = Math.floor(Math.random() * 200);
  const y = Math.floor(Math.random() * 200);

  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  return `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="${x}" y="${y}" width="50" height="50" fill="${randomColor}" />
    </svg>
    `
}