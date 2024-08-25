import "./style.css";

export default function Formulario() {
  return (
    <div>
      <form className="form4">
        <h1>Cadastro de Produtos</h1>

        <div className="input">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            type="text"
            name="nome"
            placeholder="Informe o nome do produto"
          />
        </div>

        <div className="caracteristicas">
          <div className="input">
            <label htmlFor="preco">Preço de venda</label>
            <input
              type="text"
              name="preco"
              placeholder="Informe o preço de venda"
            />
          </div>
          <div className="input">
            <label htmlFor="custo">Preço de custo</label>
            <input
              type="text"
              name="custo"
              placeholder="Informe o preço de custo"
            />
          </div>
        </div>

        <div className="caracteristicas">
          <div className="input">
            <label htmlFor="fornecedor">Fornecedor</label>
            <select name="fornecedor">
              <option value="Selecione um fornecedor">
                Selecione um fornecedor
              </option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="categoria">Categoria</label>
            <select name="categoria">
              <option value="Selecione uma categoria">
                Selecione uma categoria
              </option>
            </select>
          </div>
        </div>

        <div className="input">
          <label htmlFor="descricao">Descrição do produto</label>
          <textarea
            name="descricao"
            id="descricao"
            placeholder="Informe a descrição do produto"
            rows="8"
            cols="50"
          ></textarea>
        </div>

        <div className="btn">
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}
