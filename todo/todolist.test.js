/* eslint-disable max-lines-per-function */
const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todo list has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('calling toArray returns the list as an array', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('first todo', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('last todo', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('shift removes and returns first', () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('pop removes and returns last', () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('isDone returns true when all done', () => {
    expect(list.isDone()).toBe(false);
    todo1.markDone();
    expect(list.isDone()).toBe(false);
    todo2.markDone();
    expect(list.isDone()).toBe(false);
    todo3.markDone();
    expect(list.isDone()).toBe(true);
  });

  test('add throws TypeError if non Todo added', () => {
    expect(() => list.add({})).toThrow(TypeError);
  });

  test('itemAt returns todo at index or ReferenceError', () => {
    expect(list.itemAt(1)).toEqual(todo2);
    expect(() => list.itemAt(3)).toThrow(ReferenceError);
  });

  test('markDoneAt marks todo at index or ReferenceError', () => {
    list.markDoneAt(1);
    expect(todo2.isDone()).toBe(true);
    expect(() => list.markDoneAt(3)).toThrow(ReferenceError);
  });

  test('markUndoneAt unmarks todo at index or ReferenceError', () => {
    expect(() => list.markUndoneAt(3)).toThrow(ReferenceError);
    todo1.isDone();
    todo2.isDone();
    todo3.isDone();
    list.markUndoneAt(1);
    expect(todo2.isDone()).toBe(false);
  });

  test('markAllDone marks all todos done', () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  });

  test('removeAt removes todo at index or ReferenceError', () => {
    expect(() => list.removeAt(3)).toThrow(ReferenceError);
    list.removeAt(1);
    expect(list.toArray()).toEqual([todo1, todo3]);
  });

  test('toString returns string representation of the list', () => {
    let string = [`---- Today's Todos ----`, '[ ] Buy milk', '[ ] Clean room', '[ ] Go to the gym'].join('\n');

    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list', () => {
    let string = [`---- Today's Todos ----`, '[X] Buy milk', '[ ] Clean room', '[ ] Go to the gym'].join('\n');
    todo1.markDone();
    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list', () => {
    let string = [`---- Today's Todos ----`, '[X] Buy milk', '[X] Clean room', '[X] Go to the gym'].join('\n');
    list.markAllDone();
    expect(list.toString()).toBe(string);
  });

  test('forEach iterates over all todos', () => {
    let result = [];
    list.forEach(todo => result.push(todo));

    expect(result).toEqual([todo1, todo2, todo3]);
  });

  test('filter returns new TodoList object with filtered todos', () => {
    todo1.markDone();
    let newList = new TodoList(list.title);
    newList.add(todo1);

    expect(newList.title).toBe(list.title);

    let doneItems = list.filter(todo => todo.isDone());
    expect(doneItems.toString()).toBe(newList.toString());
  });
});