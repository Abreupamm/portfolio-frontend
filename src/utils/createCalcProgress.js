import { fetchLanguageProgress } from './fetchProjects';

const createCalcProgress = async (projectName) => {
  const getProgress = await fetchLanguageProgress(projectName);

  const calc = Object.values(getProgress).reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);

  const values = Object.values(getProgress).map((value) => (
    ((value / calc) * 100).toFixed()
  ));

  const keys = Object.keys(getProgress);

  return { keys, values };
};

export default createCalcProgress;
