import React, { Component } from "react";

// Form
import { FaPlus, FaWindowClose, FaEdit } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import "./Main.css";
import { TbChisel } from "react-icons/tb";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [],
    index: -1,
  };

  // É executado assim que o componente for montado: retorna os valores do localstorage
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));

    if (!tarefas) return;

    // Retorna a lista salva no localstorage
    this.setState({ tarefas });
  }

  // Retorna o valor atualizado
  componentDidUpdate(prevProps, prevState) {
    // Pegando as tarefas
    const { tarefas } = this.state;

    // Conferindo se as tarefas são iguais não retorna nada
    if (tarefas === prevState.tarefas) return;

    //console.log("Tarefas mudaram", tarefas)

    // Salvando no navegador
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  handleChange = (e) => {
    this.setState({ novaTarefa: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;

    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) != -1) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      // Aqui, criamos uma nova tarefa
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "",
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  };

  handleDelete = (e, index) => {
    console.log("Delete", index);
    // Aqui eu pego todas as tarfas
    const { tarefas } = this.state;

    // Copio as tarefas para uma nova variável
    const novasTarefas = [...tarefas];

    // Das novas tarefas, quero retirar somente 1 elemento: O do índice
    novasTarefas.splice(index, 1);

    // Retorno com as novas tarefas
    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  handleEdit = (e, index) => {
    console.log("Edit", index);

    // Copiar as tarefas
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  // Botão para limpar o input
  clearButton = () => {
    this.setState({ novaTarefa: "" });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1 className="title">Lista de tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>

          {novaTarefa.length > 0 && (
            <button type="button" onClick={this.clearButton}>
              <FaMinus />
            </button>
          )}
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              <span>{tarefa}</span>
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"
                />
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
