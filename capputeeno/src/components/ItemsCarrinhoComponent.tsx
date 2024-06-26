import { useCarrinho } from '../hooks/useCarrinho'
import { CarrinhoType } from '../types/product-type'
import ItemCarrinhoCard from './ItemCarrinhoCard'

export default function ItemsCarrinhoComponent() {
   const { getITodosItems } = useCarrinho()
   const items = getITodosItems()
   return (
      <div className='gap-3 flex flex-wrap'>
         {items?.map((item: CarrinhoType) => {
            return <ItemCarrinhoCard produto={item.produto} quantidade={item.quantidade} key={item.produto.id} />;
         })}

      </div>
   )
}
