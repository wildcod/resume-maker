import React,{Component} from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import './Download.css'


class Download extends Component {


    printDocument() {
        const input = document.getElementById('Preview');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }
    

    render(){
         return <div>
                        <button onClick={this.printDocument}> Download Pdf </button> 
                </div>
     }

}

export default Download