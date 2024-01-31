
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
      </>
    )
  }
  
  export default Home
  