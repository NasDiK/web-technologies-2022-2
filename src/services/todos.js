import TodosRepository from "../repository/todos.js";

class Todos {
  static async add (values) {
    return await TodosRepository.add(values)
  }

  static async getById (id) {
    return await TodosRepository.getById(id)
  }

  static async updateById (id, completed) {
    return await TodosRepository.updateById(id, completed)
  }

  static async getAll () {
    return await TodosRepository.getAll()
  }

  static async deleteById (id) {
    return await TodosRepository.deleteById(id)
  }

}

export default Todos