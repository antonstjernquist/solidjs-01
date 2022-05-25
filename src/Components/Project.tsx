import { IProject } from '../App';

const Project = (props: { project: IProject }) => {
  return (
    <li>
      <b>{props.project.name}</b>
      <p>{props.project.description}</p>
      <p>
        <i>Created at: {props.project.created_at}</i>
      </p>
    </li>
  );
};

export default Project;
