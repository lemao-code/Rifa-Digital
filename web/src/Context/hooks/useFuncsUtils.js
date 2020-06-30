import api from '../../services/api'
import tester from '../../tabuleiro.jpeg'
export default function useFuncsUtils() {
   

   function formatedDate (props) {

            const date = props.slice(0,10)
            const ano = date.split("-")[0]
            const mes = date.split("-")[1]
            const dia = date.split("-")[2]
            return dia + "/" + mes + "/" + ano 
   }


    async function AddImage (file) {
      const data = new FormData()
      data.append('file', file)
      try {
         const id = localStorage.getItem('id')
         await api.post(`http://localhost:3333/images/${id}`, data)
   }catch(err) {
      alert('Erro ao adicionar imagem')
      console.log(err)
   }
}


   return {formatedDate, AddImage}
}