import { ItemDto } from './item.dto';
export class ItemPedidoDto{
  idPedidoItem!:number;
  pedidoIdItem!:number;
  itemId!:ItemDto;
  quantidade!:number;
  subtotal!:number;
}
