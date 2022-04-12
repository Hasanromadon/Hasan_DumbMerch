exports.generateInvoiceNumber = (idTransaction) => {
  const romanNumber = [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'X',
    'XI',
    'XII',
  ];
  const d = new Date();

  let month = d.getMonth();
  let year = d.getFullYear();

  return `${idTransaction + 1}/INV/${romanNumber[month]}/${year}`;
};
