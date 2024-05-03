import { formatarPreco } from "../static";
import { ProdutoType } from "../types/product-type";

export default function ItemCard({ produto }: { produto: ProdutoType }) {

	return (
		<button
			onClick={() => (window.location.href = `/produto/${produto.id}`)}
			className="sm:h-[318px] sm:w-64 w-32 overflow-hidden rounded-lg h-[200px]"
		>
			<div className="sm:h-[232px] h-[140px]  ">
				<img src={produto.image_url} alt="Imagem" />
			</div>
			<div className="flex sm:h-[86px] h-[60px] flex-col justify-center gap-1 rounded-t-none bg-white sm:text-base text-[10px] px-3">
				<div className="border-b pb-[8px] w-full text-left">{produto.name}</div>
				<div className="font-bold w-full text-left">R$ {formatarPreco(produto.price_in_cents)}</div>
			</div>
		</button>
	);
}
