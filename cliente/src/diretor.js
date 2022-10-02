import React from "react";
import MaterialTable from "material-table";
import api from 'axios';

class EditableCurso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Nome", field: "Nome" },
        { title: "Idade", field: "Idade" },
        { title: "Prêmios", field: "premios" },
        { title: "Filmes", field: "filmes" },
        { title: "Avaliação", field: "avaliacao" },
        { title: "Comentário", field: "comentario" }
      ],
      data: [],
    };
  }

  async getCursos() {
    try {
        const response = await api.get('curso/listar');
        this.setState({ data: response.data })
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    }
  }

  async componentWillMount() {
    this.getCursos()
  }

  async onRowAdd(newData) {
    console.log('erro')
    const response = await api.post('curso/inserir');
    this.setState({ data: response.data })
    if (!newData.titulo) {
      alert("Nome é obrigatório!!!");
      return;
    }

    if (!newData.idade) {
      alert("Idade é obrigatório!!!");
      return;
    }

    const data = [...this.state.data];
    console.log(data)
    data.push(newData);
    this.setState({ data });
    console.log(data)

  }

  async onRowUpdate(newData, oldData) {
    const response = await api.post('curso/atualizar');
    this.setState({ data: response.data })
    const data = [...this.state.data];
    const index = data.indexOf(oldData);
    data[index] = newData;
    this.setState({ data });
  }

  async onRowDelete(oldData) {
    const response = await api.post('curso/remover');
    this.setState({ data: response.data })
    const data = [...this.state.data];
    const index = data.indexOf(oldData);
    data.splice(index, 1);
    this.setState({ data });
  }

  render() {
    return (
      <MaterialTable
        title="Diretor"
        columns={this.state.columns}
        data={this.state.data}
        localization={{
          body: {
            addTooltip: "Novo",
            deleteTooltip: "Remover",
            editTooltip: "Editar",
            emptyDataSourceMessage: "Nenhum registro na lista",
            editRow: {
              deleteText: "Confirma remoção ?",
              cancelTooltip: "Cancelar",
              saveTooltip: "Salvar",
            },
          },
          header: {
            actions: "Ações",
          },
          pagination: {
            labelDisplayedRows: "{from}-{to} de {count}",
            labelRowsSelect: "registros",
            labelRowsPerPage: "Registros por página:",
            firstAriaLabel: "Primeira",
            firstTooltip: "Primeira",
            previousAriaLabel: "Anterior",
            previousTooltip: "Anterior",
            nextAriaLabel: "Próxima",
            nextTooltip: "Próxima",
            lastAriaLabel: "Última",
            lastTooltip: "Última",
          },
          toolbar: {
            exportTitle: "Exportar",
            exportAriaLabel: "Exportar",
            exportName: "Exportar CSV",
            searchTooltip: "Pesquisar",
            searchPlaceholder: "Pesquisar",
          },
        }}
        options={{
          exportButton: true,
        }}
        editable={{
          onRowAdd: (newData) => this.onRowAdd(newData),
          onRowUpdate: (newData, oldData) => this.onRowUpdate(newData, oldData),
          onRowDelete: (oldData) => this.onRowDelete(oldData),
        }}
      />
    );
  }
}

function Diretor() {
  return (
    <div className="Diretor">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      ></link>
      <header className="App-header">
        <EditableCurso></EditableCurso>
      </header>
    </div>
  );
}

export default Diretor;