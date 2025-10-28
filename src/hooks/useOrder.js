import { useState } from 'react';
import jsPDF from 'jspdf';

function useOrder() {
  const [orderStatus, setOrderStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const generateAndDownloadPDF = (orderName, orderCart) => {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString('de-DE');

    // Add header
    doc.setFontSize(20);
    doc.text("Bestellbestätigung", 10, 20);

    // Add order details
    doc.setFontSize(12);
    doc.text(`Kunde: ${orderName}`, 10, 30);
    doc.text(`Datum: ${date}`, 10, 37);

    // Add a line separator
    doc.setLineWidth(0.5);
    doc.line(10, 42, 200, 42);

    // Add cart items
    doc.setFontSize(14);
    doc.text("Bestellte Produkte:", 10, 50);

    let yPosition = 60;
    doc.setFontSize(11);
    orderCart.forEach(item => {
      doc.text(`${item.quantity} x ${item.name}`, 15, yPosition);
      yPosition += 7; // Move down for the next item
    });

    // Add a footer message
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text("Vielen Dank für Ihre Bestellung!", 10, yPosition + 10);

    // Save the PDF
    doc.save(`bestellung-${orderName.replace(/\s/g, '_')}-${date}.pdf`);
  };

  return { orderStatus, setOrderStatus, generateAndDownloadPDF };
}

export default useOrder;