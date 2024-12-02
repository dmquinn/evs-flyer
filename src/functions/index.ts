import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const generatePDF = () => {
  const pageElement: HTMLElement = document.querySelector(".page");

  if (pageElement) {
    const options = {
      scale: 2,
      useCORS: true,
      logging: true,
      scrollX: 0,
      scrollY: 0,
      windowWidth: pageElement.scrollWidth,
      windowHeight: pageElement.scrollHeight,
    };

    html2canvas(pageElement, options).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      var imgWidth = pdf.internal.pageSize.getWidth();
      var imgHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("page-content.pdf");
    });
  }
};

