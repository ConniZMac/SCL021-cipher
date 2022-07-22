const cipher = {
    encode: function(desplazamiento,texto) {
       
   
     if (!texto) 
         return ''; 
     const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     
     desplazamiento = (desplazamiento % 26 + 26) % 26; 
     return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + desplazamiento) % 26]);
     
   },
   
   decode: function(desplazamiento, texto) {
   
     if (!texto) 
         return ''; 
     const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     desplazamiento = (desplazamiento % 26 - 26) % 26; 
     return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - desplazamiento) % 26]);
     
   }
   
   };
   
   export default cipher;