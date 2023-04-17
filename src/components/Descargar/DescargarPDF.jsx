import React from 'react';

function DescargaPDF() {
  const descargarPDF = () => {
    fetch('/ruta/al/archivo.pdf', {
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        window.open(url);
      })
      .catch((error) => {
        console.error('Hubo un error al descargar el archivo:', error);
      });
  };

  return <button onClick={descargarPDF}>Descargar PDF</button>;
}

export default DescargaPDF;
