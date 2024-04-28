import { formatarPreco } from "../static";
import { ProdutoType } from "../types/product-type";

export default function ItemCard({ produto }: { produto: ProdutoType }) {

	return (
		<button
			onClick={() => (window.location.href = `/produto/${produto.id}`)}
			className="h-[318px] w-64 overflow-hidden rounded-lg"
		>
			<div className="h-[232px]">
				<img src={produto.image_url} alt="Imagem" />
			</div>
			<div className="flex h-[86px] flex-col justify-center gap-1 rounded-t-none bg-white  px-3">
				<div className="border-b pb-[8px] w-full text-left">{produto.name}</div>
				<div className="font-bold w-full text-left">R$ {formatarPreco(produto.price_in_cents)}</div>
			</div>
		</button>
	);
}