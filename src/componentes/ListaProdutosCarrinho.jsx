import { Button, Table, Alert, Container } from 'react-bootstrap'

export default function ListaProdutosCarrinho(props) {

    function addProduto(produto){
        if(produto.quantidade > 1){

        }
    }

    function lessProduto(produto){
        if(produto.quantidade > 1){

        }
    }

    function excluirProduto(produto){
        if(window.confirm("Deseja realmente excluir o produto com ID: " + produto.id)){
            props.setListaProdutosCarrinho(props.listaProdutosCarrinho.filter(
                (item) => {
                    return item.id !== produto.id
                }
            ))
        }
    }

    return (
        <Alert variant='dark'>
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>Descricao</th>
                            <th>Quantidade</th>
                            <th>Preco</th>
                            <th>SubTotal</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.listaProdutosCarrinho.map((produto, i) => {
                            return <tr key={i}>
                                <td>{produto.id}</td>
                                <td>{produto.titulo}</td>
                                <td>{produto.descricao}</td>
                                <td>{produto.quantidade}</td> {/*<td><input type='number' value={produto.quantidade} min="1" /></td>*/}
                                <td>{produto.preco}</td>
                                <td>{produto.quantidade * produto.preco}</td>
                                <td>
                                    <Button variant='outline-danger' className='mb-1' style={{ borderColor: 'white' }} onClick={() => { excluirProduto(produto) }}>Excluir</Button>

                                    <Button variant='outline-success' style={{ borderColor: 'white' }} onClick={() => { addProduto(produto) }}>+

                                    </Button> <Button variant='outline-warning' style={{ borderColor: 'white' }} onClick={() => { lessProduto(produto) }}>-</Button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table>

                <Container className='text-center'>
                    <Button variant='warning' style={{ borderColor: 'black' }} onClick={() => {
                        props.mostrarLista(false);
                    }}>Voltar</Button>
                </Container>
            </div>
        </Alert>
    );
}