let productos = [
    { id: '1' ,categoria: 'Botines', name: "BOTINES PREDATOR EDGE.3 FG ADIDAS",   price: 30999, foto:'https://www.digitalsport.com.ar/files/products/637fa2b9ae6a8-578449-500x500.jpg' },
    { id: '2' ,categoria: 'Botines', name: "BOTINES TACTO II FG/AG PUMA", price: 13999, foto:'https://www.digitalsport.com.ar/files/products/632b40cea5935-557402-500x500.jpg' },
    { id: '3' ,categoria: 'Botines', name: "BOTINES SAN CIRO V FG TOPPER",    price: 13599, foto:'https://www.digitalsport.com.ar/files/products/6283a86f4db97-553251-500x500.jpg' },
    { id: '4' ,categoria: 'Botines', name: "BOTINES RIGORE CAMPO DIADORA", price: 17099, foto:'https://www.digitalsport.com.ar/files/products/63192efe9750f-602926-500x500.jpg' },
    { id: '5' ,categoria: 'Botines', name: "BOTINES DOMINO CAMPO DIADORA", price: 17099, foto:'https://www.digitalsport.com.ar/files/products/63192ef32fad8-602924-500x500.jpg' },
    { id: '6' ,categoria: 'Botines', name: "BOTINES STAMINA CAMPO ATHIX", price: 8899 , foto:'https://www.digitalsport.com.ar/files/products/631a1dd96a432-602916-500x500.jpg' },
    { id: '7' ,categoria: 'Camisetas', name: "CAMISETA BOCA JUNIORS AWAY ADIDAS", price: 11699, foto:'https://www.digitalsport.com.ar/files/products/6141fb0f44478-565173-500x500.jpg' },
    { id: '8' ,categoria: 'Camisetas', name: "CAMISETA RIVER PLATE ADIDAS", price: 7890, foto:'https://www.digitalsport.com.ar/files/products/611297b6622db-511586-500x500.jpg' },
    { id: '9' ,categoria: 'Camisetas', name: "CAMISETA ARGENTINA AFA 22 ADIDAS", price: 18699, foto:'https://www.digitalsport.com.ar/files/products/62c8c365de160-574896-500x500.jpg' },
    { id: '10' ,categoria: 'Camisetas', name: "CAMISETA JUVENTUS HOME ADIDAS", price: 14890, foto:'https://www.digitalsport.com.ar/files/products/62db31f3ded8f-540268-500x500.jpg' },
    { id: '11' ,categoria: 'Camisetas', name: "CAMISETA AJAX 22/23 ADIDAS", price: 16999, foto:'https://www.digitalsport.com.ar/files/products/62db3215b911a-565178-500x500.jpg' },
      
  ] 
  
  export const gFetch = () => {
    return new Promise(( res, rej )=>{    
      setTimeout(()=>{
        res( productos )
      }, 1000) 
   })
  
  } 
    