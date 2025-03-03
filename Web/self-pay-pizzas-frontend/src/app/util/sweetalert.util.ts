export class SweetalertUtil {

  carregandoDados(mensagem: string, subMensagem: string, func?:()=>void){
    let timerInterval:any;
    (window as any).Swal.fire({
      title: "Carregando...",
      html: mensagem,
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        (window as any).Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result:any) => {
      if (result.dismiss === (window as any).Swal.DismissReason.timer) {
        if (func) {
          func();
        }
        this.sucessoItem(subMensagem);
      }
    });
  }

  sucessoItem(mensagem: string){
    (window as any).Swal.fire({
      position: "top-end",
      icon: "success",
      title: mensagem,
      showConfirmButton: false,
      timer: 1500
    });
  }

  erroItem(mensagem: string){
    (window as any).Swal.fire({
      position: "top-end",
      icon: "error",
      title: mensagem,
      showConfirmButton: false,
      timer: 1500
    });
  }

  deletarDados(
    id: number,
    type: string,
    deleteAdmins:(id: number)=>void,
    deleteCustomers:(id: number)=>void
  ) {
    (window as any).Swal.fire({
      title: "Tem certeza?",
      text: "Essa ação não poderá ser desfeita!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sim, excluir!",
      cancelButtonText: "Cancelar"
    }).then((result:any) => {
      if(result.isConfirmed){
        if (type === 'admin') {
          deleteAdmins(id);
          (window as any).Swal.fire("Excluído!", "O registro foi removido com sucesso.", "success");
        }else {
          deleteCustomers(id);
          (window as any).Swal.fire("Excluído!", "O registro foi removido com sucesso.", "success");
        }
      }
    });
  }

  carregarDadosSucesso(){
    (window as any).Swal.fire({
      title: 'Sucesso!',
      text: 'Dados carregados com sucesso',
      icon: 'success',
      confirmButtonText: 'Fechar',
      timer: 2000,
      timerProgressBar: true,
    });
  }

  carregarDadosErro(){
    (window as any).Swal.fire({
      title: 'Atenção!',
      text: 'Erro ao carregar dados',
      icon: 'error',
      confirmButtonText: 'Fechar',
      timer: 2000,
      timerProgressBar: true,
    });
  }

  novoPedidoCarregado(getItemOrder:()=>void){
    (window as any).Swal.fire({
      title: 'Atenção!',
      text: 'Um novo pedido foi solicitado',
      icon: 'warning',
      confirmButtonText: 'Fechar',
    });
    getItemOrder();
    localStorage.removeItem('novoPedido');
  }

  novoPagamentoCarregado(getItemOrder:()=>void){
    (window as any).Swal.fire({
      title: 'Atenção!',
      text: 'Um novo pedido foi pago!',
      icon: 'warning',
      confirmButtonText: 'Fechar',
    });
    getItemOrder();
    localStorage.removeItem('pagamento');
  }
}
