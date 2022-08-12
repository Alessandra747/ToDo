import React, { Component } from "react";

export default class ListaTarefas extends Component {
  state = {
    tarefa: "",
    listaTarefas: []
  };

  buscarTarefa = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

  add = () => {
    if (this.state.tarefa.length) {
      this.setState({
        listaTarefas: this.state.listaTarefas.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
  };

  deletarTarefa = (id) => {
    this.setState({
      listaTarefas: this.state.listaTarefas.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Lista de tarefas</h2>
        <input onChange={this.buscarTarefa} value={this.state.tarefa} />
        <button onClick={this.add}>Adicionar</button>
        {this.state.listaTarefas.map((item) => (
          <div key={item.id}>
            <p>{item.tarefa}</p>
            <button onClick={() => this.deletarTarefa(item.id)}>
              excluir tarefa
            </button>
          </div>
        ))}
      </div>
    );
  }
}
