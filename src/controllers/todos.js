const pool = require("../data/database");

exports.getTodos = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    let todos = await connection.query("SELECT * FROM todos");

    todos = todos[0].map((todo) => {
      if (todo.isDone === 0) {
        return {
          ...todo,
          isDone: false,
        };
      }
      return {
        ...todo,
        isDone: true,
      };
    });
    connection.release();
    res.status(200).send({
      status: "success",
      message: "resource has successfully get",
      data: todos,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.postTodo = async (req, res) => {
  const { description, isDone } = req.body;
  try {
    const connection = await pool.getConnection();
    const query = "INSERT INTO todos (description, isDone) VALUES (?,?)";
    let todos = await connection.query(query, [description, isDone]);
    todos = await connection.query("SELECT * FROM todos");

    todos = todos[0].map((todo) => {
      if (todo.isDone === 0) {
        return {
          ...todo,
          isDone: false,
        };
      }
      return {
        ...todo,
        isDone: true,
      };
    });
    connection.release();
    res.status(201).send({
      status: "success",
      message: "resource has successfully created",
      data: todos,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await pool.getConnection();
    const todos = await connection.query("DELETE FROM todos WHERE id = ?", [
      id,
    ]);
    connection.release();
    res.send({
      status: "success",
      message: "resource has successfully delete",
      data: todos[0],
    });
  } catch (error) {
    console.log(error);
  }
};

exports.putTodo = async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  try {
    const connection = await pool.getConnection();
    await connection.query("UPDATE todos SET ? WHERE id = ?", [body, id]);
    let todos = await connection.query(
      "SELECT * FROM todos WHERE id = ? LIMIT 1",
      [id]
    );

    todos = todos[0].map((todo) => {
      if (todo.isDone === 0) {
        return { ...todo, isDone: false };
      }
      return { ...todo, isDone: true };
    });
    connection.release();
    res.send({
      status: "success",
      message: "resource has successfully get",
      data: todos,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.template = (req, res) => {
  res.send({
    status: "success",
    message: "resource has successfully get",
    data: "",
  });
};
