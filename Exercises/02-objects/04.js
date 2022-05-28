// eslint-disable-next-line max-lines-per-function
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    notes: {},

    info() {
      return `${this.name} is a ${this.year} year student.`;
    },

    listCourses() {
      return this.courses;
    },

    viewNotes() {
      return this.notes;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(code, note) {
      this.notes[code] = note;
    },
  };
}

let foo = createStudent("Foo", "1st");
foo.info(); //?
// "Foo is a 1st year student"
foo.listCourses(); //?
// [];
foo.addCourse({ name: "Math", code: 101 });
foo.addCourse({ name: "Advanced Math", code: 102 });
foo.listCourses(); //?
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, "Fun course");
foo.addNote(101, "Remember to study for algebra");
foo.viewNotes(); //?
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, "Difficult subject");
foo.viewNotes(); //?
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, "Fun course");
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
