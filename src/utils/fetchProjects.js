/* eslint-disable max-len */
export const fetchProject = async () => {
  const url = 'https://api.github.com/users/abreupamm/repos';
  const req = await fetch(url);
  const response = await req.json();
  return response;
};

export const fetchLanguageProgress = async (projectName) => {
  const projectsAll = await fetchProject();
  const projectList = projectsAll.filter((project) => project.name.toLowerCase().includes(projectName));
  const url = `https://api.github.com/repos/Abreupamm/${projectList[0].name}/languages`;
  const req = await fetch(url);
  const response = await req.json();
  [response].map((element) => delete element.Shell);
  return response;
};
