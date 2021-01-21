import React from 'react'

interface Props {
  projectNames: string[];
}

const ProjectsList: React.FC<Props> = (Props) => {
  return <div>
    {Props.projectNames.length>1
      ? <strong>Upcoming Projects</strong>
    :null}
    {Props.projectNames.map(p => (<p key={p}>{ p}</p>)) }
    </div>
}

export default ProjectsList;
