import axios from "axios";

const gerarPDFTreino = (idPaciente, idTreino) => {
   const url = `http://localhost:3000/treinos/pdf/${idPaciente}/${idTreino}`;

   axios.get(url, { responseType: 'arraybuffer' })
       .then((response) => {
           const blob = new Blob([response.data], { type: 'application/pdf' });
           const data = window.URL.createObjectURL(blob);

           window.open(data, '_blank');
       })
       .catch((error) => {
           console.log(error.response);
       });
};

export default gerarPDFTreino;