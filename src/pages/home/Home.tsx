interface CardProdutoProps {
  imgUrl: string;
  nomeProduto: string;
  descricao: string;
}

const CardProduto: React.FC<CardProdutoProps> = ({ imgUrl, nomeProduto, descricao }) => {
  return (
      <div className="conteiner flex flex-col rounded-2xl overflow-hidden justify-between border-2 border-blue-400">
          <div className="bg-white p-4 rounded-lg shadow-md">
              <img src={imgUrl} alt={nomeProduto} className="w-full h-32 object-cover mb-4" />
              <h2 className="text-lg font-semibold mb-2">{nomeProduto}</h2>
              <p className="text-gray-700">{descricao}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full">Comprar</button>
          </div>
      </div>
  );
};



function Home() {
    return (
      <>
        <div id="container" className="flex justify-center bg-sky-700">
          <div id="subcontainer" className="container grid grid-cols-2 text-white">
            <div id="texto" className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className="text-5xl font-bold">Bem Vindes a FarmaGen!</h2>
              <p className="text-xl">Aqui você encontra os melhores preços em medicamentos e perfumaria!</p>
  
              <div className="flex justify-around gap-4">
                <div className="rounded text-white border-white border-solid border-2 px-4 py-2">
                  Novo Produto
                  </div>
              </div>
            </div>
            <div id="imagem" className="flex justify-center">
              <img
                src="https://i.imgur.com/9BnRbxQ.png"
                alt="Imagem da Página Home"
                className="w-2/3"></img>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-[50px] ">
                        
                        <CardProduto
                            imgUrl={"https://cdn.ultrafarma.com.br/static/produtos/804460/medium-637505687932037880-804460_2.png"}
                            nomeProduto={"Ibuprofeno Cápsula 400mg"}
                            descricao={"1"}
                        />
                        </div>
      </>
    )
  }
  
  export default Home
  