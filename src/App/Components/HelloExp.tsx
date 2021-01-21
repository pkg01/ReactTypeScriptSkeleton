import React from 'react';
import List from './ProjectsList';

interface Props {
  projectNames: string;
}

const HelloExp: React.FC<Props> = (Props) => {
  const [newProjects, setNewProjects] = React.useState([""]);
  const [newProject, setNewProject] = React.useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProject(e.target.value);
    console.log(newProject);
  };

  const addProject = () => {
    setNewProjects([...newProjects, newProject]);
    setNewProject("");
  };

  return (
    <div className="App">
        <p>
        Hello Experimenters. Happy {Props.projectNames}{newProjects.join(",")}
      </p>
      <List projectNames={ newProjects}/>
      <input type="text" onChange={onChange} value={newProject}></input>
      <button onClick={addProject}> Add Project</button>
    </div>
  );
}

export default HelloExp;