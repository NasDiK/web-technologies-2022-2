import Todos from "../services/todos.js";
import location from "../services/location.js";
import loading from "../services/loading.js";
import Form from "../components/form.js";
import Auth from "../services/auth.js";

const init = async () => {
    const {ok: isLogged, user:id} = await Auth.me()
    const formEl = document.getElementById('todos')
    const todos = document.getElementById('todos-items')
    const {data} = await Auth.me()

    if (!isLogged) {
        return location.login()
    } else {
        loading.stop()
    }
    const updateListTodos = () => {
        loading.start();
        const allTodos = Todos.getAll(data.user.id);
        todos.innerHTML = ''
        allTodos.then((x)=>{
            todos.innerHTML = x.data.reduce((acc, {id, description}) => {
                acc +=  `<div class="todo"><input id="c${id}" type="checkbox"> <div id="${id}">${description}</div></div>`;

                return acc;
            }, '');;

            x.data.forEach((el)=>{
                const div = document.getElementById(el.id).addEventListener("click", () => deleteTODO(el.id), false);
                const checkBox = document.getElementById(`c${el.id}`);
                checkBox.checked = el.completed;
                checkBox.onchange = (e) => updateStatusTodo(e, el.id);
            })
            loading.stop();
        })
    }

    async function deleteTODO(id) {
        const isDelete = confirm('Вы уверены?');
        if (isDelete) {
            loading.start();
            const res = await Todos.deleteById(id);
            if (res.ok) {
                updateListTodos();
            }
        }
    }

    const addTodo = async (description) => {
        loading.start();
        const res = await Todos.add(description);
        if(res.ok) {
            updateListTodos();
            const input = formEl.getElementsByTagName('input')[0];
            input.value = '';
        }
    }

    const updateStatusTodo = async (e, id) => {
        const checkboxValue = e.target.checked;
        e.target.checked = !e.target.checked;
        loading.start();
        const res = await Todos.updateById(id, checkboxValue);
        if(res.ok) {
            updateListTodos();
        }
    }

    new Form(formEl, {
        'description': (value) => {
            if (value.length < 3) {
                return 'Значение должно быть больше или равно 3'
            } else if (value.length >= 32) {
                return 'Значение должно быть меньше 32'
            }

            return false
        }
    }, (values) => addTodo(values));

    updateListTodos();
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}