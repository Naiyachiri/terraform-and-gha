import './App.css';
import { useState } from 'react';

import Modal from './components/Modals';

//temp values until we set up the rest calls
const projectItems = [
  {
    id: 1,
    title: "Project 1",
    description: "OG Portfolio",
    completed: true,
    thumbnail_url: "",
    project_url: "",
    tags: []
  },
  {
    id: 2,
    title: "React Django Portfolio",
    description: "React, Django, SQLite, GHA, Terraform, AWS",
    completed: false,
    thumbnail_url: "",
    project_url: "",
    tags: []
  },
]

// Entrypoint into the React App
function App() {
  const [view, setView] = useState('all');
  // links local list of projects with what ever the future API call retrieves
  let [projectList, setProjectList] = useState(projectItems);
  // determines whether or not the modal displays
  let [showModal, setShowModal] = useState(false);
  // contains the data regarding selected item for the modal
  let [activeItem, setActiveItem] = useState({
    title: "",
    description: "",
    completed: false
  });

  // logic regarding toggling the modal show state
  let toggleModal = () => {
    return setShowModal(!showModal);
  }

  // submits updated model
  let submitItem = (item) => {
    toggleModal();
    alert(`save ${JSON.stringify(item)}`)
  }

  // deletes selected model
  let deleteItem = (item) => {
    alert(`delete ${JSON.stringify(item)}`)
  }

  // opens modal for editing a project
  let editItem = (item) => {
    setActiveItem({ ...item });
    toggleModal();
  }

  // create new project
  let createItem = () => {
    // set default empty item
    const item = {
      title: '',
      description: '',
      completed: false,
      thumbnail_url: '',
      project_url: '',
      tags: []
    }
    setActiveItem({ ...item });
    toggleModal();
  }

  /**
   * renders tabs with either completed or incomplete on the tab based on
   * the view state
   */
  let renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={view === 'all' ? "nav-link active" : "nav-link"}
          onClick={() => setView('all')}
        >
          All
        </span>
        <span
          className={view && view !== 'all' ? "nav-link active" : "nav-link"}
          onClick={() => setView(true)}
        >
          Complete
        </span>
        <span
          className={view ? "nav-link" : "nav-link active"}
          onClick={() => setView(false)}
        >
          Incomplete
        </span>
      </div>
    )
  }

  /**
   * Dynamically renders list of projects based on the toDoItems state
   */
  let renderProjects = () => {
    return projectList.map(project => {
      // return nothing if the view is not set to all and project does not match filter
      if (view !== 'all' && project.completed !== view) {
        return ""
      }

      return (
        <li
          key={project.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span
            className={`todo-title mr-2 ${view ? "completed-todo" : ""
              }`}
            title={project.description}
          >
            {project.title}
          </span>
          <span>
            <button
              className="btn btn-secondary mr-2"
              onClick={() => { editItem(project) }}
            >
              Edit Project
            </button>
            <button
              className="btn btn-danger"
              onClick={() => { deleteItem(project) }}
            >
              Delete Project
            </button>
          </span>
        </li>
      )
    });
  }

  /**
   * Main render which will generate the portfolio of projects
   */
  return (
    <main className="container">
      <h1 className="text-white text-uppercase text-center my-4">Project Portfolio</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <button
                className="btn btn-primary"
                onClick={() => { createItem() }}
              >
                Add Project
              </button>
            </div>
            {renderTabList()}
            <ul className="list-group list-group-flush border-top-0">
              {renderProjects()}
            </ul>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          activeItem={activeItem}
          toggle={toggleModal}
          onSave={submitItem}
        />
      )}
    </main>
  );
}

export default App;
