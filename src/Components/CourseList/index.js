import React from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "../../store/index";

function CourseList() {
  const courses = useSelector((state) => state.data); // hook que recupera o estado da aplicação, como so tem o data é recuperado dessa forma
  const dispath = useDispatch(); // hook para colocarmos as actions para o reducer

  function AddCourseAction(title) {
    //Pode definir como a Action Creator, cria a action de acordo com o valor passado para ela
    return {
      type: "ADD_COURSE",
      title: title,
    };
  }
  function addCourse() {
    dispath(AddCourseAction("Docker")); //dispara para o reducer enviando a action definida na action creator
  }

  return (
    <>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button onClick={addCourse}>adcionar curso</button>
    </>
  );
}

export default CourseList;
