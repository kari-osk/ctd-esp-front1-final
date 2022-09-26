import "./paginacao.css";

/**
 * Componente que contém os botões para paginar os cards dos personagens
 *
 * 
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = ({quantTotalCards, cardsInPage, paginate}) => {

	const totalPages = Math.ceil(quantTotalCards/ cardsInPage)

 	const pages = []

	for (let i =1; i <= totalPages; i++) {
  	pages.push(i)
	}

  return (
    <div className="paginacao">
			{pages.map((pageNumber) => (
				<div key={pageNumber}>
					<button 
						className={'primary'}
						disabled={false}
						onClick={() => paginate(pageNumber)}
					>
					{pageNumber}
					</button>
				</div>
			))}
    </div>
  );
};


export default Paginacao;
