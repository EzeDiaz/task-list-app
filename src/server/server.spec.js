import { addNewTask, updateTask } from './server'

(async function myFunc() {
  await addNewTask({
    name: "New task by Eze",
    id: "54321"
  });

  await updateTask({
    name: "New task by Eze - UPDATED",
    id: "54321"
  })
}) ();

